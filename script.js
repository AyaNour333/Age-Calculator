let dayInput = document.querySelector(".box-1 input")
let monthInput = document.querySelector(".box-2 input")
let yearInput = document.querySelector(".box-3 input")
let input = document.querySelectorAll(".row-input input")

let years = document.querySelector(".res span.years")
let months = document.querySelector(".res span.months")
let days = document.querySelector(".res span.days")

let inputDiv = document.querySelectorAll(".row-input .first")
let spans = document.querySelectorAll(".boxhead")
let button = document.querySelector(".image button")


button.onclick = function(){
    if(dayInput.value != '' && monthInput.value != '' && yearInput.value != ''){
        if(dayInput.value <= 31 && monthInput.value <= 12 && yearInput.value <= 2023){
            this.classList.add("clicked")
            var dob = new Date(`${monthInput.value}/${dayInput.value}/${yearInput.value}`);
            var today = new Date();
            var ageYears = today.getFullYear() - dob.getFullYear();
            var ageMonths = Math.abs(today.getMonth() - dob.getMonth()) ;
            var ageDays = today.getDate() - dob.getDate();
            years.innerHTML = ageYears
            months.innerHTML = ageMonths
            days.innerHTML = Math.abs(ageDays) 
            this.classList.remove("clicked")
            document.querySelectorAll(".row-input input").forEach(el =>{
                el.style.borderColor = "#ccc"
            })
            spans.forEach(span =>{
                span.classList.remove("red")
                console.log(span);
            })
            document.querySelectorAll(".row-input .first").forEach(e =>{
                e.classList.remove("block")
            })
            document.querySelectorAll(".row-input .second").forEach(e =>{
                e.classList.remove("block")
            })
        }
        else{
            console.log("fail");
            error("second")
        }
    }
    else{
        console.log("else");
        error("first")
    }
}


function error(message){
    input.forEach(el =>{
        if(el.value == ''){
            el.style.borderColor = "#ff00008c"
            el.parentElement.children[0].classList.add("red")
            el.parentElement.children[2].classList.add("block")
        }
        else{
            if(el.classList.contains("d") && el.value > 31 || el.classList.contains("m")&& el.value > 12 || el.classList.contains("y")&& el.value > 2023 ){
                el.style.borderColor = "#ff00008c"
                el.parentElement.children[0].classList.add("red")
                el.parentElement.children[3].classList.add("block")
            }
        }
    })
}

