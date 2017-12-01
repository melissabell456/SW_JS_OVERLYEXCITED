var sentence = ["How", "much", "wood", "would", "a", "woodchuck", "chuck", "if", "a", "woodchuck", "could", "chuck", "wood"];

function addExcitement (theWordArray) {
    let mySentence = " ";
    for (i=0; i < sentence.length; i++) {
        if ((i+1) % 3 === 0) {
            let exclamation = i / 3;
            mySentence = mySentence + " " + sentence[i] + "!".repeat(exclamation); 
        }
        else {
            mySentence = mySentence + " " + sentence[i];
        };
    console.log(mySentence);
    }
}

addExcitement(sentence)

// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.