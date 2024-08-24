import getPostMetadata from "@/utils/getPostMetadata";
import fs from "fs";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = folder + `${slug}.md`;
  const content = fs.readFileSync(file, "utf-8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata("posts");
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: string;
}) => {
  const id = params?.slug ? " . " + params?.slug : "";
  return {
    title: `2D-NZ Blog ${id.replaceAll("_", "")}`,
  };
};

export default function Page(props: {
  params: { slug: string };
  searchParams: {};
}) {
  console.log(props);
  const slug = props.params.slug;
  const post = getPostContent(slug);
  console.log(post);
  return (
    <div className=" flex justify-center w-screen mt-32">
      <div className="absolute">
        <article className=" prose py-5 px-10 text-black border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white transition-all ease-out my-5 overflow-hidden">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  );
}
