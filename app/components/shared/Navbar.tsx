import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { userHasAccess } from '@/app/utils/accessControl';

const buttonStyle =
  'bg-neutral-100 p-4 rounded-md w-[100px] text-center hover:bg-neutral-200 active:bg-neutral-300';

interface Menu {
  href: string;
  label: string;
  access?: boolean;
}

const menus: Menu[] = [
  { href: '/', label: 'Home', access: userHasAccess('Home') },
  { href: '/list', label: 'List', access: userHasAccess('List') },
  { href: '/setting', label: 'Setting', access: userHasAccess('Setting') },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center px-3 py-5 justify-between sticky top-0 z-50 shadow-md bg-white">
      <div className="flex gap-2 text-neutral-800 text-base font-semibold items-center">
        {menus.map(
          (menu, index) =>
            menu.access && (
              <Link key={index} href={menu.href} className={buttonStyle}>
                {menu.label}
              </Link>
            ),
        )}
      </div>

      <Image
        src="https://pspexpress.com/wp-content/uploads/2023/06/PSP-Logo-01-1-1.svg"
        alt="psp"
        width={150}
        height={50}
      />
    </nav>
  );
};
