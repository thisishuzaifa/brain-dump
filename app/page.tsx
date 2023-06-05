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

    <><main className="flex flex-col items-center justify-between p-24 mx-auto">
      <div className="flex flex-col items-center justify-center m-4">
        <h1 className="p-2 text-5xl font-bold text-center">Welcome to the FSWD Course Site</h1>
        <br />
        <p className="p-2 text-xl">You will find all course related conent as it is made available to you. We will cover different topics throughout the course and clear instructions will be given to you for assignments and other related projects.</p>
        <br />

      </div>
      <div className="grid grid-cols-3 gap-6">
        {postPreviews}
      </div>
    </main>
    <p className="text-center text-white-600 text-sm"> Please note that the tools and technologies I will use are opinionated, you are free to choose any other alternatives you see fit or are comfortable with. As long as it gets the job done it really does not matter, barring crippling performance issues.</p>
    </>
  )
}
      
  

