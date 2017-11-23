    // Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

    // // // Create an array that contains the words in the sentence
// var sentence = [];
let sentence = ["hi", "my", "name", "is", "MelBell"];
    // // The addExcitement function should accept the array as the sole argument
    // function addExcitement (theWordArray) {
    //     /*
    //       Write a `for` loop that iterates over the array argument and
    //       outputs the words.
    //      */
// !!!!!!!!!!!!!!!!!!!!FIRST PART OF EXERCISE!!!!!!!!!!!!!!!!!!!!!!!!

// function addExcitement() {
//     var fullSentence = "";
//     for (var i = 0; i < sentence.length; i++) {
//             fullSentence = fullSentence + " " + sentence[i];
//                 console.log(fullSentence);
//         }
// };

    // // // Invoke the function and pass in the array
    // // addExcitement(sentence)

// addExcitement(sentence);

    // Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

    // Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.

    // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

// !!!!!!!!!!!!!!!!!!!!SECOND PART OF EXERCISE!!!!!!!!!!!!!!!!!!!!!!!!


// function addExcitement() {
//     var fullSentence = "";
//     for (var i = 0; i < sentence.length; i++) {
//         var iterValue = i + 1;
//         var remainder = iterValue % 3;
//         if (remainder === 0) {
//             fullSentence = fullSentence + " " + sentence[i] + "!";
//             console.log(fullSentence);
//             }
//         else {
//             fullSentence = fullSentence + " " + sentence[i];
//                 console.log(fullSentence);
//             }
//         }
// };
    // // // Invoke the function and pass in the array
    // // addExcitement(sentence)

// addExcitement(sentence);

    // Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

// !!!!!!!!!!!!!!!!!!!!THIRD PART OF EXERCISE!!!!!!!!!!!!!!!!!!!!!!!!

function addExcitement() {
    var fullSentence = "";
    for (var i = 0; i < sentence.length; i++) {
        var iterValue = i + 1;
        var remainder = iterValue % 3;
//         if (remainder === 0) {
//             fullSentence = fullSentence + " " + sentence[i] + "!";
//             console.log(fullSentence);
//             }
//         else {
//             fullSentence = fullSentence + " " + sentence[i];
//                 console.log(fullSentence);
//             }
//         }
// };
    // // Invoke the function and pass in the array
    // addExcitement(sentence)

addExcitement(sentence);