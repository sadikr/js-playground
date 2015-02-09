/**
 * Created by sadikr on 1/26/2015.
 */

/*
* Problem : 1
* Consider the following pattern:
* A → D M → P X → A
* a → d m → p x → a
*
* Now, write a program to solve the following message.
*
* Something meaningful
*
* */


/**
 *
 * @param charCode
 * @returns {String}
 */
function getStringOf(charCode){
    return String.fromCharCode(charCode);
}

/**
 *
 * @param str
 * @returns {String}
 */
function encrypt(str){
    var min = [65, 97],
        max = [90, 122],
        charCode,
        resultStr = new String('');
    for( var i=0; i< str.length; i++){
        charCode = str.charCodeAt(i);
        if( charCode >= min[0] && charCode <= max[0] ){ // upper case
            resultStr += ( charCode + 3 <= max[0] )
                ? getStringOf( charCode + 3 )
                : getStringOf(  ( (charCode + 2) - max[0] ) + min[0] );

        }else if( charCode >= min[1] && charCode <= max[1] ){ // lower case

            resultStr += ( charCode + 3 <= max[1] )
                ? getStringOf( charCode + 3 )
                : getStringOf(  ( (charCode + 2) - max[1] ) + min[1] );

        }else{ // others
            resultStr += getStringOf(charCode);
        }
    }
    return resultStr;
}
var pattern = "Something meaningful";
console.log( encrypt(pattern) );

/**
 * Problem : 2
 * Use the following paragraphs (in italics below) as input to the program you wrote for Question 5.
 * It should output a meaningful question. Write a program to solve that question.

    Zulwh d surjudp (lq Sbwkrq, MdydVfulsw ru Uxeb) wr srsxodwh dqg wkhq vruw d
    udqgrpob glvwulexwhg olvw ri 1 ploolrq lqwhjhuv, hdfk lqwhjhu kdylqj d ydoxh >= 1 dqg
    <= 100.

    Brxu surjudp vkrxog fduhixoob frqvlghu wkh lqsxw dqg frph xs zlwk wkh prvw hiilflhqw
    vruwlqj vroxwlrq brx fdq wklqn ri. Surylgh wkh vsdfh dqg wlph frpsohalwb ri brxu
    dojrulwkp
**/

function decrypt(str){

}