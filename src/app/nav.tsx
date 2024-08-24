"use client";
import { CodeXml, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { Sidenav } from "@/components/sidenav";

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setOpen] = useState<boolean>();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className="lg:absolute hidden lg:block top-2 right-5">
        {/* Nav for large screens */}

        <div className="flex">
          <Link href="/" className={twMerge("flex gap-1 ")}>
            <button
              className={twMerge(
                "h-12 px-5 mx-2 text-black border-black border-2 rounded-full hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center gap-2",
                pathname == "/" ? "bg-[#9723C9] text-white" : ""
              )}
            >
              <CodeXml />
              Denis
            </button>
          </Link>
          <Link href="/about">
            <button
              className={twMerge(
                "h-12 px-5 mx-2 text-black border-black border-2 rounded-full hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden",
                pathname == "/about" ? "bg-[#9723C9] text-white" : ""
              )}
            >
              Sobre
            </button>
          </Link>
          <Link href="/projects">
            <button
              className={twMerge(
                "h-12 px-5 mx-2 text-black border-black border-2 rounded-full hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden",
                pathname == "/projects" ? "bg-[#9723C9] text-white" : ""
              )}
            >
              Projetos
            </button>
          </Link>
          <Link href="/blog">
            <button
              className={twMerge(
                "h-12 px-5 mx-2 text-black border-black border-2 rounded-full hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden",
                pathname == "/blog" ? "bg-[#9723C9] text-white" : ""
              )}
            >
              Blog
            </button>
          </Link>
          <Link href="/Currículo Denis PTBR.pdf">
            <button
              className={twMerge(
                "h-12 px-5 mx-2 text-black border-black border-2 rounded-full hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden"
              )}
            >
              Currículo
            </button>
          </Link>
        </div>
      </div>
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="border-black border-2 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center absolute right-5 top-5">
              <Menu size={20} />
            </button>
          </SheetTrigger>
          <SheetContent className=" border-4 border-black">
            {/* Nav for large screens */}

            <div className="flex flex-col w-[90%] ">
              <Link href="/" className={twMerge("flex gap-1 ")}>
                <button
                  className={twMerge(
                    "h-12 w-[200px] px-5 mx-2 text-black border-black border-2  hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center justify-center gap-2",
                    pathname == "/" ? "bg-[#9723C9] text-white" : ""
                  )}
                >
                  <CodeXml />
                  Denis
                </button>
              </Link>
              <Link href="/about">
                <button
                  className={twMerge(
                    "h-12 w-[200px] mx-2 px-5 text-black border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center justify-center gap-2",
                    pathname == "/about" ? "bg-[#9723C9] text-white" : ""
                  )}
                >
                  Sobre
                </button>
              </Link>
              <Link href="/projects">
                <button
                  className={twMerge(
                    "h-12 w-[200px] mx-2 px-5 text-black border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center justify-center gap-2",
                    pathname == "/projects" ? "bg-[#9723C9] text-white" : ""
                  )}
                >
                  Projetos
                </button>
              </Link>
              <Link href="/blog">
                <button
                  className={twMerge(
                    "h-12 w-[200px] mx-2 px-5 text-black border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center justify-center gap-2",
                    pathname == "/blog" ? "bg-[#9723C9] text-white" : ""
                  )}
                >
                  Blog
                </button>
              </Link>
              <Link href="/Currículo Denis PTBR.pdf">
                <button
                  className={twMerge(
                    "h-12 w-[200px] mx-2 px-5 text-black border-black border-2 hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden flex items-center justify-center gap-2"
                  )}
                >
                  Currículo
                </button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
