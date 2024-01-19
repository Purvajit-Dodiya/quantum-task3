const announcements = [
  {
    PA: "Wilson Kumar",
    alertMessage: "No classes will be held on 21st Nov",
    date: "15-Sep-2018",
    time: "07:21 pm",
    status: "active",
    attachments: 2,
  },
  {
    PA: "Samson White",
    alertMessage: "Guest lecture on Geometry on 20th September",
    date: "15-Sep-2018",
    time: "05:21 pm",
    status: "active",
    // Course: "Advanced Mathematics",
    attachments: 2,
  },
  {
    PA: "Wilson Kumar",
    alertMessage: "Additional course materials available on request",
    date: "14-Sep-2018",
    time: "01:21 pm",
    Course: "Mathematics 101",
  },
  {
    PA: "Wilson Kumar",
    alertMessage: "No classes will be held on 25th Dec",
    date: "13-Sep-2018",
    time: "01:15 pm",
    status: "active",
  },
  {
    PA: "Wilson Kumar",
    alertMessage: "Additional course materials available on request",
    date: "15-Sep-2018",
    time: "07:21 pm",
    status: "active",
    Course: "Mathematics 101",
  },
];

let announcementsList = document.querySelector(".announcementsMenu");
// announcementsList.innerHTML = "hi";
// alertList.innerHTML = `<li class="add-article"> hi Article</li>`;
let announcementHtml = "";
for (let announcement of announcements) {
  if (announcement.status == "active") {
    announcementHtml += `<li class="alert active">`;
  } else {
    announcementHtml += `<li class="alert">`;
  }
  if (announcement.PA) {
    announcementHtml += `<div class="course">
      <p class="title">PA:</p>
      <p class="body">${announcement.PA}</p>
    </div>`;
  }
  announcementHtml += `<div class="alertMessage">
      <p>
        ${announcement.alertMessage}
      </p>`;
  if (announcement.status == "active") {
    announcementHtml += `
      <img src="assets/icons/circle_minus_icon.svg"
        alt=""
        style="width: 18px; height: 18px"
      />
    </div>`;
  } else {
    announcementHtml += `<img src="assets/icons/check_circle_ic_icon.svg"
        alt=""
        style="width: 18px; height: 18px"
      />
    </div>`;
  }
  if (announcement.Course) {
    announcementHtml += `<div class="course">
      <p class="title">Course:</p>
      <p class="body">${announcement.Course}</p>
    </div>`;
  }
  if (announcement.Class) {
    announcementHtml += `<div class="course">
      <p class="title">Class:</p>
      <p class="body">${announcement.Class}</p>
    </div>`;
  }
  if (announcement.date && announcement.time) {
    announcementHtml += `<div class="dateTime">`;
    if (announcement.attachments) {
      announcementHtml += `<p class="attachments">
      <img src="assets/icons/attachmenticon.svg" alt="" style="height: 12px;"/>
      ${announcement.attachments} files are attached
      </p>`;
    }
    announcementHtml += `${announcement.date} at ${announcement.time}</div>`;
  }
  announcementHtml += `</li>`;
}
announcementHtml += `<div class="showAll"><p>SHOW ALL</p><p>CREATE ONE</p></div>`;

announcementsList.innerHTML = announcementHtml;
