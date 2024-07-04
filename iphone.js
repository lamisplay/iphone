let bodr = document.getElementById('bodr')
let nav = document.getElementById('nav')
let screendisplay = document.getElementById('semi')
const btn2 = document.getElementById('btn2')
const downbutton = document.getElementById('downbutton')
let datedisplay = document.getElementById('datedisplay')
let timedisplay = document.getElementById('timedisplay')
let thepassword = document.getElementById("thepassword")
let power = true
let ind = 0
firstdisplays.style.display = 'none'
nav.style.display = 'none'
thepassword.style.display = "none"
btn2.addEventListener('click', event => {
    if (power == true) {
        power = false
        screendisplay.style.backgroundImage = "url('iphonew.jpg')"
        firstdisplays.style.display = 'block'
        nav.style.display = 'flex'

        const weekdays = ["sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
        const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
            "November", "December"];

        const now = new Date()

        let day = weekdays[now.getDay()]
        const date = now.getDate()
        const getmonth = month[now.getMonth()]
        const fulldate = `${day},${date} ${getmonth}`
        datedisplay.innerHTML = fulldate


        let hours = now.getHours()
        const minutes = now.getMinutes()
        const timestring = `${hours}:${minutes}`
        timedisplay.innerHTML = timestring

    } else {
        power = true
        screendisplay.style.backgroundImage = "url('blacki.jpeg')"
        firstdisplays.style.display = 'none'
        nav.style.display = 'none'
        thepassword.style.display = "none"
    }

})

downbutton.addEventListener('click', event => {
    firstdisplays.style.display = 'none'
    nav.style.display = 'flex'
    thepassword.style.display = "block"


})

function display(pass) {
    passwordinput.value += pass.target.value
    if (passwordinput.value == '1234') {
        firstdisplays.style.display = 'none'
        nav.style.display = 'flex'
        thepassword.style.display = "none"
        screendisplay.style.backgroundImage = "url('wall.jpg')"
        
        
        
    } else { 
    
    }

}





