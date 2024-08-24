import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Sidenav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="border-black border-2 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center">
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent className=" border-4 border-black">
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
      </SheetContent>
    </Sheet>
  );
}
