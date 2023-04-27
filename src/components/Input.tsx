import clsx from "clsx";

const Input = ({className, ...props}) => {
  return (
    <input
      className={clsx(
        'border-solid border-gray border-2 px-6 py-2 text-lg rounded-md',
        className
      )}
      {...props}
    />
  )
}

export default Input;