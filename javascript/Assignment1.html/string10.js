/*10. WAP to move all the special characters to the end of the string
	input:- 'hello@#hi&'
   output:- 'hellohi@#&'*/
   function moveEnd(s) {
    var chars = s.split('');
    var alphanumericChars = [];
    var specialChars = [];
    for (var i = 0; i < chars.length; i++) {
        var char = chars[i];

        
        if (/[a-zA-Z0-9]/.test(char)) {
            alphanumericChars.push(char);
        } else {
            specialChars.push(char);
        }
    }
    return alphanumericChars.concat(specialChars).join('');
}
var s= 'hello@#hi&';
console.log(moveEnd(s));