// 'use client'

// import React, { useEffect, useState } from 'react'
// import Link from 'next/link'
// import Logo from './Logo'

// function Nav() {
//     const [header, setHeader] = useState(false);

//     const scrollHeader = () => {
//         if (window.scrollY >= 20) {
//             setHeader(true);
//         } else {
//             setHeader(false);
//         }
//     };
//     useEffect(() => {
//         window.addEventListener('scroll', scrollHeader);
//         return () => {
//             window.removeEventListener('scroll', scrollHeader);
//         };
//     }, []);



//     return (
//         // <div className={header ? " fixed w-[100%] text-white bg-red-300" : "bg-[transparent]"}>
//         <div className={header ? 'scrolled' : 'shadow-md'}>
//             <div className='header flex w-[80%] justify-between m-auto py-[30px]'>
//                 <div className='logo flex gap-10 justify-start' >
//                     <p>
//                         <Logo />
//                     </p>
//                     <h2 className='font-extrabold text-2xl font-serif'>HATUA WATER & ENERGY SOLUTIONS</h2>
//                 </div>
//                 <div className='menu'>
//                     <nav>
//                         <ul className='flex gap-x-20 gap-y-10 text-l hover:bg-sky-700'>
//                             <li>
//                                 <Link href="/">Home</Link>
//                             </li>
//                             <li>
//                                 <Link href="/about">About</Link>
//                             </li>
//                             <li>
//                                 <Link href="">Services</Link>
//                             </li>
//                             <li>
//                                 <Link href="">Projects</Link>
//                             </li>
//                             <li>
//                                 <Link href="">Contacts</Link>
//                             </li>
//                             <li>
//                                 <Link href="">Equipments</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>


//             </div>

//         </div>
//     )
// }

// export default Nav
