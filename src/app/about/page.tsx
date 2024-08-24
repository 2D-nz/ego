import { Book, Dumbbell, Gamepad, Guitar } from "lucide-react";
import {
	DiGit,
	DiHtml5,
	DiJava,
	DiJsBadge,
	DiNodejs,
	DiNodejsSmall,
	DiPython,
	DiReact,
} from "react-icons/di";
import { SiTypescript } from "react-icons/si";
export default function Page() {
	return (
		<div className="flex justify-center items-center h-screen px-10 text-black ">
			<div className="lg:max-w-[50vw] p-10 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
				<h1 className="text-4xl"> Sobre mim</h1>
				<p className="mt-10 text-xl">
					Além de programação, meus hobbies incluem leitura, música, vídeo games
					e academia. Russo e filosofia são duas áreas que eu estou estudando
					também!
				</p>
				<div className="flex justify-left gap-5 mt-4">
					<Guitar size={40} className="hover:scale-125 transition-all" />
					<Book size={40} className="hover:scale-125 transition-all" />
					<Gamepad size={40} className="hover:scale-125 transition-all" />
					<Dumbbell size={40} className="hover:scale-125 transition-all" />
				</div>

				<h2 className="text-2xl mt-12 mb-5">Tecnologias que eu utilizo</h2>
				<div className="flex gap-2 mt-2">
					<SiTypescript size={40} className="hover:scale-125 transition-all" />

					<DiReact size={40} className="hover:scale-125 transition-all" />
					<DiNodejs size={40} className="hover:scale-125 transition-all" />

					<DiJava size={40} className="hover:scale-125 transition-all" />
					<DiGit size={40} className="hover:scale-125 transition-all" />
					<DiHtml5 size={40} className="hover:scale-125 transition-all" />
					<DiPython size={40} className="hover:scale-125 transition-all" />
				</div>
			</div>
		</div>
	);
}
