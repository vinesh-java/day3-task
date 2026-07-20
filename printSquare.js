const printSquare= (size)=>{

    for(let i=1; i<=size; i++){
        let row="";
        for(let j=1; j<=size; j++){
           row+="* ";
        }
        console.log(row)
    }

}

printSquare(4);