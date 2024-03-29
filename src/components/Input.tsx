import clsx from "clsx";
import { InputProps } from "@/lib/interfaces";

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={clsx(
        'border-solid border-gray border-2 px-6 py-2 mb-3 text-md rounded-md shadow-md focus:outline-[#EE756A] dark:bg-zinc-800',
        className
      )}
      {...props}
    />
  )
}

export default Input;