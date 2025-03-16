5./*WAP to find longest word in a sentence
	input:- 'this is javascript class'
    output:- javascript*/ 
    function longstr(s) {
      let words = s.split(" ");  
      let longstr = "";
      for (let i = 0; i < words.length; i++) {
          if (words[i].length > longstr.length) {
              longstr = words[i]; 
          }
      }
      return longstr;
  }
  console.log(longstr("this is javascript class"));