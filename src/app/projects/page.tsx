import Link from 'next/link';
import { getAllPosts } from "../../lib/cms";

export default async function Project() {
  const posts = await getAllPosts()

  return (
    <>
    <div>
      {posts.map((post) =>
        <Link href={`/projects/${post.slug}`}>
          <div>
            <h1>{post.title}</h1>
          </div>
        </Link>
      )}
    </div>
    </>
  )
}