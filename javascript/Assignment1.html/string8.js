/*8. WAP to check if 2 strings are anagram or not
	'listen' - 'silent'    anagram(every char of str1 should be there in str2)*/
    function anagram(s1,s2){
        if(s1.length!=s2.length){
            return false;
        }
        else{
            return (s1.split('').sort().join('')===s2.split('').sort().join(''));
        }
    }
    console.log(anagram("listen","silent"));
