

//    const username = prompt(" what is your name?")

//    const beSure =confirm("Biko dont leave dakun")

//    if(beSure){
//     alert("welcome " + username)
//    }
//    const age = prompt("what is your age?")

//    if (age < 18){
//     alert("you are not allowed to access to this site")
// }
// else{
//     alert(" welcome to the site")


// const Name= prompt("Please enter your name")
// const Grade = prompt ("Please, put your mark")

// //0-39  F
// //40-45 E
// //46-49 D
// //50-59 C
// //60-69 B
// //70-100

// if(Name){
//     alert("welldone " + Name)
// }

// if (Grade>= 0 && Grade <=39)
//     alert(" You got F Please work harder you failed")
// if (Grade>= 40 && Grade <=45)
//     alert(" You got E poor, please make sure you study hard")
// if (Grade>= 46 && Grade <=49)
//     alert(" You got D work hard next time this is bellow average")
// if (Grade>= 50 && Grade <=59)
//     alert(" You got C Average, welldone")
// if (Grade>=60 && Grade <=69)
//     alert(" You got B Good,keep it up")
// if(Grade>=70 && Grade <=100)
//         alert( " You got A Excellent,keep up the good work")
//   else
//     alert(" Error")



// const trans =  parseInt(prompt("please select an option\n1. check Balance\n2.By reacharge card\n3.Buy data\n4. call Cutomner care "))

// switch(trans){
//     case 1:
//         alert("Your balance is 2,000")
//         break
//         case 2:
//             alert("You have select to buy reacharge card")
//             break
//             case 3:
//                 alert("You have select to buy data")
//                 break
//                 case 4:
//                     alert("You have select to call cutomer care")
//                     break
//                     default:
//                         alert("you have enter a wrong number")
// }

// function greet( visitor ="user"){
//     alert(`welcome ${visitor}!!!`) 
// }

// function add(x,y){
//     console.log(x*y)
// }
// add(52,10)

// greet("Dimah")


const foods =["Rice", "Beans", "Yam", "Egusi", "Amala", "Ewedu",]

console.log ("Original",foods)


foods.pop()
 foods.push("fufu")
 foods.shift()
foods.unshift("plantain")
foods.splice(2, "oha","eba")


console.log ("altered",foods)



const student ={
    name: "lekan",
    age: 20,
    gender :"male",
    hobbies:["football", "basketball", "coding"],
    married: false
}

console.log("original",student)


student.grade= "c+"
student.married =  true

delete student.married

console.log("altered",student)


let x = 0

while(x < 1000){
    console.log(x,"fuck you")
    x++
}