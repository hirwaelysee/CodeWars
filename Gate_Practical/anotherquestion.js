function getStudentInfo(student){
    const {name: names, subject: subjects} = student;
    console.log(`Student ${names} is studying ${subjects}.`);
}

const student = {
  name: "Alice",
  age: 20,
  grade: "A",
  subject: "Mathematics",
};

getStudentInfo(student) // should return "Student Alice is studying Mathematics."