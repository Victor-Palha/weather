import { useEffect, useState } from "react"
import { ThermometerSimple, Wind, Drop } from "@phosphor-icons/react"
import { api } from "../../config/api"
import { SetImageByDayAndNight } from "../../lib/imageByDayAndNight"
import { format } from "date-fns/format"
import { ptBR } from "date-fns/locale/pt-BR"


type WeatherProps = {
    lat: number
    lon: number
    city: string
}
export function Weather({lat, lon, city}: WeatherProps){
    const [imageSrc, setImageSrc] = useState('');
    const [iconSrc, setIconSrc] = useState('');
    const [weather, setWeather] = useState({} as any)
    const [loading, setLoading] = useState(true)
    const time = new Date()

    async function getWeather(){
        setLoading(true)
        const response = await api(`/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt_br&appid=d35d0d0b11f7be00f41194c41b405857`)
        const {image, icon} = await SetImageByDayAndNight(time, response.data.weather[0].main);
        setImageSrc(image);
        setIconSrc(icon);
        setWeather(response.data)
        setLoading(false)
    }

    useEffect(()=>{
        if(lat && lon) {
            getWeather()
        }
    }, [lat, lon])

    return (
        <>
            {!loading && (
                <div className="flex px-20 justify-center gap-5 flex-wrap">

                    <div 
                        className={`rounded-lg min-w-[335px] min-h-[304px] bg-cover p-[20px] flex flex-col justify-between`}
                        style={{
                            backgroundImage: `url("${imageSrc}")`,
                        }}
                    >
                        <div>
                            <p className="text-ngray-100 text-lg font-bold">{city}</p>
                            <span className="text-ngray-100 text-lg">{format(time, "Do 'de' MMMM yyyy", {locale: ptBR})}</span>
                        </div>
                        <div className="flex justify-between">
                            <div>
                                <p className="text-ngray-100 text-6xl font-extrabold mb-2">{weather.main.temp.toString().slice(0, 2)}°c</p>

                                <p className="text-ngray-100 text-lg font-bold">{weather.main.temp_min.toString().slice(0, 2)}°c / {weather.main.temp_max.toString().slice(0, 2)}°c</p>
                                <p className="text-ngray-100 text-sm uppercase font-bold">{weather.weather[0].description}</p>
                            </div>
                            <div>
                                <img src={iconSrc} alt={weather.weather[0].description} className="w-[160px]"/>
                            </div>
                        </div>
                    </div>

                    <div className="bg-ngray-800 font-bold text-ngray-200 rounded-lg min-w-[335px]">
                        <div className="border-b-[0.5px] border-gray-800 border-spacing-4 p-4 flex justify-between">
                            <div className="flex items-center gap-2">
                                <ThermometerSimple size={24}/>
                                <p>Sensação térmica</p>
                            </div>
                            <span>{weather.main.feels_like.toString().slice(0, 2)}°c</span>
                        </div>
                        {/* <div className="border-b-[0.5px] border-gray-800 border-spacing-4 p-4 flex justify-between">
                            <p>Probabilidade de chuva</p>
                        </div> */}
                        <div className="border-b-[0.5px] border-gray-800 border-spacing-4 p-4 flex justify-between">
                            <div className="flex items-center gap-2">
                                <Wind size={24}/>
                                <p>Velocidade do vento</p>
                            </div>
                            <span>{weather.wind.speed.toString().slice(0, 3)}Km/h</span>
                        </div>
                        <div className="border-b-[0.5px] border-gray-800 border-spacing-4 p-4 flex justify-between">
                            <div className="flex items-center gap-2">
                                <Drop size={24}/>
                                <p>Umidade do ar</p>
                            </div>
                            {weather.main.humidity.toString().slice(0, 2)}%
                        </div>
                        {/* <div className="border-b-[0.5px] border-gray-800 border-spacing-4 p-4 flex justify-between">
                            <p>Índice UV</p>
                        </div> */}
                    </div>
                    
                </div>
            )}
        </>
    )

}