import React from 'react'
import IconArrow from "../IconArrow"

const SubmitButton = () => {
  return (
    <div className="flex items-center mt-8 md:mt-3">
      <div className="border border-['#716f6f'] flex-1"></div>
      <button className="md:w-24 md:h-24 w-16 h-16 bg-[#854dff] hover:bg-[#141414] rounded-full inline-flex items-center justify-center">
        {/* <img src={IconArrow} alt="Icon Arrow" /> */}
        <IconArrow className="w-[22px] h-[22px] md:w-[44px] md:h-[44px]" />
      </button>
      <div className="md:hidden border border-['#716f6f'] flex-1"></div>
    </div>
  )
}

export default SubmitButton