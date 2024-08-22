import Link from "next/link";
import React from "react";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="bg-light-800 dark:bg-dark-500 shadow-light-200 dark:shadow-dark-100 p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-primary-500 font-spaceGrotesk text-lg hover:text-accent-blue transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-primary-500 font-spaceGrotesk text-lg hover:text-accent-blue transition duration-300"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="text-primary-500 font-spaceGrotesk text-lg hover:text-accent-blue transition duration-300"
        >
          Contact
        </Link>
        <Link
          href="/ask-question"
          className="text-primary-500 font-spaceGrotesk text-lg hover:text-accent-blue transition duration-300"
        >
          Ask Question
        </Link>
        <ClerkProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </ClerkProvider>
      </nav>
    </div>
  );
};

export default Navbar;
