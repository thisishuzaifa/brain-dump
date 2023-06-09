import Link from 'next/link'
import { PostMetadata } from './PostMetadata'


export default function PostPreview({ post }: { post: PostMetadata }) {
    return (
        <div className="flex flex-col justify-center items-center m-2 border-y-2 border-emerald-700 "> 
        <Link  className="text-2xl bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text font-bold text-center m-2" href={`blog/${post.slug}`}>
            {post.title}
        </Link>
        <div className="text-green-600 text-sm">{post.date}</div>
        </div>

    )
}
