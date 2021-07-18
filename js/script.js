let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

function getMoveName(randomNumber){
    if(randomNumber == 1)
      return 'kamień';
    
    else if(randomNumber == 2){
        return 'papier';
    }
    else if(randomNumber == 3){
        return 'nożyce';
    }
}
/*if(randomNumber == 1){
    computerMove = 'kamień';
}
else if(randomNumber == 2){
    computerMove = 'papier';
}
else if(randomNumber == 3){
    computerMove = 'nożyce';
}*/
printMessage('Mój ruch to: ' + argComputerMove);

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
  
let argPlayerMove = getMoveName(playerInput);
  
function getMoveName(playerInput){
    if(playerInput == 1)
      return 'kamień';
    
    else if(playerInput == 2){
        return 'papier';
    }
    else if(playerInput == 3){
        return 'nożyce';
    }
    else{
        return 'nieznana wartość'
    }
}
/*if(playerInput == '1'){
    playerMove = 'kamień';
}run watch

else if(playerInput == '2'){
    playerMove = 'papier';
}
else if(playerInput == '3'){
    playerMove = 'nożyce';
}*/
printMessage('Twój ruch to: ' + argPlayerMove);

let = displayResult(argComputerMove, argPlayerMove)

function displayResult(argComputerMove, argPlayerMove){

console.log('moves:', argComputerMove, argPlayerMove);

if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Wygrywasz!');
}
else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Wygrywasz!');
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Wygrywasz!');
}
else if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Przegrywasz!');
}
else if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
    printMessage('Przegrywasz!');
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Przegrywasz!');
}
else if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
    printMessage('Remis!');
}
else if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
    printMessage('Remis!');
}
else if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
    printMessage('Remis!');
}
else{
    printMessage('Błąd!');
}
}
