// File: components/Header.tsx
import Link from 'next/link';
import Loader from './loader/loader';

// import { usePathname } from 'next/navigation';

export default function Header() {
  return (
    <main className='top-0 sticky z-10'>
    <div className='w-full flex justify-center '>
    <header className="w-[310px] md:w-[400px] lg:w-[450px] px-6  py-2 flex items-center justify-between bg-[#00D9C0] rounded-3xl shadow-lg mt-4 font-sans font-semibold">
      <Link href="/" className="text-sm lg:text-xl md:text-lg text-[#393E46]  font-medium">
         <Loader/>
      </Link>
      
      <nav className="flex lg:gap-6  md:gap-6 gap-4 text-xs lg:text-lg md:text-l ml-2 ">
        <Link href="/" className="hover:text-white text-[#393E46] transition-colors">
          Home
        </Link>
        <Link href="/works" className="hover:text-white text-[#393E46] transition-colors">
          Works
        </Link>
        <Link href="/about" className="hover:text-white text-[#393E46] transition-colors">
          About
        </Link>
        <Link href="/contact" className="hover:text-white text-[#393E46] transition-colors">
          Contact
        </Link>
      </nav>
    </header>
    </div>
    </main>
  );
}
