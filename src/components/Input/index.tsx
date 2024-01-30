import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement>
export function Input({...rest}: InputProps){
    return (
        <>
        <input
            className="bg-ngray-600 text-ngray-400 rounded-lg px-[20px] py-[17px] border-none focus:outline-none"
            type="search"
            {...rest} 
        />
        </>
    )
}