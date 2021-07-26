function playGame(playerInput) {
     
    clearMessages();

    let randomNumber = Math.floor(Math.random() * 3 + 1); 
    console.log('Wylosowana liczba to: ' + randomNumber);

    let argComputerMove = getMoveName(randomNumber);

    function getMoveName(randomNumber) {
    
        if (randomNumber == 1) {
            return 'kamień';
        } else if (randomNumber == 2) {
            return 'papier';
        } else if (randomNumber == 3) {
            return 'nożyce';
        }
    }
    printMessage('Komputer zagrał: ' + randomNumber);
  
    let argPlayerMove = getMoveName(playerInput);
    
    let = displayResult(argComputerMove, argPlayerMove);

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
    

        if(argComputerMove == 'kamień' && argPlayerMove == 'papier') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
            printMessage('Wygrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
            printMessage('Przegrywasz!');
        } else if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
            printMessage('Remis!');
        } else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
            printMessage('Remis!');
        } else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
            printMessage('Remis!');
        } else {
            printMessage('Błąd!');
        }
    }
}
document.getElementById('play-rock').addEventListener('click', function () {
    playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});
