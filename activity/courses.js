const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [
        {   
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro T'
        },

        {   
            sectionNum: 2, 
            roomNum: 'STC 347',
            enrolled: 28, 
            days: 'TTh', 
            instructor: 'Sis A'
        },

        {
            sectionNum: 3,
            roomNum: 'STC 332',
            enrolled: 30,
            days: 'TTh',
            instructor: 'Kweku Cecil'
        },
    ],
    enrollStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) =>section.sectionNum == sectionNum)
        if(sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled++;
            renderSections(this.sections);
        }
    },

    dropStudent: function(sectionNum) {
        const sectionIndex = this.sections.findIndex((section) => section.sectionNum == sectionNum)
        if (sectionIndex >= 0) {
            this.sections[sectionIndex].enrolled--;
            renderSections(this.sections);
        }
    }
};


function setNameAndCode (course) {
    const courseName = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseName.textContent = course["name"];
    courseCode.textContent = course["code"];
}

setNameAndCode(aCourse);


//filling the body of the table

function sectionTemplate (section) {
                    return `<tr>
                            <td>${section.sectionNum}</td>
                            <td>${section.roomNum}</td>
                            <td>${section.enrolled}</td>
                            <td>${section.days}</td>
                            <td>${section.instructor}</td>
                      </tr>`;
}

// function outputSections () {
//     const section = aCourse.sections.map(element => sectionTemplate(element))
//     aSections.innerHTML = section.join(" ");
// }

function renderSections (sections) {
    const html = sections.map(sectionTemplate);
    const aSections = document.querySelector("#sections");
    aSections.innerHTML = html.join(" ");
}

renderSections(aCourse.sections);

//Adding eventlisteners for the enrollStudent button 
//references from the html
const enrollStudentBtn = document.querySelector("#enrollStudent");
const dropStudentBtn = document.querySelector("#dropStudent");

//listeners with events
enrollStudentBtn.addEventListener('click', function () {
    const givenSectionNumber = document.querySelector("#sectionNumber");
    const value = givenSectionNumber.value;
    return aCourse.enrollStudent(value);    
}
)

dropStudentBtn.addEventListener('click', function () {
    const givenSectionNumber = document.querySelector("#sectionNumber");
    const value = givenSectionNumber.value;
    return aCourse.dropStudent(value);
})





