import Logo from "../../assets/Logo.svg"

export function Header(){
    return (
        <header className="flex justify-center items-center p-10 mb-5">
            <img
                src={Logo}
                className="w-[500px]" 
                alt="Logo escrito IWeather e uma imagem a esquerda de uma nuvem" 
            />
        </header>
    )
}