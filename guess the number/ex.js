let answer='yes';
while(answer!='no') {
    const x = Math.floor(Math.random() * 10);
    let difficulty = prompt("entez le niveau de difficulté(1,2,3)")
    if (difficulty == 1) {
        n = 5;
    } else if (difficulty == 2) {
        n = 3;
    } else {
        n = 1;
    }
    let guessedit = 0;
    while (n > 0) {
        n--;
        let guess = prompt("give your guess")
        if (guess == x) {
            alert("you won!!")
            n = 0;
            guessedit++;
        }
    }
    if (guessedit == 0) {
        alert('you lost :(');
    }
    answer=prompt("do you want to play again?");
}

