import Image from 'next/image'
import Link from 'next/link'
import getPostMetadata from '@/components/getPostMetadata';
import PostPreview from '@/components/PostPreview';

export default function Home() {

  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} post={post} />
  ));


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {postPreviews}
      </div>
      </main>
      
  )
}
      
  

