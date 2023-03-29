

// var API_key ='9197c260f2466ef1ab14f15ca65cf392'

async function api() {
    v= fetch('https://restcountries.com/v3.1/all')
    out1=await v
    prom = out1.json()
    out =await prom

 var parent_data_all=document.querySelector('.weather-data')
   for(let i of out){
    try{
     var data_cont = document.createElement('div')
     data_cont.classList.add('outlayer')
     data_cont.style.display='inline-block'

     var countryName =document.createElement('p')
     countryName.innerText=i.name.common
     data_cont.append(countryName)
    console.log(i.name.common);

    var flag =document.createElement('img')
    flag.setAttribute('src',i.flags.png)
    data_cont.append(flag)
    console.log(i.flags.png);

    var capital =document.createElement('p')
    capital.innerText=i.capital[0]
    data_cont.append(capital)
    console.log(i.capital[0]);

    var region =document.createElement('p')
    region.innerText=i.region
    data_cont.append(region)
    console.log(i.region);
    

    var button_weather = document.createElement('button')
    button_weather.setAttribute('onClick','weatherapi(this)')
    button_weather.innerText = 'click for weather'
    data_cont.append(button_weather)

    parent_data_all.append(data_cont)

    }catch{
        //
    }
   }
}

api() 

async function weatherapi(e){

        var parent=e.parentElement
        var lat =parent.getAttribute('lat')
        var lon = parent.getAttribute('lng')
        console.log(lat);
        console.log(lon);
        console.log('getting executed');
        var weather_url=(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`)
        
        v=fetch(weather_url)
        out1=await v
        prom=out1.json()
        out= await prom
        console.log(out);
}
