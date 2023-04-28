import clsx from "clsx";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        'border-solid border-gray border-2 px-6 py-2 mb-3 text-lg rounded-md shadow-md',
        className
      )}
      {...props}
    />
  )
}

export default Input;