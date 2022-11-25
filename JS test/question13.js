let findTheNum = (num) => {
    let arr = num.sort();
    console.log('Second smallest number is : ',arr[1]);
    let num2 = arr.length - 1 ;
    console.log('The second largest number is : ',arr[num2]); 
}

findTheNum([1,4,7,5,8,3,9]);
