console.log("Client side js")



const formData = document.querySelector('form')
const searchElement = document.querySelector('input')
const resultPara = document.getElementById('resultPara')
const errorPara = document.getElementById('errorPara')

formData.addEventListener('submit',(e) =>{
    e.preventDefault()

    const location = searchElement.value

    if(!location){
        errorPara.innerHTML = "Please enter a valid location"
    }else{
        errorPara.innerHTML = ""
        resultPara.innerHTML = "Loading...."
        const url = 'http://localhost:3000/Weather?address=' +location

    

        fetch(url).then((response) => {
        response.json().then((data) => {
            console.log(data)
            resultPara.innerHTML = "Weather in "+ data.place_name + " is " + data.weather.temp +"°C but it feels like " + data.weather.feels_like+'°C'
    
        })
    })
    }
})