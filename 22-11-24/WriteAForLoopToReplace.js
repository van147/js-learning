/* Write a for loop to replace all spaces in a string with hyphens (-).
    Example Input:
    let sentence = "I am learning JavaScript";
    Expected Output: “I-am-learning-JavaScript”
 */

    let  sentence = "I am learning JavaScript";
    let newString =sentence.split('')
    for (let i = 0; i < newString.length; i++) {
        if(newString[i]=== " "){
            newString[i]= "-"
        }   
    }
    console.log (sentence);