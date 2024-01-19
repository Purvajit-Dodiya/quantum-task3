// //
// let dropdowns = document.querySelectorAll(".dropdown");
// dropdowns.forEach((dropdown) => {
//   let menu = dropdown.querySelector(".menu");
//   let dropdownButton = dropdown.querySelector(".dropdownButton");
//   let options = dropdown.querySelectorAll(".menu li");
//   dropdownButton.addEventListener("click", () => {
//     console.log("clicked");
//     menu.classList.toggle("menu-open");
//   });
//   options.forEach((option) => {
//     option.addEventListener("click", () => {
//       options.forEach((option) => {
//         option.classList.remove("active");
//         let litmp = option.querySelector(".li");
//         if (litmp != null) {
//           litmp.classList.remove("li-open");
//         }
//       });
//       option.classList.add("active");
//       let li = option.querySelector(".li");
//       if (li != null) {
//         li.classList.add("li-open");
//       }
//     });
//   });
// });

const alerts = [
  {
    alertMessage:
      "License for Introduction to Algebra has been assigned to your school",
    date: "15-Sep-2018",
    time: "07:21 pm",
    status: "active",
  },
  {
    alertMessage: "Lesson 3 Practice Worksheet overdue for Amy Santiago",
    date: "15-Sep-2018",
    time: "05:21 pm",
    status: "completed",
    Course: "Advanced Mathematics",
  },
  {
    alertMessage: "23 new students created",
    date: "14-Sep-2018",
    time: "01:21 pm",
    status: "active",
  },
  {
    alertMessage: "15 submissions ready for evaluation",
    date: "13-Sep-2018",
    time: "01:15 pm",
    status: "active",
  },
  {
    alertMessage:
      "License for Basic Concepts in Geometry has been assigned to your...",
    date: "15-Sep-2018",
    time: "07:21 pm",
    status: "active",
    Class: "Basics of Algebra",
  },
  {
    alertMessage: "Lesson 3 Practice Worksheet overdue for Sam Diego",
    date: "15-Sep-2018",
    time: "07:21 pm",
    status: "completed",
    Course: "Advanced Mathematics",
  },
];

let alertList = document.querySelector(".alertMenu");

// alertList.innerHTML = `<li class="add-article"> hi Article</li>`;
let alerHtml = "";
for (let alert of alerts) {
  if (alert.status == "active") {
    alerHtml += `<li class="alert active">`;
  } else {
    alerHtml += `<li class="alert">`;
  }
  alerHtml += `<div class="alertMessage">
    <p>
      ${alert.alertMessage}
    </p>`;
  if (alert.status == "active") {
    alerHtml += `
    <img src="assets/icons/circle_minus_icon.svg"
      alt=""
      style="width: 18px; height: 18px"
    />
  </div>`;
  } else {
    alerHtml += `<img src="assets/icons/check_circle_ic_icon.svg"
      alt=""
      style="width: 18px; height: 18px"
    />
  </div>`;
  }
  if (alert.Course) {
    alerHtml += `<div class="course">
    <p class="title">Course:</p>
    <p class="body">${alert.Course}</p>
  </div>`;
  }
  if (alert.Class) {
    alerHtml += `<div class="course">
    <p class="title">Class:</p>
    <p class="body">${alert.Class}</p>
  </div>`;
  }
  if (alert.date && alert.time) {
    alerHtml += `<div class="dateTime">${alert.date} at ${alert.time}</div>`;
  }
  alerHtml += `</li>`;
}
alerHtml += `<div class="showAll"><p>SHOW ALL</p></div>`;

alertList.innerHTML = alerHtml;
