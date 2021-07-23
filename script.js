function getdetails(place){

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("name").innerHTML=abc.name)


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("country").innerHTML=abc.sys.country)


    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("lat").innerHTML=abc.coord.lat)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("lon").innerHTML=abc.coord.lon)

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("temp").innerHTML=parseInt(abc.main.temp - 273.15)+"C")

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=736412f27570e2880986e590ae7278fc`)
    .then(res => res.json())
    .then(abc => document.getElementById("speed").innerHTML=abc.wind.speed)

    
    }
    function getPlace(){
        var place =document.getElementById("placeInput");
        getdetails(place.value)
    }
