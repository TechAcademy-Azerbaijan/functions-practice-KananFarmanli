let array = [1,2,3,4]

function max (x){

    let max=-Infinity
    for (let index = 0; index < array.length; index++) {
        
        if(x[index]>max){

            max = x[index]

        }
    } console.log(max)


}


max(array)
