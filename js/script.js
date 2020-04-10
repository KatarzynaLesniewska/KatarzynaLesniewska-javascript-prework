function playGame(playerInput) {
    clearMessages();

    function getMoveName(argMoveId) {
        console.log('wywołanie funkcji getMoveId - sprawdzenie działania');
        console.log('argumenty:' + argMoveId);
        console.log('argumenty:', argMoveId);

        if (argMoveId == 1) {
            return 'kamień';
        } else if (argMoveId == 2) {
            return 'papier';
        } else if (argMoveId == 3) {
            return 'nożyce';
        } else { 
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
    
    } 

    function displayResult(argComputerMove, argPlayerMove) {
        console.log('moves:', argComputerMove, argPlayerMove);
        console.log('argumenty: ' + argComputerMove + ',' + argPlayerMove);
        printMessage('Twój ruch to: ' + argPlayerMove); 

        if (argPlayerMove == argComputerMove) {
            printMessage('REMIS!');
        } else if (
            (argPlayerMove == 'kamien' && argComputerMove == 'nożyce')
            ||
            (argPlayerMove == 'papier' && argComputerMove == 'kamien')
            ||
            (argPlayerMove == 'nożyce' && argComputerMove == 'papier')
        ) {
            console.log('wywołanie funkcji if - sprawdzenie działania');
            printMessage('Wygrałeś!');
        } else {
            printMessage('Przegrywasz!');
        }
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Wylosowana liczba to: ', randomNumber);

    let computerMove = getMoveName(randomNumber);
    
    printMessage('Mój ruch to: ' + computerMove);

    let playerMove = getMoveName(playerInput);

    console.log(getMoveName('2')); // czy to tu ma być ? ; 

    console.log('Gracz wpisał: ' + playerMove);
    
    displayResult(argComputerMove, argPlayerMove)

    document.getElementById('play-rock').addEventListener('click', function () {
        playGame(1);
    });

    document.getElementById('play-paper').addEventListener('click', function () {
        playGame(2);
    });

    document.getElementById('play-scissors').addEventListener('click', function () {
        playGame(3);
    });

}

// playGame(3);