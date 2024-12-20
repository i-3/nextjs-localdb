// import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';
import clsx from 'clsx';

export default function SideNav() {
  return (
    <div className='flex h-full flex-col px-3 py-4 md:px-2'>
      <div className='bg-lime-900 mb-2 flex h-20 items-center justify-center rounded-md p-4 md:h-40'>
        {/* <div className='w-32 text-white md:w-40'>
          <AcmeLogo />
        </div> */}
        <a
          href='https://freedns.afraid.org'
          target='_blank'
          className='text-neutral-50 hover:text-lime-500 underline'
        >
          Free DNS
        </a>
      </div>

      <div className='flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2'>
        <NavLinks />

        <div className='hidden h-auto w-full grow rounded-md bg-neutral-800 md:block'></div>

        <form
          action={async () => {
            'use server';
            // await signOut();
          }}
        >
          <button
            className={clsx(
              'flex h-[48px] w-full grow items-center justify-center',
              'gap-2 rounded-md bg-neutral-800 text-neutral-300 p-3 text-sm font-medium',
              'hover:bg-gray-600 hover:text-lime-600 md:flex-none md:justify-center md:p-2 md:px-3'
            )}
          >
            <PowerIcon className='w-6' />

            <div className='hidden md:block'>Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
