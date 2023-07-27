import Link from 'next/link'


export default function About(){

    return(
        <main className="flex flex-col items-center justify-between p-24">
        <div className="flex flex-col justify-center items-center mt-4">
            <h1 className="text-4xl font-bold text-center">About Me</h1>
            <p className="text-white-600 text-xl mt-4">
                 I am a software developer and an Information Technology
                                specialist with a passion for
                                engineering and system design. I studied Software
                                Systems Development at the British Columbia Institute
                                of Technology. I am currently working as IT Specialist
                                for Northeastern University.
             
            </p>
            <br />
            <p className="text-white-600 text-xl">
                I help consult startups and do freelance work on the side. I recently
                helped launched a startup called ScoreForOutcome which is a platform
                that help mental health professionals track their clients progress.
             </p>

             <br />
             <p className="text-white-600 text-xl">
                You can follow me on my social media accounts to learn more about me.
            </p>
            <br />
            <div className="flex flex-row justify-center space-x-4 items-center p-2 m-2">
            <Link className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"href="https://www.linkedin.com/muhammad-huzaifa-khalid"> LinkedIn  </Link>
            <Link className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"href="https://www.github.com/thisishuzaifa"> Github </Link>
            </div>    

        </div>

        <h2 className="text-4xl font-bold text-center mt-12"> Personal Machine / Dev Environment </h2>
        
            <p className="text-white-600 text-xl mt-4">
                I know some people are curious about what I use to develop and what my personal machine is like.
            </p>
            <br />
            <div className="grid grid-cols-1 gap-6">
            <h4 className="text-2xl font-bold text-start"> Personal Machine </h4>
            <ul className="text-emerald-500 text-l mt-4">
                <li> Ryzen 7 5800x </li>
                <li> 32GB DDR4 3600Mhz </li>
                <li> 1TB NVME SSD </li>
                <li> RTX 3060 Ti </li>
                <li> Windows 11 </li>
            </ul>
            
            <h4 className="text-2xl font-bold text-start"> Dev Environment </h4>
            <ul className="text-emerald-500 text-l mt-4 ">
                <li> WSL2 </li>
                <li> AWS </li>
                <li> VS Code </li>
                <li> Vercel </li>
                <li> Github </li>
                <li> Docker </li>
                <li> NodeJS </li>
            </ul>

            <h4 className="text-2xl font-bold text-center mt-12"> Other random things I use </h4>
            <ul className="text-emerald-500 text-l mt-4">
                <li> M1 Macbook Pro  </li>
                <li> Logitech C920 </li>
                <li> WH-1000MX3 </li>
                <li> Logitech MX Master 3 </li>
            </ul>    
            </div>

        </main>
    )
}