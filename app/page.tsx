import getPostMetadata from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

export default function Home() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} post={post} />
  ));

  return (
    <>
      <main className="flex flex-col items-center justify-items-center p-8 md:p-24 mx-auto text-gray-100 min-h-screen">
        <div className="flex flex-col mt-4 max-w-2xl text-center">
          <h1 className="text-5xl font-bold">brain.dump</h1>
          <p className="text-lg font-thin mt-6">
            All content is served as markdown. Each item will cover a topic.I am
            working on adding search functionality so you can easily browse
            through the articles. Everything I learn or re-learn goes here.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center mt-12 w-full max-w-4xl">
          <ul className="w-full">{postPreviews}</ul>
        </div>
      </main>
    </>
  );
}
