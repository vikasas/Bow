

interface cardprops {
    varient : "primary" | "secondary"
    heading : string,
    content : string
}

const varientstyle = {
    primary : "w-[300px] h-[300px] bg-white dark:bg-card rounded-xl shadow-xl dark:shadow-sm border border-gray-300 px-5 py-4 dark:border-border transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:opacity-80",
    secondary : "w-[620px] h-[170px]  px-3 bg-background rounded-xl shadow-xl  border border-gray-800 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:opacity-80"
}
export default function Card({ varient , heading , content } : cardprops){
    return(
        <div  className={`${varientstyle[varient]} "" `}> 
            <div className="">
                <h4 className="text-center text-xl mt-3 font-medium text-white">{heading}</h4>
            </div>
            <div>
                <p className="text-md font-medium p-2 mt-2 text-gray-400 ">{content}</p>
            </div>
        </div>
    )
}