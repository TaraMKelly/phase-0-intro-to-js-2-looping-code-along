// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//   }

//   return gifts;
// }

// wrapGifts(gifts); 

const nameArray = ["Tara", "Joe", "Claire"];
const event = "birthday";

function writeCards(nameArray, event) {
    let messageArray = [];
    for (let i=0; i < nameArray.length; i++) {
        messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
    }
    return messageArray;
}

console.log(writeCards(nameArray, event));


function countDown(number) {
    let i = number;
    while (i >= 0) {
    console.log(i)
    i--;
    } 
}
countDown(10);
