let evenOrOdd = (arr) => {
    arr.forEach((num) => { num % 2 == 0 ? console.log("even : ",num) : console.log("odd : ", num)});
}

evenOrOdd([2,5,7,3,9,6]);
