import { useAtom } from "jotai";
import { Plus, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

import { 
    isOpenAtom, 
    previewAlbumAtom, 
    previewPictureAtom,
} from "@/jotai/atoms";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar";

import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { getProfilePicture } from "@/lib/utils";
import { getInitial } from "@/utils/getInitial";
import ProfilePictureDialog from "./ProfilePictureDialog";

const UserInfo = () => {
    const { userData, loading } = useAuth();
    const [isOpen, setIsOpen] = useAtom(isOpenAtom);
    const [, setPreviewAlbum] = useAtom(previewAlbumAtom);
    const [previewPicture, setPreviewPicture] = useAtom(previewPictureAtom);

    // Loading state
    if (loading) {
        return (
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-12 sm:-mt-16 px-4 relative z-10">
                <Skeleton className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white shadow-md" />
                <div className="space-y-2 sm:pb-2">
                    <Skeleton className="h-8 w-40" />
                    <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex-grow"></div>
                <Skeleton className="h-10 w-32 hidden sm:block" />
            </div>
        );
    }

    // Guest state (no user data)
    if (!userData) {
        return (
            <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-12 sm:-mt-16 px-4 relative z-10">
                <Avatar className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-md">
                    <AvatarFallback className="text-4xl">?</AvatarFallback>
                </Avatar>
                <div className="space-y-1 sm:pb-2">
                    <h1 className="text-2xl font-medium">Guest</h1>
                    <p className="text-sm text-gray-500">Not signed in</p>
                </div>
            </div>
        );
    }

    // Authenticated user state
    return (
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 -mt-12 sm:-mt-16 px-4 relative z-10">
            <Dialog open={isOpen} onOpenChange={(open) => {
                    setIsOpen(open);
                    if (!open) {
                        setPreviewAlbum("");
                        setPreviewPicture("");
                    }
                }}
            >
                <Avatar 
                    onClick={() => setIsOpen(true)} 
                    className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                >
                    <AvatarImage 
                        src={previewPicture || getProfilePicture(userData)}
                        referrerPolicy="no-referrer"
                        className="object-cover"
                        onError={(e) => {
                            console.log("Image failed to load:", e.target.src);
                        }}
                    />
                    <AvatarFallback className="text-4xl">
                        {getInitial(userData?.username || userData?.email || "U")}
                    </AvatarFallback>
                </Avatar>
                <ProfilePictureDialog />
            </Dialog>

            <div className="space-y-1 sm:pb-2">
                <h1 className="text-2xl font-medium">
                    {userData?.username || userData?.email?.split('@')[0] || "User"}
                </h1>
                <p className="text-sm text-gray-500">{userData?.email}</p>
                {userData?.role && (
                    <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                        {userData.role}
                    </span>
                )}
            </div>
            
            <div className="flex-grow"></div>
            
            {userData?._id && (
                <Button variant="outline" className="hidden sm:flex items-center gap-2 shadow-sm" asChild>
                    <Link to={`/article/create/${userData._id}`}>
                        <Plus size={16} /> Tambah Konten
                    </Link>
                </Button>
            )}
        </div>
    );
};

export default UserInfo;