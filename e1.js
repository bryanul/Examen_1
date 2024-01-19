const x = "X"

function llamar(t,r,c){
    for(let n = 0; n < 2; n++){
        for(let i = 0; i < 8; i++){
            for(let j = 0; j < 8; j++){
                const borrar = document.getElementById(n+"_"+i+"_"+j)
                borrar.innerHTML = ''
            }
        }
    }
    const b1 = document.getElementById(t+"_"+r+"_"+c)
    b1.innerHTML = x
    if(c+1<=7){
        const b2 = document.getElementById(t+"_"+r+"_"+(c+1))
        b2.innerHTML = x
    }if(c-1>=0){
        const b4 = document.getElementById(t+"_"+r+"_"+(c-1))
        b4.innerHTML = x
    }if(r+1<=7){
        const b3 = document.getElementById(t+"_"+(r+1)+"_"+c)
        b3.innerHTML = x
    }if(r-1>=0){
        const b5 = document.getElementById(t+"_"+(r-1)+"_"+c)
        b5.innerHTML = x
    }
    espejo(t,r,c)    
}

function espejo(t,r,c){
    if(t === 0){
        t = 1
    }else if(t === 1){
        t = 0
    }
    let r2 = 7 - r
    let c2 = 7 - c
    const b10 = document.getElementById(t+"_"+r2+"_"+c2)
    b10.innerHTML = x
    if(c2+1<=7){
        const b20 = document.getElementById(t+"_"+r2+"_"+(c2+1))
        b20.innerHTML = x
    }if(c2-1>=0){
        const b40 = document.getElementById(t+"_"+r2+"_"+(c2-1))
        b40.innerHTML = x
    }if(r2+1<=7){
        const b30 = document.getElementById(t+"_"+(r2+1)+"_"+c2)
        b30.innerHTML = x
    }if(r2-1>=0){
        const b50 = document.getElementById(t+"_"+(r2-1)+"_"+c2)
        b50.innerHTML = x
    }
}