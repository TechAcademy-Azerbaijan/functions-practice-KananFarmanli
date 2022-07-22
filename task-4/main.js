function fib(x){
    let a =0
    let b =0
    let c =0
    
    
    for (let i = 0; i <=x; i++) {
     if (i==1){
            c=1
    
        }else if(i==2){
            b=0
            c=1
        }
        a = b
        b =c
        c = a + b
       
    }return console.log(c)
    
}

fib(10)
