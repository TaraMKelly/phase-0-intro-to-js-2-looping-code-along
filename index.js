
const nameArray = ["Tara", "Joe", "Claire"];
const event = "birthday";

function writeCards(nameArray, event) {
    let messageArray = [];
    for (let i=  0; i < nameArray.length; i++) {
        messageArray.push(`Thank you, ${nameArray[i]}, for the wonderful ${event} gift!`);
        debugger;
    }
    return messageArray;
}

function countDown(number) {
    let i = number;
    while (i >= 0) {
      console.log(i--);
    } 
}