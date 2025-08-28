import React from 'react';
import { ChevronDown } from 'lucide-react';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import EachUtils from '@/utils/EachUtils';
import { LIST_NAVBAR } from '@/constants/listNavbar';
import AccountMobile from '@/components/modules/landing/AccountMobile';
import AccountDesktop from '@/components/modules/landing/AccountDesktop';

const Navbar = () => {
    return (
        <header className="w-full absolute z-10 text-white">
            <nav aria-label="Global" className="flex items-center justify-between pt-4 pb-2 px-4 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Yayasan Atma giri group</span>
                        <img
                            alt="logo yayasan atma giri group"
                            src="/logo-4.png"
                            className="h-16 w-auto"
                        />
                    </a>
                </div>

                <AccountMobile />

                <div className="hidden lg:flex lg:gap-x-12 items-center">
                    <EachUtils
                        of={LIST_NAVBAR}
                        render={(item, index) => 
                            item.subMenu ? (
                                <DropdownMenu key={index}>
                                    <DropdownMenuTrigger className="group flex items-center justify-center gap-2 cursor-pointer outline-none">
                                        <span className={"text-sm font-semibold group-hover:text-blue-500 transition-colors duration-200"}>
                                            {item.title}
                                        </span>
                                        <ChevronDown 
                                            size={16} 
                                            className={"group-hover:text-blue-500 group-data-[state=open]:rotate-180 transition-all duration-200"}
                                        />
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent 
                                        align="start" 
                                    >
                                        <EachUtils
                                            of={item.subMenu}
                                            render={(subItem, subIndex) => (
                                                <DropdownMenuItem 
                                                    key={subIndex}
                                                >
                                                    <a 
                                                        href={subItem.url} 
                                                        className="flex items-center justify-center text-sm/6 font-medium text-gray-900 gap-3"
                                                    >
                                                        <div className="flex items-center justify-center w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-200">
                                                            <subItem.icon size={18} />
                                                        </div>
                                                        <span className="font-medium">
                                                            {subItem.title}
                                                        </span>
                                                    </a>
                                                </DropdownMenuItem>
                                            )}
                                        />
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            ) : (
                                <a 
                                    key={index} 
                                    href={item.url} 
                                    className={"text-sm/6 font-semibold hover:text-blue-500"}
                                >
                                    {item.title}
                                </a>
                            )
                        }
                    />
                </div>

                <AccountDesktop />
            </nav>
        </header>
    );
};

export default Navbar;