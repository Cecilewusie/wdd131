const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`
}
const stepsHtml = steps.map(listTemplate).join(" ");
document.querySelector("#myList").innerHTML = stepsHtml

const grades = ['A', 'B', 'A'];
function gradeTemplate(grade) {
    let points = 0;
    if (grade == "A") {
        points = 4;
    }
    else if (grade == "B") {
        points = 3
    }
    return points;

}

const gpa = grades.map(gradeTemplate).join(" ");
document.querySelector("#gradeList").innerHTML = gpa;
