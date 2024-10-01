import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

export function Projectcard({
  project,
  key,
}: {
  project: {
    date: string;
    title: string;
    tecs: string;
    repo: string;
    live: string;
    description: string;
    picture: string;
  };
  key: number;
}) {
  const formattedDate = format(project.date, "dd 'de' MMMM yyyy", {
    locale: ptBR,
  });
  const tecs = project.tecs.split(",");
  return (
    <div
      id={`project ${key}`}
      className="w-1/2 mb-2  border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]  bg-white text-black  text-left transition-all ease-in   "
    >
      <div className=" gap-4">
        <Image
          src={project.picture}
          height={40}
          width={400}
          alt="project image"
          className="border-2 border-b-black w-full"
        />
        <div className="px-5 py-4">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <p className="">{formattedDate}</p>
          <div className="flex gap-5 py-2">
            <Link href={project.live} target="_blank">
              <button className="border-black border-2 rounded-2xl px-9 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center">
                Live
              </button>
            </Link>
            <Link href={project.repo} target="_blank">
              <button className="border-black border-2 rounded-xl  bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center">
                <BsGithub size={25} />
              </button>
            </Link>
          </div>
          <div className="flex flex-wrap gap-x-5">
            {tecs.map((tech: string, key: number) => {
              return (
                <p
                  key={key}
                  className="bg-[#daf5f0] h-12 my-2 border-black border-2 p-2.5 hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] rounded-full"
                >
                  {tech}
                </p>
              );
            })}
          </div>

          <p className="pt-2 h-24">{project.description} </p>
        </div>
      </div>
    </div>
  );
}
