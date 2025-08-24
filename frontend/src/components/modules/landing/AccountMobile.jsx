import React from 'react'

import { 
    BadgeCheck, 
    Bell, 
    ChevronsUpDown, 
    Menu, 
    PanelLeft 
} from 'lucide-react'

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from "@/components/ui/avatar"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import LogoutBtn from './LogoutBtn'
import EachUtils from '@/utils/EachUtils'
import { Button } from '@/components/ui/button'
import { getProfilePicture } from '@/lib/utils'
import { useAuth } from '@/context/AuthContext'
import { getInitial } from '@/utils/getInitial'
import { LIST_NAVBAR } from '@/constants/listNavbar'

const AccountMobile = () => {
    const { userData } = useAuth();

    return (
        <div className="flex lg:hidden">
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="secondary" size="icon">
                        <Menu className="text-black" />
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Atma giri group</span>
                                <img
                                    alt="logo yayasan atma giri group"
                                    src="/logo.png"
                                    className="h-16 w-auto"
                                />
                            </a>
                        </SheetTitle>
                    </SheetHeader>
                    <div className="space-y-2 px-5">
                        <EachUtils
                            of={LIST_NAVBAR}
                            render={(item, index) =>
                                item.subMenu ? (
                                    <Accordion type="single" collapsible>
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className="flex items-center h-10">
                                                <span className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">{item.title}</span>
                                            </AccordionTrigger>
                                            <AccordionContent className="p-0">
                                                <EachUtils
                                                    of={item.subMenu}
                                                    render={(subItem, subIndex) => (
                                                        <a
                                                            key={subIndex}
                                                            href={subItem.url} 
                                                            className="flex items-center text-sm/6 font-medium text-gray-900 gap-3 my-3"
                                                        >
                                                            <div className="flex items-center justify-center w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                                                                <subItem.icon size={18} />
                                                            </div>
                                                            <span className="font-medium">
                                                                {subItem.title}
                                                            </span>
                                                        </a>
                                                    )}
                                                />
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                ) : (
                                    <a
                                        key={index}
                                        href={item.url}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                                    >
                                        {item.title}
                                    </a>
                                )
                            }
                        />
                    </div>
                    <SheetFooter>
                        {userData ? (
                            <DropdownMenu>
                                <DropdownMenuTrigger>
                                    <Button variant="ghost" className="w-full">
                                        <Avatar className="size-10 ring-2 ring-white shadow-sm">
                                            <AvatarImage 
                                                src={getProfilePicture(userData)}
                                                referrerPolicy="no-referrer"
                                                className="object-cover"
                                            />
                                            <AvatarFallback className="bg-gray-200">{getInitial(userData.username)}</AvatarFallback>
                                        </Avatar>
                                        <div className="grid flex-1 text-left text-sm leading-tight">
                                            <span className="truncate font-semibold">{userData.name}</span>
                                            <span className="truncate text-xs">{userData.email}</span>
                                        </div>
                                        <ChevronsUpDown className="ml-auto size-4" />
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="min-w-56 rounded-lg">
                                    <DropdownMenuLabel className="p-0 font-normal">
                                        <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                            <Avatar className="size-9 ring-2 ring-white shadow-sm">
                                                <AvatarImage 
                                                    src={userData ? getProfilePicture(userData) : ""}
                                                    referrerPolicy="no-referrer"
                                                    className="object-cover"
                                                />
                                                <AvatarFallback className="bg-gray-200">
                                                    {getInitial(userData.username)}
                                                </AvatarFallback>
                                            </Avatar>
                                            <div className="grid flex-1 text-left text-sm leading-tight">
                                                <span className="truncate font-semibold">{userData.name}</span>
                                                <span className="truncate text-xs">{userData.email}</span>
                                            </div>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {userData.role !== "user" && (
                                        <>
                                            <DropdownMenuGroup>
                                                <DropdownMenuItem>
                                                    <a href="/dashboard" className="flex items-center gap-2">
                                                        <PanelLeft />
                                                        Dashboard
                                                    </a>
                                                </DropdownMenuItem>
                                            </DropdownMenuGroup>
                                            <DropdownMenuSeparator />
                                        </>
                                    )}
                                    <DropdownMenuGroup>
                                        <DropdownMenuItem>
                                            <a href={userData.role !== "user" ? `/dashboard/setting` : `/profile/${userData._id}`} className="flex items-center gap-2">
                                                <BadgeCheck />
                                                Profile
                                            </a>
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            <a href={userData.role !== "user" ? `/dashboard/notification` : `/profile/${userData._id}`} className="flex items-center gap-2">
                                                <Bell />
                                                Pemberitahuan
                                            </a>
                                        </DropdownMenuItem>
                                    </DropdownMenuGroup>
                                    <DropdownMenuSeparator />
                                    <LogoutBtn isMobile={true} />
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ) : (
                            <a
                                href="/sign-in"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                            >
                                Log in
                            </a>
                        )}
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default AccountMobile