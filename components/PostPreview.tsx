import Link from 'next/link'
import { PostMetadata } from './PostMetadata'

export default function PostPreview({ post }: { post: PostMetadata }) {
    return (
        <div className="flex flex-col justify-center items-center">
        <Link  className="text-2xl font-bold text-center" href={`/blog/${post.slug}`}>
            {post.title}
        </Link>
        <div className="text-gray-600 text-sm">{post.date}</div>
        </div>
    )
}
