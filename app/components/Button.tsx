
interface buttonprops {
    varient : "primary" | "secondary",
    size : "sm" | "md" | "lg",
    text: string,
    onclick?: () => void,
}

const varientsStyle = {
    primary:
    "bg-gradient-to-br from-green-400 via-teal-600 to-green-500 text-white  hover:bg-opacity-90  font-medium rounded-md transition duration-300 ease-in-out hover:scale-105",
  secondary:
    "bg-transparent text-white border-2 border-teal-400 hover:bg-opacity-90  font-medium rounded-md hover:bg-teal-900 transition duration-300 ease-in-out  hover:scale-105"
}

const sizeStyle = {
  lg: "px-8 py-2 text-base sm:text-lg",
  md: "lg:px-7 lg:py-3 px-7 py-2 text-xs lg:text-sm",
  sm: "px-5 py-2 text-sm",
};


export function Button( {varient , size , text , onclick} : buttonprops){
    return(
        <div>
            <button onClick={onclick} className={`${varientsStyle[varient]} ${sizeStyle[size]} flex items-center justify-center gap-x-2`}>
                {text}
            </button>
        </div>
    )
}