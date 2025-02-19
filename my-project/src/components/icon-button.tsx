import React from 'react'
import { ReactNode } from 'react'

interface IconButtonProps{
  children: ReactNode
}

export function IconButton(props: IconButtonProps) {
  return (
    <button className="px-1.5 bg-gray-500 text-blue-100 font-semibold rounded-md  cursor-pointer hover:bg-blue-100 hover:text-gray-900 trasition-colors duration-3'00 ">
        {props.children}
    </button>
  )
}


