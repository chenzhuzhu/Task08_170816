'use strict';
const digit_code=require('./code_digit.js')
function transToCode(input){




}
function codeTransArray(codeString){
    let result=[];
    for(let i=0;i<codeString.length;i+=5){
        let eachCode = codeString.substr(i,5)
        result.push(eachCode)
    }
    return result

}
function codeArrayToNum(collection){
    let result ='';
    for(let item of collection){
        let transCode = digit_code.codeDigit[`${item}`]
        result+=transCode.toString()
    }
    return result
}
function transFormat(num){

    if(num.length==9){
        let preNumber = num.substr(0,5)
        let postNUmber = num.substr(5,4)
        return preNumber+'-'+postNUmber
    }else{
        return num
    }
}
function transToDigit(input){
    let abandonCheckDigit= input.substring(1,input.length-1)
    let realCode = abandonCheckDigit.substring(0,abandonCheckDigit.length-5)
    let digitArray=codeTransArray(realCode)
    let digit = codeArrayToNum(digitArray)
    let formatresult = transFormat(digit)
    return formatresult
}

function getDigit(input){
    if (input.includes('-')){
        return input.substr(0,5)+input.substr(6,4)
    }
    return input
}

function digitArrayToCode(collection){
    let result ='';
    for(let item of collection){
        let transCode = digit_code.digitCode[`${item}`]
        result+=transCode.toString()
    }

    return '|'+result+'|'

}
function addCheckDigit(digitString){
    let sum=0
    for(let item of digitString){
        sum+=parseInt(item,10)
    }
    if(sum%10==0){
        return digitString+'0'
    }
    return digitString+(sum%10).toString()

}

function transToCode(input){
    let getRealDigit =getDigit(input)
    let checkDigit=addCheckDigit(getRealDigit)
    let transCodeResult =digitArrayToCode(checkDigit)
    return transCodeResult

}

function main(input){
    if(input.length<=10){
        return transToCode(input);
    }else{
        return transToDigit(input);
    }



}

module.exports = main;
