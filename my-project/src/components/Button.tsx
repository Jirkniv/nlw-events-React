import React, { ComponentProps } from 'react'
import { ReactNode } from 'react'
interface ButtonProps extends ComponentProps<'button'>{}

export function Button(props: ButtonProps) {
  return (
    <button type='submit' className="px-5 h-12 bg-gray-500 text-blue-100 font-semibold rounded-xl w-full cursor-pointer hover:bg-blue-100 hover:text-gray-900 trasition-colors duration-3'00 flex justify-between items-center "
    {...props}
    />
  )
}


