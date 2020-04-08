function playGame(playerInput){

    clearMessages()

    playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');


    function getMoveName(argMoveId){

        console.log('tekst do spr wyświetlenia??')
        console.log('argumenty: + argMoveId');

        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else(argMoveId == 3){
            return 'nożyce';
        }
    }
    
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    /*
    if(randomNumber == 1){
        computerMove = 'kamień';
    } else if(randomNumber == 2){
        computerMove = 'papier';
    } else(randomNumber == 3){
        computerMove = 'nożyce';
    }
    */

    printMessage('Mój ruch to: ' + computerMove); 

    /* let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.'); */

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(randomNumber);

    /*
    if(playerInput == '1'){
        playerMove = 'kamień';
    } else if(playerInput == '2'){
        playerMove = 'papier';
    } else(playerInput == '3'){
        playerMove = 'nożyce';
    }
    */

    function displayResult(argComputerMove,argPlayerMove){ 

        console.log('moves:', argComputerMove, argPlayerMove);

        console.log('argumenty: ' + argComputerMove + ', ' + argPlayerMove);

        printMessage('Twój ruch to: ' + argPlayerMove); 

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
            printMessage('Przegrałeś :( ');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
            printMessage('Remis!');
        } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
            printMessage('X błąd!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'kaimeń'){
            printMessage('Przegrałeś :( ');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
            printMessage('Remis!');
        } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
            printMessage('X błąd!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
            printMessage('Ty wygrywasz!');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
            printMessage('Przegrałeś :( ');
        } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
            printMessage('Remis!');
        } else( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
            printMessage('X błąd!');
        } 

    }

    let displayResult

    console.log(getMoveName('2'));

    /* 
    function displayResult(argComputerMove, argPlayerMove){
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

        if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
            printMessage('Ty wygrywasz!');
        } else {
            printMessage('Tym razem przegrywasz :(');
        }
    }
    */ 

    /* 
    printMessage('Twój ruch to: ' + argPlayerMove); 

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Przegrałeś :( ');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
    } else if( argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch'){
        printMessage('X błąd!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'kaimeń'){
        printMessage('Przegrałeś :( ');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nieznany ruch'){
        printMessage('X błąd!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Przegrałeś :( ');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
    } else( argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'){
        printMessage('X błąd!');
    } 
    */ 

   document.getElementById('play-rock').addEventListener('click', function(){
        printMessage(playGame(1),'Guzik Kamień został kliknięty');
    });

  document.getElementById('play-paper').addEventListener('click', function(){
        printMessage(playGame(2),'Guzik Papier został kliknięty');
    });

  document.getElementById('play-scissors').addEventListener('click', function(){
        printMessage(playGame(3),'Guzik Nożyce został kliknięty');
    });

} 

/* playGame(3); */