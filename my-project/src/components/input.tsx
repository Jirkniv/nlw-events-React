import { ComponentProps } from "react";
import { Mail} from 'lucide-react'

// interface InputProps extends ComponentProps<'input'>{
//     error?: boolean;
// }

// export function Input({error = false, ...props} : InputProps){
//     return(
//         <div
//         data-error={error}
//          className=" group bg-gray-800 border border h-12 border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100
//         data-[error=true]:border-red-600">
//             <span className=" group-focus-within:text-gray-100 text-gray-400 
//             group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-red-600">
//                 <Mail/>
//             </span>
//             <input className="bg-gray-400 text-gray-200 bg-transparent flex-1 outline-0 placeholder-gray-400"{...props}
//             />
//         </div>
//     )
// }

interface InputRootProps extends ComponentProps<'div'>{
    error?:boolean
}

export function InputRoot ({error = false, ...props}){
    return(
        <div
                data-error={error}
                 className=" group bg-gray-800 border border h-12 border-gray-600 rounded-xl px-4 flex items-center gap-2 focus-within:border-gray-100
                data-[error=true]:border-red-600"
                {...props}
                />
    )
}

interface InputIconProps extends ComponentProps<'span'>{}

export function InputIcon (props: InputIconProps){
    return(
        <span className=" group-focus-within:text-gray-100 text-gray-400 
        group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-red-600"
        {...props}/>
    )
}


interface InputFieldProps extends ComponentProps<'input'>{}

export function InputField (props: InputFieldProps){
    return(
        <input className="bg-gray-400 text-gray-200 bg-transparent flex-1 outline-0 placeholder-gray-400"{...props}
        />
        
    )
}