import WeatherType from "./Enums/WeatherType";

const weather: Promise<WeatherType> = new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 10);

    if (randomNumber <= 6) {
        resolve(randomNumber);
    } else {
        reject("Weather forecast could not be determined");
    }
});

weather
    .then((resp: WeatherType) => {
        console.log(WeatherType[resp]);
    })
    .catch((error) => {
        console.error(error);
    });
