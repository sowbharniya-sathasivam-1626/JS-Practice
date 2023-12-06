let fullName = "Sowbharniya";
let Course = "MERN Stack Development";

let msg = "Hello, my name is " + fullName + ". Driven by a passion for technology and problem-solving currently honing my skills in " + Course + " through a course at Guvi.";

alert(msg);

console.log(msg);

let num1 = 6;
let num2 = 30;
let result = num1*num2;
console.log(result);

// The 2 forward slash is used for single line cmt

        /*
       
            Rules:
              1. The variable name should not be the Javascript Keywords.
              2. The variable name should not be start with a number.
              3. The variable name should not contain any special characters and space.
              4. Javascript language is case sensitive language.
              5. Use meaningful names.


        */
//Objects:-

 //Object Notation {}
 //To access object values
 //there are 2 was to access the object
 //1st is dot notaion
 // 2nd one is box notation

let Student = {
    // key: value,
    name: "Sowbharniya",
    age: 24,
    address: "Nurani, Palakkad",
    course: "MERN Stack Development",
    isAlive: true
}

console.log(Student);
console.log(Student.name);
console.log(Student.isAlive);
console.log(Student["course"]);

//Arrays:-

let students = ["Sowbharniya", "Krishna", "Vinu", "Naveen"];
students[4] = "Derish";
students[6] = null;
students[10] = "Srinithi";
console.log(students);

//Fuction:-

function IntroduceYourself(firstName, place, course){
    console.log("Good Morning Everyone!! My name is " + firstName + ". I'm from " + place + ". Driven by a passion for Technology and Problem-Solving currently honing my skills in " + course + " through a course at GUVI.");
}

IntroduceYourself("Sowbharniya", "Nurani village, Palakkad", "MERN Stack Development");
IntroduceYourself("Krishna", "Thrissur, Kerala","Core Java");

function multiplication(num1, num2, num3){
    console.log(num1*num2*num3);
}

multiplication(2, 3, 4);
multiplication(5, 6, 7);

function divison(num1, num2){
    return num1/num2;
}
console.log(divison(32,4));

//Assignment Operators:-

let x = 60;
x += 4;
console.log(x); //64

let y = 20;
y -= 5;
console.log(y);  //15

//Arithmetic Operator:-

let number1 = 150;
let number2 = 30;
console.log(number1+number2);  //180
console.log(number1-number2);  //120
console.log(number1*number2);  //4500
console.log(number1/number2);  //5
console.log(number1%number2);  //0

//