import React, { useState } from 'react'

const ConfirmPassword = ({ field, form }) => {
  const [showPassword, setShowPassword] = useState(false)
  const errors = form.touched[field.name] && form.errors[field.name]
  return (
    <>
      <input
        {...field}
        placeholder='Retype Password'
        type={showPassword ? 'text' : 'password'}
        className={`w-full border-[0.6px] border-solid border-gray-mercury-100 text-[16px]  placeholder:text-[16px] placeholder:text-[#E3E3E3] bg-white py-[11px] pl-[12px] rounded-[6px] invalid:ring-red-400 focus:shadow-mercury outline-none ${
          errors && 'border-red-400'
        } h-[50px]`}
      />
      <span
        className='material-icons text-[#595959] cursor-pointer absolute top-[20%] left-[89%]'
        onClick={() => {
          setShowPassword(!showPassword)
        }}
      >
        {showPassword ? 'visibility_off' : 'visibility'}
      </span>
    </>
  )
}

export default ConfirmPassword
