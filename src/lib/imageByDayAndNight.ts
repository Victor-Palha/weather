export async function SetImageByDayAndNight(time: Date, weather: string) {
    const hours = time.getHours();
    const isDay = hours >= 6 && hours < 18;
    let image: string = "";

    if (isDay) {
        const dayImage = await import(`../assets/Weather=${weather}, Moment=Day.png`);
        image = dayImage.default;
    } else {
        const nightImage = await import(`../assets/Weather=${weather}, Moment=Night.png`);
        image = nightImage.default;
    }

    return image;
}
