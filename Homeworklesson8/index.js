let form = document.querySelector('#input');
form.onsubmit = (e) => {
    e.preventDefault();
    let city = form.city.value;
    getData(city);
}

let cityName = document.querySelector('#city');
let description = document.querySelector('#description');
let temp = document.querySelector('#temp');
let comment = document.querySelector('#comment');
let myIcon = [
    { id: '10d', src: 'http://openweathermap.org/img/wn/10d@2x.png' },
    { id: '02d', src: 'http://openweathermap.org/img/wn/02d@2x.png' },
    { id: '03d', src: 'http://openweathermap.org/img/wn/03d@2x.png' },
    { id: '04d', src: 'http://openweathermap.org/img/wn/04d@2x.png' },
    { id: '09d', src: 'http://openweathermap.org/img/wn/09d@2x.png' },
    { id: '10d', src: 'http://openweathermap.org/img/wn/10d@2x.png' },
    { id: '11d', src: 'http://openweathermap.org/img/wn/11d@2x.png' },
    { id: '13d', src: 'http://openweathermap.org/img/wn/13d@2x.png' },
    { id: '50d', src: 'http://openweathermap.org/img/wn/50d@2x.png' },
    { id: '02n', src: 'http://openweathermap.org/img/wn/02n@2x.png' },
    { id: '03n', src: 'http://openweathermap.org/img/wn/03n@2x.png' },
    { id: '04n', src: 'http://openweathermap.org/img/wn/04n@2x.png' },
    { id: '09n', src: 'http://openweathermap.org/img/wn/09n@2x.png' },
    { id: '10n', src: 'http://openweathermap.org/img/wn/10n@2x.png' },
    { id: '11n', src: 'http://openweathermap.org/img/wn/11n@2x.png' },
    { id: '13n', src: 'http://openweathermap.org/img/wn/13n@2x.png' },
    { id: '50n', src: 'http://openweathermap.org/img/wn/50n@2x.png' }
]


let getData = async (city) => {
    try {
        let preData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1760b16891e31cb347b152d1493325cd`);
        let data = await preData.json();
        cityName.textContent = data.name;
        description.textContent = data.weather[0].description;
        let kTemp = data.main.temp;
        temp.textContent = Math.floor(kTemp - 273.15) + "\xB0C";
        if (kTemp < 293.15) {
            comment.textContent = 'Hom nay troi ret';
        } else if (kTemp < 303.15) {
            comment.textContent = 'Hom nay troi mat me';
        } else {
            comment.textContent = 'Hom nay troi nong';
        }
        let iconId = data.weather[0].icon;
        let icon = document.querySelector('img');
        for (i = 0; i < myIcon.length; i++) {
            if (myIcon[i].id == iconId) {
                icon.src = myIcon[i].src;
            }
        }
    } catch (err) {
        alert('Không tìm thấy thành phố. Vui lòng nhập lại');
    }
}