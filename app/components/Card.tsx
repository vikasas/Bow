interface CardProps {
  varient: "primary" | "secondary";
  heading: string;
  content: string;
}

const variantStyle = {
  primary:
    "w-full sm:w-[300px] h-auto bg-white dark:bg-card rounded-xl shadow-xl dark:shadow-sm border border-gray-300 px-5 py-4 dark:border-border transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:opacity-80",
  secondary:
    "w-full sm:h-auto h-[170px] px-4 py-4 bg-background rounded-xl shadow-xl border border-gray-800 transition duration-300 ease-in-out hover:shadow-2xl hover:scale-105 hover:opacity-80",
};

export default function Card({ varient, heading, content }: CardProps) {
  return (
    <div className={variantStyle[varient]}>
      <div>
        <h4 className="text-center text-lg sm:text-xl mt-2 font-medium text-white">
          {heading}
        </h4>
      </div>
      <div>
        <p className="text-sm sm:text-md font-medium p-2 mt-2 text-gray-400">
          {content}
        </p>
      </div>
    </div>
  );
}
