import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../config/api";

export type ListSearch = {
    name: string
    local_names: {
        ascii: string
        feature_name: string
    }
    lat: number
    lon: number
    country: string
    state: string
}

export function Home(){
    const [search, setSearch] = useState('')
    const [listSearch, setListSearch] = useState<ListSearch[]>([])

    async function handleSearch(search: string){
        const response = await api(`/geo/1.0/direct?q=${search}&limit=5&appid=d35d0d0b11f7be00f41194c41b405857`)
        setListSearch(response.data)
    }
    useEffect(()=>{
        if(search.length > 0) handleSearch(search)
    }, [search])
    return (
        <main>
            <Header/>
            <div className="flex flex-col justify-center w-full items-center">
                <h1 className="font-bold text-ngray-100 text-[40px]">Boas vindas ao <span className="text-blue-light">TypeWeather</span></h1>
                <h2 className="text-ngray-200 text-[22px] mb-10">Escolha um local para ver a previsão do tempo</h2>
                <Input 
                    placeholder="Buscar local" 
                    value={search} 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                    listSearch={listSearch}
                />
            </div>
        </main>
    )
}