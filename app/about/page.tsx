import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-24 bg-transparent">
      <div className="flex flex-col justify-center items-center mt-4 max-w-2xl">
        <h1 className="text-3xl font-light font-sans text-center">info.me</h1>
        <article className="prose-md">
          <p className="text-lg font-thin mt-4">
            I can write semi-decent code and make nice looking applications.
            These days I am leaning into tooling for various platforms and it is
            also currently the focus of my work at NU as well.
          </p>
          <p className="text-lg font-thin mt-4">
            I help consult startups and do freelance work on the side. I
            recently helped launch a startup called ScoreForOutcome which is a
            platform that helps mental health professionals track their clients
            progress.
          </p>
          <p className="text-lg font-thin mt-4">
            You can follow me on my social media accounts to learn more about
            me. Feel free to send me a message.
          </p>
        </article>
        <div className="flex space-x-4 mt-6">
          <Link
            href="https://www.github.com/thisishuzaifa"
            className="text-white bg-gray-400 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            Github
          </Link>
          <Link
            href="https://www.huzzy.dev"
            className="text-white bg-rose-400 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            Personal Site
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-lg font-light">env.dev + tech i use</h2>
        <p className="text-lg font-thin mt-4">
          I develop primarily on a MacBook. My main tech stack includes Go,
          JavaScript/TypeScript, and C#. I use PostgreSQL for databases and
          React for frontend development. You can find what I’ve learned about
          these technologies here. Plus I will post about what other things I
          find interesting.
        </p>
      </div>
    </main>
  );
}
