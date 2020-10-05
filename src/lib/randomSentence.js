import {words} from './words'
//Returns a string with random words 
const GetRandomString = (length) => {
    let str= ""
    while (length--) { 
        str += " " + words[Math.floor(Math.random() * words.length)]  
    }
    //Removing the first space from the string 
    str = str.substring(1);
    return str
}
export  {GetRandomString};

