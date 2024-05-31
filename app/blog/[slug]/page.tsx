import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetadata from '@/components/getPostMetadata';


const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}


const postPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (

      <div>
        <div className="my-12 text-center justify-center">
          <h1 className="text-2xl text-green-400 text-center ">{post.data.title}</h1>
          <p className="text-white-400 mt-2 text.center">{post.data.date}</p>
        </div>
        <article className="prose prose-zinc prose-lg dark:prose-invert prose-a:text-green-800">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    );
  };
  
export default postPage;