let countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Burudi"];
countries.map((country) => console.log(country));

let students = [
  {
    name: "Jose",
    regNo: "sct211-0011/2018",
    course: "Computer Science",
    school: "JKUAT",
  },
  {
    name: "Juma",
    regNo: "sct211-0001/2018",
    course: "Computer Science",
    school: "JKUAT",
  },
  {
    name: "Manu",
    regNo: "sct211-0020/2018",
    course: "Civil Engineeering",
    school: "KU",
  },
];
students.map((student) => {
  return console.log(`
  Student Detail: 
   Name : ${student.name}
   Registration Number : ${student.regNo}
   Course  : ${student.course}
   School : ${student.school}
  `);
});
