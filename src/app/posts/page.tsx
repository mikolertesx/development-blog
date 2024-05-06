import Link from "next/link";
import { prismaClient } from "@/lib/prismaClient";

export default async function Page() {
  const posts = await prismaClient.post.findMany();
  console.log(posts);

  return (
    <div>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link key={post.id} href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
