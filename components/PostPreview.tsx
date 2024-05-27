import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

export default function PostPreview({ post }: { post: PostMetadata }) {
  return (
    <li className="border-b border-gray-700 py-4">
      <Link
        className="text-2xl font-semibold text-green-400 hover:text-green-500 transition-colors duration-300"
        href={`blog/${post.slug}`}
      >
        {post.title}
      </Link>
      <div className="text-gray-500 text-sm mt-2">{post.date}</div>
    </li>
  );
}
