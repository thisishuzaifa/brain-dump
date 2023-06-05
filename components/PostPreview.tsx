import Link from 'next/link'
import { PostMetadata } from './PostMetadata'

export default function PostPreview({ post }: { post: PostMetadata }) {
    return (
        <div className="flex flex-col justify-center items-center m-2">
        <Link  className="text-3xl bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold text-center" href={`blog/${post.slug}`}>
            {post.title}
        </Link>
        <div className="text-green-600 text-sm">{post.date}</div>
        </div>
    )
}
