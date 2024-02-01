export async function SetImageByDayAndNight(time: Date, weather: string) {
    const hours = time.getHours();
    const isDay = hours >= 6 && hours < 18;
    let image: string = "";
    let icon: string = "";
    if (isDay) {
        const dayImage = await import(`../assets/Weather=${weather}, Moment=Day.png`);
        if(weather === "Rain" || weather === "Thunderstorm") {
            const dayIcon = await import(`../assets/icons/Weather=${weather}.png`);
            icon = dayIcon.default;
        }else{
            const dayIcon = await import(`../assets/icons/Weather=${weather}1.png`);
            icon = dayIcon.default;
        }
        image = dayImage.default;
    } else {
        const nightImage = await import(`../assets/Weather=${weather}, Moment=Night.png`);
        if(weather === "Rain" || weather === "Thunderstorm") {
            const nightIcon = await import(`../assets/icons/Weather=${weather}.png`);
            icon = nightIcon.default;
        }else{
            const nightIcon = await import(`../assets/icons/Weather=${weather}2.png`);
            icon = nightIcon.default;
        }
        image = nightImage.default;
    }

    return {image, icon};
}
