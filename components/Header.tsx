import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Container from "./Container";
import NavbarSm from "./NavbarSm";
import SerachIcon from "./SerachIcon";
import CartIcon from "./CartIcon";
import { ModeToggle } from "./ui/ModeToggle";
import {
  ClerkLoaded,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import Orders from "./Orders";

const Header = async () => {
  return (
    <header className=" p-5 border-b text-xl">
      <Container className="flex items-center justify-between gap-7">
        <Navbar />
        <NavbarSm />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <Logo>Tulos</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5">
          <SerachIcon />
          <CartIcon />

          <ClerkLoaded>
            <SignedIn>
              <Orders />
              <ModeToggle />
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton mode="modal">
                <button className="text-sm capitalize font-semibold">
                  Login
                </button>
              </SignInButton>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};
export default Header;
