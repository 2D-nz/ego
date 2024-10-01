import { File } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen justify-center items-center">
        <div className="w-[40rem] flex border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#fffaff] text-black transition-all">
          <div className="block cursor-pointer">
            <div className="px-6 py-5 text-left h-full">
              <h1 className="text-4xl mb-4">Denis Lima</h1>
              <p className="text-2xl mb-4 line-clamp-4">
                Sou desenvolvedor web!
              </p>
              <div className="flex gap-2 h-14">
                <Link href="/projects">
                  <button className="h-12 rounded-md border-black border-2 p-3 text-black transition-all bg-[#a7d8d8] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]">
                    Ver projetos
                  </button>
                </Link>

                <Link href="/Currículo Denis PTBR.pdf">
                  {" "}
                  <button className="h-12 rounded-md flex gap-2 border-black border-2 p-3 text-black transition-all bg-[#a7d8d8] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF]">
                    Ver currículo
                    <File />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
