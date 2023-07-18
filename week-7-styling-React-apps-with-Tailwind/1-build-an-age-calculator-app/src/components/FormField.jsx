import React, { useId } from "react"

const FormField = ({ label, value, setValue, errors, placeholder = null }) => {
  const inputId = useId()
  // const inputId = label.toLowerCase().split(" ").join("-"); // Day => day, First Name => first-name

  return (
    <div className="flex flex-col w-1/3 lg:w-40">
      <label
        htmlFor={inputId}
        className={`uppercase ${
          errors ? "text-[#ff5757]" : "text-[#716f6f]"
        }  tracking-[0.15em] text-sm`}
      >
        {label}
      </label>
      <input
        type="text"
        id={inputId}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className={`py-3 md:py-4 px-4 md:px-5 border border-[#dbdbdb] w-full mt-2 rounded-md text-xl sm:text-2xl md:text-3xl md:tracking-wider placeholder:text-[#716f6f] placeholder:text-xl sm:placeholder:text-2xl  md:placeholder:text-3xl outline-none focus:border-none focus:ring-1 focus:ring-inset focus:ring-[#854dff] ${
          errors ? "border-[#ff5757]" : "border-[#dbdbdb]"
        }`}
        placeholder={placeholder}
      />
      <span className="text-[#ff5757] mt-2 font-normal italic text-sm">
        {errors && errors[label][0]}
      </span>
    </div>
  )
}

export default FormField
