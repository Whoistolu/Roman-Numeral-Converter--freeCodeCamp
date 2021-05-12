function convertToRoman(num) {
    let romanToNum = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    
    let roman = "";

    for (var key in romanToNum) {
        while (num >= romanToNum[key]) {
            roman += key;
            num -= romanToNum[key];
        }
    }

    return roman;
   }
   
   convertToRoman(36);