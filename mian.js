let onetext = document.querySelector(".date h1");
let twotxt = document.querySelector(".date p");
let numberday = document.querySelector(".days");
let monthcurrent = new Date().getMonth();
let numbermonth = new Date(new Date().getFullYear(), monthcurrent + 1, 0).getDate(); // Correcting getFullYear
let firstday = new Date(new Date().getFullYear(), monthcurrent, 1).getDay(); // Correcting getDay

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

onetext.innerText = months[monthcurrent];
twotxt.innerText = new Date().toDateString();

let days = '';
for (let i = 1; i <= numbermonth; i++) {
    if (i === new Date().getDate()) {
        days += `<div class="active">${i}</div>`;
    } else {
        days += `<div>${i}</div>`;
    }
}

numberday.innerHTML = days;