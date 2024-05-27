import Link from "next/link";

export default function About() {
  return (
    <main className="flex flex-col items-center justify-between p-8 md:p-24 bg-transparent text-gray-100">
      <div className="flex flex-col justify-center items-center mt-4 max-w-2xl">
        <h1 className="text-3xl font-semibold font-sans text-center">
          info.me
        </h1>
        <p className="text-lg font-thin mt-4">
          I am a software developer and an Information Technology specialist
          with a passion for engineering and system design. I studied Software
          Systems Development at the British Columbia Institute of Technology
          and Cognitive Science at SFU. I am currently working as IT Specialist
          for Northeastern University.
        </p>
        <p className="text-lg font-thin mt-4">
          I help consult startups and do freelance work on the side. I recently
          helped launch a startup called ScoreForOutcome which is a platform
          that helps mental health professionals track their clients progress.
        </p>
        <p className="text-lg font-thin mt-4">
          You can follow me on my social media accounts to learn more about me.
          Feel free to send me a message.
        </p>
        <div className="flex space-x-4 mt-6">
          <Link
            href="https://www.linkedin.com/muhammad-huzaifa-khalid"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            LinkedIn
          </Link>
          <Link
            href="https://www.github.com/thisishuzaifa"
            className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            Github
          </Link>
          <Link
            href="https://www.huzzy.dev"
            className="text-white bg-rose-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-colors duration-300"
          >
            Personal Site
          </Link>
        </div>
      </div>

      <div className="mt-12 max-w-2xl">
        <h2 className="text-lg font-semibold">env.dev + tech i use</h2>
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
