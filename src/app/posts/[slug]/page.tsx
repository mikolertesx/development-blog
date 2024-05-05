import { getPostData } from "@/lib/posts";

export async function getServerSideProps(context: unknown) {
  return {};
}

export default async function Page({ params }: { params: { slug: string } }) {
  const id = params.slug;
  console.log(id);
  const foundData = await getPostData(id);

  if (foundData === null) {
    return <p>Article not found</p>;
  }

  return (
    <div>
      <h1>{foundData?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: foundData.content }}></div>
    </div>
  );
}
