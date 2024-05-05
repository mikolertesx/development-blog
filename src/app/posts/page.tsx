import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";

export default async function Page() {
  const data = await getSortedPostsData();

  return (
    <div>
      <ul>
        {data.map((post) => (
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
