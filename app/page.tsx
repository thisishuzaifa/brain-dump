import Image from 'next/image'
import fs from 'fs';
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
      <div className="flex flex-col justify-center items-center">
        {postPreviews}
      </div>
      </main>
      
  )
}
      
  

