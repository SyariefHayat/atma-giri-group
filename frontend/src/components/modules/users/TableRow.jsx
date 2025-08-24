import React from 'react';

import { 
    MoreHorizontal, 
    ShieldCheck, 
    UserX 
} from 'lucide-react';

import { 
    DropdownMenu, 
    DropdownMenuContent, 
    DropdownMenuItem, 
    DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from '@/components/ui/avatar';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getInitial } from '@/utils/getInitial';
import { useAuth } from '@/context/AuthContext';
import { getRoleLevel } from '@/utils/getRoleLevel';
import { TableCell, TableRow } from "@/components/ui/table";
import { formatDate, getProfilePicture } from '@/lib/utils';

const UserTableRow = ({ user, onRoleChange, onDelete }) => {
    const { userData } = useAuth();

    const getRoleBadge = (role) => {
        switch(role) {
            case 'developer':
                return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 hover:bg-yellow-100">Developer</Badge>;
            case 'project manager':
                return <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-100">Project Manager</Badge>;
            case 'project curator':
                return <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">Project Curator</Badge>;
            case 'fundraiser':
                return <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-100">Fundraiser</Badge>;
            default:
                return <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-100">User</Badge>;
        }
    };

    return (
        <TableRow>
            <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                    <Avatar className="w-10 h-10">
                        <AvatarImage 
                            src={getProfilePicture(user)}
                            referrerPolicy="no-referrer"
                            className="object-cover"
                        />
                        <AvatarFallback className="bg-gray-200">{getInitial(user.username)}</AvatarFallback>
                    </Avatar>
                    {user.username}
                </div>
            </TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
                <Badge variant="outline" className="capitalize">
                    {user.provider}
                </Badge>
            </TableCell>
            <TableCell>
                {getRoleBadge(user.role)}
            </TableCell>
            <TableCell>
                {user.createdAt && formatDate(user.createdAt)}
            </TableCell>
            <TableCell>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="cursor-pointer">
                            <MoreHorizontal size={16} />
                        </Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent align="end">
                        {getRoleLevel(userData.role) > getRoleLevel(user.role) ? (
                            <DropdownMenuItem 
                                className="flex items-center gap-2 cursor-pointer"
                                onClick={() => onRoleChange(user)}
                            >
                                <ShieldCheck size={14} />
                                <span>Ubah Role</span>
                            </DropdownMenuItem>
                        ) : (
                            <DropdownMenuItem 
                                disabled
                                className="flex items-center gap-2 opacity-50 cursor-not-allowed"
                            >
                                <ShieldCheck size={14} />
                                <span className="italic">Role Anda lebih rendah dari target user</span>
                            </DropdownMenuItem>
                        )}

                        {getRoleLevel(userData.role) > getRoleLevel(user.role) && (
                            <DropdownMenuItem 
                                className="flex items-center gap-2 text-red-600 cursor-pointer"
                                onClick={() => onDelete(user)}
                            >
                                <UserX size={14} />
                                <span>Hapus User</span>
                            </DropdownMenuItem>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </TableCell>
        </TableRow>
    );
};

export default UserTableRow;