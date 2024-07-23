"use client";

import { Menu } from "lucide-react";
import { ThemeToggler } from "./ThemeToggler";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "./ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <header
      className={`fixed ${
        !top && `shadow-md shadow-red-800`
      } w-full bg-gradient-to-r from-[#f4274d] to-[#ff0000]`}
    >
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-2 py-3 md:p-4 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <h1 className="text-3xl text-white">Gyawun Music</h1>
          </a>
        </div>
        <div className="flex gap-x-2 md:gap-x-6 items-center">
          <div
            className="hidden md:flex md:gap-x-12 
"
          >
            <Link
              href="/downloads"
              className="text-sm font-semibold leading-6 text-slate-200 hover:text-white"
            >
              Releases
            </Link>
            {/* <Link
              href="#"
              className="text-sm font-semibold leading-6 text-slate-200 hover:text-white"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-slate-200 hover:text-white"
            >
              Company
            </Link> */}
          </div>
          <ThemeToggler />
          <div className="md:hidden">
            <Dialog>
              <DialogTrigger name="Menu">
                <Menu />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader></DialogHeader>
                <DialogDescription>
                  <div className="mt-2 space-y-2" id="disclosure-1">
                    <Link
                      href="/downloads"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Releases
                    </Link>
                    {/* <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Marketplace
                    </Link>
                    <Link
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7  hover:bg-gray-200 dark:hover:bg-gray-700"
                    >
                      Company
                    </Link> */}
                  </div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
    </header>
  );
}
