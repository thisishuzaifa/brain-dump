
export default function Announcements() {


    return(
        <main className="flex flex-col items-center justify-between p-24">

        <div className="flex-col justify-center items-center mt-4">

        <h1 className="text-4xl font-bold text-center">
            Announcements
        </h1> 
        <p className="text-white-600 text-center mt-4 text-xl">
        I have added this page to share any announcements for our course.
        These announcements will be sorted from latest to oldest. Please check this page
        periodically to keep up with stuff.
        </p>  
        <br />

        <div className=" flex-col justify-between items-center mt-4">
            <h3 className="text-bold text-3xl text-emerald-600">
                Class Resumes
            </h3>
            <p className="text-white-600 mt-4 text-xl">
                Classes will resue this week with focus on JavaScript. We will begin with a short code review and proceed with the class.
            </p>

        
        </div>
        



        </div>    

        </main>

    )
}