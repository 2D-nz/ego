import fs from "fs";
import matter from "gray-matter";

export default function getProjectMetadata(basepath: string) {
  const folder = basepath + "/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((filename) => {
    const fileContents = fs.readFileSync(`${basepath}/${filename}`, "utf-8");

    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      repo: matterResult.data.repo,
      live: matterResult.data.live,
      picture: matterResult.data.picture,
      tecs: matterResult.data.tecs,

      slug: filename.replace(".md", ""),
    };
  });
  return posts;
}
