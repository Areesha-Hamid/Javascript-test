
function grading(marks) {

let grade;
switch(true) {
    case ((marks <=100) && (marks >= 90)):
        grade : "first division"
        break;
    case ((marks <= 89) && (marks >= 80)):
        grade = "second division"
        break;
    case ((marks <= 79) && (marks >= 70)):
         grade = "third division"
        break;
    case ((marks <= 69) && (marks >= 60)):
        grade = "fourth division"
        break;
    case ((marks <= 59) && (marks >= 50)):
        grade = "fifth division"
        break;
    default :
    grade = 'failed'
    break;
}
    return grade;
}

let score =grading(78);
console.log(score);