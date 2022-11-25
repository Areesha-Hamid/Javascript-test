let reverseNum = (num) => {
   let arr = num.toString().split('');
   let revArr = arr.reverse();
   let str = revArr.join('');
   let revNum = parseInt(str);
   console.log(revNum);
}

reverseNum(7896);
