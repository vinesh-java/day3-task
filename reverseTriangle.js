const reverseTriangle=(size)=>{
    for(let i=size; i>=1; i--){
        let row="";
        for(let j=1; j<=i; j++){
            row+="* ";
        }
        console.log(row)
    }
}
reverseTriangle(5);