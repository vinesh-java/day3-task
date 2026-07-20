const isPalindrome = (s) => {
    let reverse = "";
    for (let i = s.length - 1; i >= 0; i--) {
        reverse+=s[i];
    }

    if(s===reverse){
        console.log("Palindrome");
    }else{
        console.log("Not a Palindrome");
    }

}
isPalindrome("deed")