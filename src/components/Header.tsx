// // src/components/Header.tsx

// import React from 'react';

// const Header = () => {
//   return (
//     <header className="bg-[#082567] shadow-sm py-4 px-4 md:px-6 flex flex-wrap items-center justify-between gap-4">
//       {/* Logo */}
//       <div className="flex items-center gap-2 font-bold text-lg">
//         {/* <div className="bg-gray-300 border border-gray-400 rounded w-10 h-10 flex items-center justify-center text-xs">
//           LOGO
//         </div> */}
//         <span className=" text-white">Jambo Home Ventures</span>
//       </div>

//       {/* Navigation - hidden on small screens */}
//       <nav className="hidden md:flex flex-wrap gap-4 text-sm font-medium  text-white">
//         {['FOR RENT', 'FOR SALE', 'LAND', 'FURNISHED HOMES', 'OFF-PLAN PROJECTS', 'AGENTS', 'BLOG'].map((item) => (
//           <a key={item} href="#" className="hover:text-green-600 transition-colors">
//             {item}
//           </a>
//         ))}
//       </nav>

//       {/* Action Buttons */}
//       <div className="flex items-center gap-3">
//         <button className="bg-[#082567] hover:bg-[#0047AB] text-white text-sm font-bold py-2 px-4 rounded transition-colors">
//           LIST PROPERTY
//         </button>
//         <button className="bg-[#082567] hover:bg-[#0047AB] text-white text-sm font-bold py-2 px-4 rounded transition-colors">
//           LOGIN/SIGN UP
//         </button>
//         {/* Mobile menu icon (optional) */}
//         <button className="md:hidden text-gray-700">
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//           </svg>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Header;


// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom'; // 👈 Import Link

const Header = () => {
  return (
    <header className="bg-[#082567] shadow-sm py-4 px-4 md:px-6 flex flex-wrap items-center justify-between gap-4">
      {/* Logo - now a proper link */}
      <div className="flex items-center gap-2 font-bold text-lg">
        <Link
          to="/"
          className="text-white hover:text-green-300 transition-colors no-underline"
        >
          Jambo Home Ventures
        </Link>
      </div>

      {/* Navigation - hidden on small screens */}
      <nav className="hidden md:flex flex-wrap gap-4 text-sm font-medium text-white">
        {['FOR RENT', 'FOR SALE', 'LAND', 'FURNISHED HOMES', 'OFF-PLAN PROJECTS', 'AGENTS', 'BLOG'].map((item) => (
          <a key={item} href="#" className="hover:text-green-600 transition-colors no-underline">
            {item}
          </a>
        ))}
      </nav>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button className="bg-[#082567] border border-white hover:bg-[#0047AB] text-white text-sm font-bold py-2 px-4 rounded transition-colors">
          LIST PROPERTY
        </button>
        <button className="bg-[#082567] border border-white hover:bg-[#0047AB] text-white text-sm font-bold py-2 px-4 rounded transition-colors">
          LOGIN/SIGN UP
        </button>
        {/* Mobile menu icon (optional) */}
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;