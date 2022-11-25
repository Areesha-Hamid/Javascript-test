    let password = 'p@ssword8899';
    let special = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    if (password.length == 12 && special.test(password)){
        console.log("Your password is strong");
    }else if(password.length == 6 && special.test(password)){
        console.log("your password is strong enough!");
    }else{
        console.log("your password is too short! Try new password");
    };