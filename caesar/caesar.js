const caesar = function(text, shift) {     
    let result = '';

    // loop through each caharacter in the text
    for (let i = 0; i < text.length; i++) { 
        
        // get the character code of each letter
        let c = text.charCodeAt(i);

        // handle uppercase letters
        if (c >= 65 && c <= 90) {
            let code = c - 65 + shift;
            if (code < 0) {
                code += 26;
            };
            result += String.fromCharCode(code % 26 + 65);

        // handle lowercase letters
        } else if (c >= 97 && c <= 122) {
            let code = c - 97 + shift;
            if (code < 0) {
                code += 26;
            };
            result += String.fromCharCode(code % 26 + 97);
        
        // its not a letter, let it through
        } else result += text.charAt(i);

    };
    return result;  
}


module.exports = caesar

/*
//// JASMINE TEST: TERMINAL ////

	jasmine caesar.spec.js


//// DIRECTIONS ////

- Implement the legendary caesar cipher:
    > In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. 
    
    - It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

- write a function that takes a string to be encoded and a shift factor and then returns the encoded string:


//// EXERCISES ////

X	calculator
X	palindromes
X	caesar
	fibonacci
	getTheTitles
	findTheOldest
		
	(answers = ‘solutions’ branch of repo)
*/




/////////////////////////////////////////   
    //// REMOVED COMMENTS ////
//////////////////////////////////////////
// console.log's:
    // get the character code of each letter
        // console.log('text[i]: ', text[i], 'c: ', c);
    // handle uppercase letters          
        // console.log('result: ', result);
        // console.log('code: ', code);
    // handle lowercase letters            
        // console.log('code: ', code);                
        // console.log('result: ', result); 
    // its not a letter, let it through
        // console.log('result: ', result);
        // console.log(result[7]);



////// DECRYPTION //////

/*
const fromCaesar = function(text, shift) {
    decrypt(text, shift);
}

function decrypt(text,shift){
    let result = "";
    let deShift = (26 - shift) % 26;
    result = caesar(text, deShift);
    return result;
}   
*/

////// DECRYPTION //////

// const caesar = function(text, shift) {
//     //let result = '';
//     encrypt(text, shift);
// }

// var shift;
// function encrypt(text, shift) {
//     let c, result = "";
 
//     //loop through each caharacter in the text
//     for (let i = 0; i < text.length; i++) {

//         //get the character code of each letter
//         c = text.charCodeAt(i);

//         // handle uppercase letters
//         if (c >= 65 && c <=  90) {
//             result += String.fromCharCode((c - 65 + shift) % 26 + 65); 

//         // handle lowercase letters
//         } else if(c >= 97 && c <= 122){
//             result += String.fromCharCode((c - 97 + shift) % 26 + 97);

//         // its not a letter, let it through
//         } else result += text.charAt(i);  

//     };
//     return result;
// }

////////// WORKS! ///////////////////////

// const caesar = function(text, shift) {
//     let result = '';
//     //loop through each caharacter in the text
//     for (let i = 0; i < text.length; i++) {
//         let textChar = text.charCodeAt(i);
//         result += text[i] === text[i].toUpperCase() ? encryptUpper(textChar, shift, result)
//             : text[i] === text[i].toLowerCase() ? encryptLower(textChar, shift, result)
//             : textChar
//             //: textChar;
//     };
//     console.log("@ encypt(): result= ", result);
//     return result; 
// }
 
// function encryptUpper(charCode, shift, encoded) {
//     return encoded += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
// }

// function encryptLower(charCode, shift, encoded) {
//     return encoded += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
//}

//////////// WORKS! ///////////////////////


// const caesar = function(text, shift) {
//     let result = '';
//     let regExp = /[A-Za-z]/g;

//     console.log('regExp: ', regExp);
    
//     //loop through each caharacter in the text
//     for (let i = 0; i < text.length; i++) {
//         let textChar = text.charCodeAt(i);

//         console.log('textChar: ', textChar);
//         console.log('text.charAt(i);: ', text.charAt(i));

//         console.log('text[i]: ', text[i], "regExp:" )

//         result += text[i] === text[i].toUpperCase() ? calCaesarChar("upper", textChar, shift)
//             : text[i] === text[i].toLowerCase() ? calCaesarChar("lower", textChar, shift)
//             : text.charAt(i);       
//             //: textChar;
//         console.log("@ encypt() 1: result= ", result)
//     };
//     console.log("@ encypt() 2: result= ", result);
//     return result; 
// }

// function calCaesarChar(str, textChar, shift) {
//     let caesarChar = str === "upper" ? (textChar - 65 + shift) % 26 + 65 : (textChar - 97 + shift) % 26 + 97;
    
//     console.log('str: ', str);
//     console.log('caesarChar : ', caesarChar );

//     return encrypt(caesarChar);
// }

// function encrypt(charCode) {
//     return String.fromCharCode(charCode);
// }

// function encryptLower(charCode, shift, encoded) {
//     return encoded += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
// }


// const caesar = function(text, shift) {   
//     //loop through each caharacter in the text
//     let result = '';

//     for (let i = 0; i < text.length; i++) { 
        
//         //get the character code of each letter
//         let c = text.charCodeAt(i);
//             console.log(
//                 'text[i]: ', text[i], 
//                     // --> B
//                 'c: ', c
//                     // --> 66
//             );

//         // handle uppercase letters
//         if (c >= 65 && c <= 90) {
//             let code = c - 65 + shift;
//             if (code < 0) {
//                 return code += 26;
//             };
//             console.log('code: ', code);
//             result += String.fromCharCode(code % 26 + 65);
//                 console.log('result: ', result);
        
//         // handle lowercase letters
//         } else if (c >= 97 && c <= 122) {
//             let code = c - 97 + shift;
//             if (code < 0) {
//                 return code += 26;
//             };
//             console.log('code: ', code);

//             result += String.fromCharCode(code % 26 + 97);
//                 console.log('result: ', result);
        
//         // its not a letter, let it through
//         } else {
//             let charAt = text.charAt(i);

//             result += text.charAt(i);
                
//             console.log(
//                 'charAt: ', charAt, 
//                 'result: ', result
//             );
//         };

//     };
//     console.log(result[7]);
//     return result;  
// }

//     // };
//     // return result;
// // 

// function encryptUpper(charCode, shift, encoded) {
//     //let result = '';
//     return encoded += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
// }

// function encryptLower(charCode, shift, encoded) {
//     //let result = '';
//     return encoded += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
// }

