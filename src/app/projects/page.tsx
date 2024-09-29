import { Projectcard } from "@/components/projectcard";
import getProjectMetadata from "@/utils/getProjectsMetadata";

export default function Page() {
  const projectsMetadata = getProjectMetadata("projetos");

  return (
    <div className="h-full pt-32 pl-4 lg:ml-20">
      <div className=" w-[300px] py-2 px-5 text-black border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-[#87ceeb] transition-all ease-out">
        <h1 className="font-semibold text-2xl">Projetos</h1>
      </div>

      <div className="grid  space-y-5 mt-5  ">
        {projectsMetadata.map((project, index) => {
          return <Projectcard project={project} key={index} />;
        })}
      </div>
    </div>
  );
}
