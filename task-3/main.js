
//? У МЕНЯ ТУТ ДВА РЕШЕНИЯ ПРОВЕРЬ ОБА! Я УЗНАЮ ТЫ ПРОВЕРЯЛ ИЛИ НЕТ!


let arr = [92846, 96841, 66, 33582, 25998]

//! 1 rewenie
function flip (x) {
let tmp

    for (let i = 0; i < parseInt(x.length/2); i++) {
        
        tmp = x[i]
        x[i] = x[x.length-1-i]
        x[x.length-1-i]=tmp
    } return x
}
console.log(flip(arr))

//! 2 rewenie
// function flipOut (x) {
// let splice 
// for (let i = 0; i < x.length; i++) {
    
//    splice = arr.splice((x.length-2)-i,1)
//    x.push(...splice)
    
// }return x
// }
// console.log(flipOut(arr))
