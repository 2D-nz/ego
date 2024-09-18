import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
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
  };
  key: number;
}) {
  const formattedDate = format(project.date, "dd 'de' MMMM yyyy", {
    locale: ptBR,
  });
  const tecs = project.tecs.split(",");
  return (
    <div className="w-[90%] lg:w-[50vw] mb-2  border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]  bg-white text-black px-5 text-left transition-all ease-in py-2">
      <div className="px-2">
        <h1 className="text-2xl font-semibold">{project.title}</h1>
        <p className="">{formattedDate}</p>
        <p className="pt-2">{project.description}</p>
        <div className="flex gap-5">
          <Link href={project.repo} target="_blank">
            <button className="border-black border-2 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center">
              Live
            </button>
          </Link>
          <Link href={project.live} target="_blank">
            <button className="border-black border-2 bg-[#FFA6F6] hover:bg-[#fa8cef] active:bg-[#f774ea] w-10 h-10 flex items-center justify-center">
              <BsGithub size={25} />
            </button>
          </Link>
        </div>
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
    </div>
  );
}
