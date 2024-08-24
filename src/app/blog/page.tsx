import getPostMetadata from "@/utils/getPostMetadata";
import { BlogPostCard } from "@/components/blogPostCard";

export default function Page() {
  const postMetadata = getPostMetadata("posts");
  const orderedPosts = postMetadata.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });

  return (
    <div className="w-[90vw] ">
      <div className="pt-32 flex justify-center w-screen flex-col px-20 lg:px-32 gap-5 ">
        <div className=" lg:w-[50%] py-2 px-5 text-black border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)]  bg-[#a388ee] transition-all ease-out">
          <h1 className="text-2xl font-semibold">Blog</h1>
          <h2 className="text-xl">
            Aqui eu documento meus estudos, ou posto coisas que eu considero
            interessante!
          </h2>
        </div>

        {orderedPosts.map((post, postIndex) => {
          return <BlogPostCard post={post} key={postIndex} />;
        })}
      </div>
    </div>
  );
}
