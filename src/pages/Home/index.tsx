import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { api } from "../../config/api";
import { Weather } from "../../components/Waether";

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
type Coords = {
    lat: number
    lon: number
}

export function Home(){
    const [coords, setCoords] = useState<Coords>({} as Coords)
    const [loading, setLoading] = useState(false)
    const [search, setSearch] = useState('')
    const [listSearch, setListSearch] = useState<ListSearch[]>([])

    async function handleSearch(search: string){
        const response = await api(`/geo/1.0/direct?q=${search}&limit=5&appid=d35d0d0b11f7be00f41194c41b405857`)
        setListSearch(response.data)
    }
    function handleCoords(item: ListSearch){
        setCoords({
            lat: item.lat,
            lon: item.lon
        })
    }
    useEffect(()=>{
        if(search.length > 0 && loading === false) handleSearch(search)
    }, [search, loading])
    return (
        <main>
            <Header/>
            <div className="flex flex-col justify-center w-full items-center mb-5">
                <h1 className="font-bold text-ngray-100 text-[40px]">Boas vindas ao <span className="text-blue-light">TypeWeather</span></h1>
                <h2 className="text-ngray-200 text-[22px] mb-10">Escolha um local para ver a previsão do tempo</h2>
                <Input 
                    placeholder="Buscar local" 
                    value={search} 
                    onChange={(e)=>{
                        setSearch(e.target.value)
                    }}
                />
                {listSearch.length > 0 && (
                    <ul className="mt-[8px] gap-1 flex flex-col">
                        {listSearch.map((item, index)=>(
                            <li 
                                key={index} 
                                className="bg-ngray-600 text-ngray-100 first:rounded-t-lg last:rounded-b-lg px-[20px] py-[17px] cursor-pointer hover:bg-ngray-700"
                                onClick={()=>{
                                    setSearch(`${item.name}, ${item.state} - ${item.country}`)
                                    setLoading(true)
                                    setListSearch([])
                                    handleCoords(item)
                                }}
                            >
                                    {item.name}, {item.state} - {item.country}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {coords.lat && coords.lon && (
                <Weather lat={coords.lat} lon={coords.lon} city={search}/>
            )}
        </main>
    )
}