import React from 'react';
import { toast } from 'sonner';
import { LogOut } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import { auth } from '@/services/firebase';
import { useAuth } from '@/context/AuthContext';
import { apiInstanceExpress } from '@/services/apiInstance';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';

const LogoutBtn = ({ isMobile }) => {
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    
    const handleSignOut = async () => {
        const toastId = toast.loading("Mengeluarkan akun anda...");
        
        try {
            // Jika ada currentUser, coba logout dari API dulu
            if (currentUser) {
                try {
                    const token = await currentUser.getIdToken();
                    await apiInstanceExpress.post("/sign-out", {}, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                } catch (apiError) {
                    console.warn("API logout failed, continuing with Firebase logout:", apiError);
                    // Jangan return di sini, tetap lanjutkan Firebase logout
                }
            }
            
            // Selalu lakukan Firebase logout
            await signOut(auth);
            
            toast.success("Berhasil keluar", { id: toastId });
            
            // Redirect ke halaman login atau home
            navigate('/login'); // atau navigate('/') sesuai kebutuhan
            
        } catch (error) {
            console.error("Logout error:", error);
            
            // Jika Firebase logout gagal, coba paksa logout
            try {
                await signOut(auth);
                toast.success("Berhasil keluar", { id: toastId });
                navigate('/login');
            } catch (forceLogoutError) {
                console.error("Force logout failed:", forceLogoutError);
                toast.error("Gagal keluar dari akun", { id: toastId });
            }
        }
    };

    return (
        <DropdownMenuItem className="cursor-pointer" onClick={handleSignOut}>
            <LogOut className={`${isMobile ? "" : "mr-2 h-4 w-4"}`} />
            Keluar
        </DropdownMenuItem>
    );
};

export default LogoutBtn;