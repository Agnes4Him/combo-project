//Start of time piece logic

const doubleSegment = (segment) => {
    if (segment < 10) {
        segment = "0" + segment
    }
    return segment;
}

setInterval(() => {
    const date = new Date()
    const hour = doubleSegment(date.getHours())
    const minute = doubleSegment(date.getMinutes())
    const second = doubleSegment(date.getSeconds())
    const time = hour + ":" + minute + ":" + second
    document.getElementById("time").innerHTML = time
}, 1000)

//End of time piece logic

//Start of timer logic

const second = document.getElementById("second");
const minute = document.getElementById("minute");
const hour = document.getElementById("hour");
const secSupport = document.getElementById("secSupport");
const minSupport = document.getElementById("minSupport");
const hourSupport = document.getElementById("hourSupport");
const controlButton = document.getElementById("control");
const resetButton = document.getElementById("reset");

let secTime = null;
let minTime = null;
let hourTime = null;
let secSupportTime = null;
let minSupportTime = null;
let hourSupportTime = null;
controlButton.addEventListener('click', ()=> {
    if (controlButton.innerHTML == "Start") {
        controlButton.innerHTML = "Stop";
        secTime = setInterval(runSecTime, 1000)
        function runSecTime() {
            if (second.innerHTML == 9) {
            second.innerHTML = 0;
            }else {
            second.innerHTML = parseInt(second.innerHTML) + 1
            }
        }
        //Second support codes
        secSupportTime = setInterval(runSecSupportTime, 10000)
        function runSecSupportTime() {
            if (secSupport.innerHTML == 5) {
                secSupport.innerHTML = 0;
            }else {
                secSupport.innerHTML = parseInt(secSupport.innerHTML) + 1
            }
        }

        minTime = setInterval(runMinTime, 60000)
        function runMinTime() {
            if (minute.innerHTML == 9) {
                minute.innerHTML = 0;
            }else {
                minute.innerHTML = parseInt(minute.innerHTML) + 1
            }
        }

        //Minute support codes
        minSupportTime = setInterval(runMinSupportTime, 600000)
        function runMinSupportTime() {
            if (minSupport.innerHTML == 5) {
                minSupport.innerHTML = 0;
            }else {
                minSupport.innerHTML = parseInt(minSupport.innerHTML) + 1
            }
        }

        hourTime = setInterval(runHourTime, 3600000)
        function runHourTime() {
            if (hour.innerHTML == 9) {
                hour.innerHTML = 0;
            }else {
                hour.innerHTML = parseInt(hour.innerHTML) + 1
            }
        }

        //Hour support codes
        hourSupportTime = setInterval(runHourSupportTime, 36000000)
        function runHourSupportTime() {
            if (hourSupport.innerHTML == 2) {
                hourSupport.innerHTML = 0;
            }else {
                hourSupport.innerHTML = parseInt(hourSupport.innerHTML) + 1
            }
        }

    }else {
        controlButton.innerHTML = "Start";
        clearInterval(secTime);
        clearInterval(secSupportTime);
        clearInterval(minTime);
        clearInterval(minSupportTime);
        clearInterval(hourTime);
        clearInterval(hourSupportTime);
    }
})

resetButton.addEventListener('click', () => {
    if (second.innerHTML != 0 || secSupport.innerHTML != 0 || minute.innerHTML != 0 || minSupport.innerHTML != 0 || hour.innerHTML != 0 || hourSupport.innerHTML != 0) {
        second.innerHTML = 0;
        minute.innerHTML = 0;
        hour.innerHTML = 0;
        secSupport.innerHTML = 0;
        minSupport.innerHTML = 0;
        hourSupport.innerHTML = 0;
    }
})

//Clear timer after 24hours
if (hourSupport.innerHTML == 2 && hour.innerHTML == 3) {
    second.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
    secSupport.innerHTML = 0;
    minSupport.innerHTML = 0;
    hourSupport.innerHTML = 0;
}

//End of timer logic


//Start of calculator logic

const numOp = document.querySelectorAll('.numop')
const plusOp = document.getElementById('plusOp')
const minusOp = document.getElementById('minusOp')
const timesOp = document.getElementById('timesOp')
const divideOp = document.getElementById('divideOp')
const dotOp = document.getElementById('dotOp')
const number = document.querySelectorAll('.number')
const display = document.getElementById('display')
const equal = document.querySelector('.equal')
const clear = document.querySelector('.clear')
const on = document.querySelector('.on')
const off = document.querySelector('.off')
const arrow = document.querySelector('.arrow')

numOp.forEach((eachnumOp) => {
    eachnumOp.addEventListener('click', () => {
        if ((display.innerHTML).length > 0) {
            const lastItem = (display.innerHTML).charAt((display.innerHTML).length - 1)
            if ((eachnumOp.innerHTML == plusOp.innerHTML || eachnumOp.innerHTML == minusOp.innerHTML || eachnumOp.innerHTML == timesOp.innerHTML || eachnumOp.innerHTML == divideOp.innerHTML || eachnumOp.innerHTML == dotOp.innerHTML) && (lastItem == plusOp.innerHTML || lastItem == minusOp.innerHTML || lastItem == timesOp.innerHTML || lastItem == divideOp.innerHTML || lastItem == dotOp.innerHTML)) {
                display.innerHTML = (display.innerHTML).slice(0, -1)
                display.innerHTML += eachnumOp.innerHTML
            }else if (display.innerHTML == "0") {
                display.innerHTML = ""
                display.innerHTML += eachnumOp.innerHTML
            }else {
                display.innerHTML += eachnumOp.innerHTML
            }
        }else {
            display.innerHTML += eachnumOp.innerHTML
        }    
    })
})

//operation.forEach((eachOperation) => {
    //eachOperation.addEventListener('click', () => {
        //if (display.innerHTML == "0") {
            //display.innerHTML = ""
            //display.innerHTML += eachOperation.innerHTML
        //}else {
            //display.innerHTML += eachOperation.innerHTML
        //}
    //})
//})

equal.addEventListener('click', () => {
    display.innerHTML = eval(display.innerHTML)
})

clear.addEventListener('click', () => {
    display.innerHTML = ""
})

on.addEventListener('click', () => {
    display.innerHTML = 0
})

off.addEventListener('click', () => {
    display.innerHTML = ""
})

arrow.addEventListener('click', () => {
    display.innerHTML = (display.innerHTML).slice(0, (display.innerHTML).length - 1)
})

//End of calculator logics



