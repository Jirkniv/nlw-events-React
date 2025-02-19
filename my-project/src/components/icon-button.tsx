import React, { ComponentProps } from 'react'
import { ReactNode } from 'react'
import { twMerge } from "tailwind-merge";


interface IconButtonProps extends ComponentProps<'button'>{}

export function IconButton({className ,...props}: IconButtonProps) {
  return (
    <button className={twMerge("px-1.5 bg-gray-500 text-blue-100 font-semibold rounded-md  cursor-pointer hover:bg-blue-100 hover:text-gray-900 trasition-colors duration-300", className )}
    {...props}
   />
   
  )
}


