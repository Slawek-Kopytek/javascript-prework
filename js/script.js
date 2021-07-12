let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let argComputerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  argComputerMove = 'kamień';
}
else if(randomNumber == 2){
    argComputerMove = 'papier';
  }
else if(randomNumber == 3){
    argComputerMove = 'nożyce';
  }*/
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);
  
let argPlayerMove = getMoveName(playerInput);
  
/*if(playerInput == '1'){
    argPlayerMove = 'kamień';
}
else if(playerInput == '2'){
    argPlayerMove = 'papier';
}
else if(playerInput == '3'){
    argPlayerMove = 'nożyce';
}*/


function displayResult(argComputerMove, argPlayerMove){
    printMessage('Komputer zagrał' + argComputerMove + ', a Ty' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Wygrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrywasz!');
    }
    else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Wygrywasz!');
    }
    else if( argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Przegrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrywasz!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    }
    else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Wygrywasz!');
    }
    else{
        printMessage('Błąd!');
    }

}

