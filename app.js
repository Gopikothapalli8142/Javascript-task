// 1. Write a JavaScript program to calculate the volume of a
// sphere using an arrow function.

// let volume=(r)=>{

//     output=4/3*22/7*(r*r*r);
//     console.log(`${output}`);

// }
// volume(4);

// 2.Duplicate the segment of a website

// let main=document.querySelector(".main")


// let pics=document.querySelector("img");

// pics.style.filter="blur(1.5px)";



// 3. When a user brings the mouse over the bold text it should be
// highlighted.


// let para=document.querySelector("p");

// para.addEventListener("mouseleave",() =>{
//    para.style.fontWeight="bold"
// })



// 4. Show the width and height of the window (it should change
//     when window is resized)
// let a=window.innerWidth;
// let b=window.innerHeight;
// let para=document.querySelector("p");
// para.innerHTML="width: "+ a + "height: " + b;


// 5. Write a JavaScript program to display the current day and
// time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


// let today= new Date();
// let day=today.getDay();
// let weekNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","staurday"];
// let displayTime= ()=>{
//     console.log(`Today is: ${weekNames[day]}`);

// let hour=today.getHours();
// let minute=today.getMinutes();
// let seconds=today.getSeconds();
// // console.log(`${hour} ${minute} ${seconds}`)
// if(hour>12){
//     console.log(`${hour-12}: ${minute} ${seconds} PM `)
// }else{
//     console.log(`${hour} : ${minute} ${seconds} AM `)
// }
// }
// displayTime();

// 6. Write a JavaScript program to find the area of a triangle
// where lengths of the three of its sides are 5, 6, 7.

// let a=5;
// let b=6;
// let c=7;

// let triangle=((a,b,c)=>{
//     let s = (a+b+c)/2;
//     let g= Math.sqrt(s*(s-a)*(s-b)*(s-c));
    
//     console.log(g)
// })
// triangle(5,6,7)

// 7. Write a JavaScript program where the program takes a
// random integer between 1 to 10, the user is then prompted
// to input a guess number. If the user input matches with the
// guess number, the program will display a message "Good
// Work" otherwise display a message "Not matched".


// let inputNumber=((a)=>{
//     if(a>=1 && a<=10){

//         console.log("Good work")

//     }else{
//         console.log("not matched")
//     }
// })
// inputNumber(9);




// 8.Write a JavaScript program to convert temperatures to and
// from Celsius, Fahrenheit. Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius
// and f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C


// 9. Write a JavaScript program to find the largest of three given
// integers.

// let a=[50,10,15,36,17,25]
// let number=a.sort((a,b)=>{
//    return b-a;
  
// })
// for(i=0;i<number.length-3;i++){
//     console.log(number[i])
// }

    


// 10. Write a javascript program to print “You got A+” if the
// student has got marks between 91-100, print “You got A” if
// marks are between 81-90, print “You got B” if marks are
// between 71-80, print “You got C” if marks are between 41-70
// and print “You got F” if marks are below 40


// let marks=(mark)=>{
//     if(mark>91 && mark<=100){
//         console("You got A+");
//     }else if(mark>81 && mark<=90){
//         console("You got A");
//     }else if(mark>71 && mark<=80){
//         console("You got B");
//     }else if(mark>41 && mark<=70){
//         console.log("You got C");
//     }else{
//         console.log("You got F")
//     }
// }
// marks(71);


// 11.write a program to covert 1000 minutes in hours.

let convert=(minutes)=>{
 let hours=(minutes/60);
 console.log(hours)
}
convert(1000)