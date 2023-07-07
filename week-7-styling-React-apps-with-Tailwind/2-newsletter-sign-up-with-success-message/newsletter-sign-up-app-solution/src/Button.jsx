import React from "react"

const Button = ({
  children,
  disabled = false,
  type = "submit",
  ...otherProps
}) => {
  return (
    <button
      disabled={disabled}
      type={type}
      {...otherProps}
      className="block mt-5 bg-dark-slate-gray py-4 px-4 rounded-md text-white font-bold w-full hover:bg-gradient-to-r from-pinky  to-primary disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {children}
    </button>
  )
}

export default Button
