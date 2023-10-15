let interval ;
dayjs.extend(window.dayjs_plugin_timezone)
const  getTime = (zone) => {
    // console.log("before")
    let timeNow = dayjs(new Date().toLocaleString("en-US", {timeZone: zone})).format('h:mm:ss a')
    // console.log(timeNow)
    document.querySelector(".timeNow").textContent = timeNow 
}

const displayTime = (zone) =>{
    getTime(zone)
    interval = setInterval(function(){
        getTime(zone)
    },1000)
} 
const clearActive = () =>{
    document.querySelector("#CA").classList.remove("active")
    document.querySelector("#India").classList.remove("active")
    document.querySelector("#NYC").classList.remove("active")
    document.querySelector("#Berlin").classList.remove("active")
    document.querySelector("#London").classList.remove("active")
}
const clockInit = () =>{
    displayTime("Asia/Calcutta")
    document.querySelector("#India").classList.add("active")
}

document.querySelector("#India").addEventListener('click',function(){
    clearActive()
    document.querySelector("#India").classList.add("active")
    clearInterval(interval)
    displayTime("Asia/Calcutta")
})
document.querySelector("#CA").addEventListener('click',function(){
    clearActive()
    document.querySelector("#CA").classList.add("active")
    clearInterval(interval)
    displayTime("America/Chicago")
})
document.querySelector("#NYC").addEventListener('click',function(){
    clearActive()
    document.querySelector("#NYC").classList.add("active")
    clearInterval(interval)
    displayTime("America/New_York")
})
document.querySelector("#London").addEventListener('click',function(){
    clearActive()
    document.querySelector("#London").classList.add("active")
    clearInterval(interval)
    displayTime("Europe/Belfast")
})
document.querySelector("#Berlin").addEventListener('click',function(){
    clearActive()
    document.querySelector("#Berlin").classList.add("active")
    clearInterval(interval)
    displayTime("Europe/Berlin")
})

clockInit()