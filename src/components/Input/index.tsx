import { ListSearch } from "../../pages/Home"
import { InputHTMLAttributes } from "react"

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    listSearch: ListSearch[]
}
export function Input({listSearch, ...rest}: InputProps){
    return (
        <>
        <input
            className="bg-ngray-600 text-ngray-400 rounded-lg px-[20px] py-[17px] border-none focus:outline-none"
            type="search"
            {...rest} 
        />

        {listSearch.length > 0 && (
            <ul className="mt-[8px] gap-1 flex flex-col">
                {listSearch.map((item, index)=>(
                    <li 
                        key={index} 
                        className="bg-ngray-600 text-ngray-100 first:rounded-t-lg last:rounded-b-lg px-[20px] py-[17px] cursor-pointer hover:bg-ngray-700"
                    >
                            {item.name}, {item.state} - {item.country}
                    </li>
                ))}
            </ul>
        )}
        </>
    )
}