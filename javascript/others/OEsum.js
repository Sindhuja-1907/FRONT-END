
    let arr = [2, 8, 5, 4, 3, 1];
    let esum = 0;
    let osum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            esum += arr[i]; 
        } else {
            osum += arr[i]; 
        }
    }
    
    console.log("Even sum:", esum);
    console.log("Odd sum:", osum);
    