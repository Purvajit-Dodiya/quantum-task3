courses = [
  {
    courseName: "Acceleration",
    img: {
      src: "assets/images/imageMask-1.svg",
      alt: "Image of a course.",
    },
    subject: "Physics",
    grade: "7+2",
    unitsLessonsTopics: {
      units: 4,
      lessons: 18,
      topics: 24,
    },
    classes: ["Mr. Frank's Class A", "Mr. Frank's Class B"],
    students: 50,
    duration: {
      start: "21-Jan-2020",
      end: "21-Aug-2020",
    },
    cardLinks: {
      preview: true,
      manage: true,
      grade: true,
      reports: true,
    },
  },
  {
    courseName: "Displacement, Velocity and Speed",
    img: {
      src: "assets/images/imageMask-2.svg",
      alt: "Image of a course.",
    },
    subject: "Physics 2",
    grade: "6+3",
    unitsLessonsTopics: {
      units: 2,
      lessons: 15,
      topics: 20,
    },
    classes: [],
    // students: 50,
    // duration: {
    //   start: "21-Jan-2020",
    //   end: "21-Aug-2020",
    // },
    cardLinks: {
      preview: true,
      // manage: true,
      // grade: true,
      reports: true,
    },
  },
  {
    courseName:
      "Introduction to Biology: Micro organisms and how they affec...",
    img: {
      src: "assets/images/imageMask-3.svg",
      alt: "Image of a course.",
    },
    subject: "Biology",
    grade: "4+1",
    unitsLessonsTopics: {
      units: 5,
      lessons: 16,
      topics: 22,
    },
    classes: ["All classes", "Mr. Frank's Class A", "Mr. Frank's Class B"],
    students: 300,
    // duration: {
    //   start: "21-Jan-2020",
    //   end: "21-Aug-2020",
    // },
    cardLinks: {
      preview: true,
      // manage: true,
      // grade: true,
      reports: true,
    },
  },
  {
    courseName: "Introduction to High School Mathematics",
    img: {
      src: "assets/images/imageMask.svg",
      alt: "Image of a course.",
    },
    subject: "Mathematics",
    grade: "8+3",
    // unitsLessonsTopics: {
    //   units: 4,
    //   lessons: 18,
    //   topics: 24,
    // },
    classes: ["Mr. Frank's Class A"],
    students: 44,
    duration: {
      start: "14-Oct-2019",
      end: "20-Oct-2020",
    },

    cardLinks: {
      preview: true,
      manage: true,
      grade: true,
      reports: true,
    },
    expired: true,
  },
];

let coursesContainer = document.getElementById("coursesContainer");
for (const course of courses) {
  let card = document.createElement("div");
  card.className = "courseCard";
  let cardhtml = "";
  if (course.expired) {
    cardhtml += `<span class="expired"> EXPIRED </span>`;
  }
  cardhtml += `<div class="cradImg">
            <img src="${course.img.src}" alt="${course.img.alt}" />
          </div>
          <div class="cardBody">
            <div class="courseName center">
              <p>${course.courseName}</p>
              <img src="assets/icons/favourite.svg" alt="" />
            </div>
            <div class="subjectAndGrade center">
              <p>${course.subject}</p>
              <p>Grade ${course.grade}</p>
            </div>`;
  if (course.unitsLessonsTopics) {
    let { units, lessons, topics } = course.unitsLessonsTopics;
    cardhtml += `<div class="unitsLessonsTopics center">
              <div>${units} Units</div>
              <div>${lessons} Lessons</div>
              <div>${topics}  Topics</div>
            </div>
            <select name="courseClass" id="courseClass">`;
  }
  if (course.classes.length > 0) {
    console.log(course.classes.length);
    for (const classOption of course.classes) {
      cardhtml += `<option value="${classOption}">${classOption}</option>`;
    }
  } else {
    cardhtml += `<option value="No classes" style='color:red'>No classes</option>`;
  }
  cardhtml += `</select>
            <div class="subjectAndGrade center">`;
  if (course.students) {
    cardhtml += `<p>${course.students} Students</p>`;
  }
  if (course.duration && course.duration.start && course.duration.start) {
    cardhtml += `<p>${course.duration.start} - ${course.duration.end}</p>`;
  }
  // fourty-opacity
  const { preview, manage, grade, reports } = course.cardLinks;
  cardhtml += `</div>
          </div>
          <div class="cardLinks">`;
  if (preview) {
    cardhtml += `<img
              src="assets/icons/preview.svg"
              alt=""
              style="width: 24px; height: 24px"

            />`;
  } else {
    cardhtml += `<img
              class="fourty-opacity"
              src="assets/icons/preview.svg"
              alt=""
              style="width: 24px; height: 24px"
            />`;
  }
  if (manage) {
    cardhtml += `<img
              src="assets/icons/manage course.svg"
              alt=""
              style="width: 20px; height: 20px"

            />`;
  } else {
    cardhtml += `<img
              class="fourty-opacity"
              src="assets/icons/manage course.svg"
              alt=""
              style="width: 20px; height: 20px"

            />`;
  }
  if (grade) {
    cardhtml += `<img
              src="assets/icons/grade submissions.svg"

              alt=""
              style="width: 20px; height: 20px"

            />`;
  } else {
    cardhtml += `<img
              class="fourty-opacity"
              src="assets/icons/grade submissions.svg"

              alt=""
              style="width: 20px; height: 20px"

            />`;
  }
  if (reports) {
    cardhtml += `<img
              src="assets/icons/reports.svg"
              alt=""
              style="width: 24px; height: 24px"
            />`;
  } else {
    cardhtml += `<img
              class="fourty-opacity"
              src="assets/icons/reports.svg"


              alt=""
              style="width: 24px; height: 24px"
            />`;
  }

  cardhtml += `</div>
          </div>
        `;
  card.innerHTML = cardhtml;
  coursesContainer.append(card);
}
