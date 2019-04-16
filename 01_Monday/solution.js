function evenOrOdd() {
    var number = document.getElementById("number").value;

    // while (number >= 0) {
    for (var i of Array(number).keys()) {
        console.log(i)\
        console.log(i)
        if (i % 2 == 1) {
            console.log(`${i} is odd`);
            // break;
        } else if (i - 1 % 2 == 0) {
            console.log(`${i} is even`);
            // break;
        }
        i += 1;
    }
}

function listenForNumber() {
    var button = document.getElementById("special-button");
    button.addEventListener("click", evenOrOdd);
}

listenForNumber();
