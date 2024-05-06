import { processPostData } from "@/lib/posts";
import { prismaClient } from "@/lib/prismaClient";

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  const foundArticle = await prismaClient.post.findFirst({
    where: {
      id,
    },
  });

  if (foundArticle === null) {
    return <h1>Article not found</h1>;
  }

  const content = await processPostData(foundArticle.content);
  console.log(foundArticle, content);

  return (
    <div>
      <h1>{foundArticle.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }}></div>
    </div>
  );
}
