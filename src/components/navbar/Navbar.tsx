import Link from "next/link";
import React, { useState } from "react";
import { links } from "./links";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-primary shadow-md p-4 flex justify-between md:justify-around items-center">
      <div>
        <p className="text-secondary  text-[22px]">Task Manager</p>
      </div>
      <div className="hidden md:flex gap-10 space-x-4">
        {links.map((link, index) => (
          <Link key={index} href={link.href} className="text-secondary">
            {link.title}
          </Link>
        ))}
      </div>
      <div
        className="md:hidden cursor-pointer text-secondary text-xl"
        onClick={toggleMobileMenu}
      >
        ☰
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col p-4 gap-4 absolute top-16 right-2 h-[100px] bg-primary border border-secondary rounded-md">
          {links.map((link, index) => (
            <Link key={index} href={link.href} className="text-secondary">
              {link.title}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
