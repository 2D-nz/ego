import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from "next/link";

export function BlogPostCard({
  post,
}: {
  post: {
    title: string;
    date: string;
    description: string;
    slug: string;
  };
}) {
  const formattedDate = format(post.date, "dd 'de' MMMM yyyy", {
    locale: ptBR,
  });

  return (
    <Link href={`/blog/${post.slug}`}>
      <button className=" w-[90%] my-1.5 border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]  bg-white text-black px-5 text-left transition-all ease-in py-2 ">
        <h3 className="text-xl font-semibold pt-2">{post.title}</h3>
        <h2 className="text-sm break-words">{post.description}</h2>
        <p className="pt-2 ">{formattedDate}</p>
      </button>
    </Link>
  );
}
