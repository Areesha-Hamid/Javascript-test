let subStr = (str) => {
    for(let i = 0 ; i <= str.length ; i++){
        for(let j = 0 ; j<= str.length + 1 ; j++){
            console.log(str.slice(i,j));
        }
    }
}

subStr('cat');