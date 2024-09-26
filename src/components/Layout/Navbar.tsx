import { Button, Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems, } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from "../../assets/logo.png"
import defaultUser from "../../assets/defaultUser.jpg"
import { useState } from 'react'
const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Courses', href: '#', current: false },
    { name: 'Careers', href: '#', current: false },
    { name: 'About Us', href: '#', current: false },
]



export default function Example() {

    const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
    return (
        <Disclosure as="nav" className="bg-secondary">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button*/}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-text hover:bg-text hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    {/* Center the logo on small screens */}
                    <div className=" inset-y-0 flex justify-center items-center w-full sm:static sm:w-auto sm:justify-start">
                        <img
                            alt="Your Company"
                            src={logo}
                            className="h-24 sm:h-24 w-auto m-0 p-0"
                        />
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex flex-shrink-0 items-center">

                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={`${item.current
                                            ? 'bg-background text-white'
                                            : 'text-primary hover:bg-primary hover:text-background'
                                            } rounded-full px-3 py-2 text-sm font-medium`}
                                    >
                                        {item.name}
                                    </a>

                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


                        {/* Profile dropdown */}
                        {!isSignedIn ? (
                            <div className="flex space-x-3">
                                <Button className=" hover:bg-background hover:text-primary inline-flex items-center gap-2 rounded-full bg-primary py-1.5 px-3 text-sm/6 font-semibold text-gray-800 shadow-inner shadow-white/10 focus:outline-none  data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white  ">
                                    Log In
                                </Button>
                                <Button className="border-none hover:border hover:border-styling hover:bg-primary hover:text-styling inline-flex items-center gap-2 rounded-full  bg-white py-1.5 px-3 text-sm/6 font-semibold text-white bg-opacity-30 shadow-inner shadow-white/10 focus:outline-none  data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
                                    Sign Up
                                </Button>
                            </div>
                        ) : (
                            <Menu as="div" className="relative ml-3">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm outline-none">
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src={defaultUser}
                                            className="h-8 w-8 rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems
                                    transition
                                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                                >
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-secondary hover:text-primary">
                                            Your Profile
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-secondary hover:text-primary">
                                            Settings
                                        </a>
                                    </MenuItem>
                                    <MenuItem>
                                        <a href="#" className="block px-4 py-2 text-sm text-text hover:bg-secondary hover:text-primary">
                                            Sign out
                                        </a>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        )}

                    </div>
                </div>
            </div>

            {/* Burger Menu */}
            <DisclosurePanel className="sm:hidden sm:z-50">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={`
                                ${item.current ? 'bg-background text-white' : 'text-primary hover:bg-primary hover:text-background '}
                                'block rounded-md px-3 py-2 text-base font-medium',
                            `}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}
