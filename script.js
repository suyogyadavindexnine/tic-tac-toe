function Gameboard() {
    const gameboard = [[' ',' ',' '],[' ',' ',' '],[' ',' ',' ']];   
    function setGameBoard(pos1,pos2,symbol) {
        gameboard[pos1][pos2] = symbol;
    }
    function getGameBoard() {
        return gameboard;
    }
    return {getGameBoard};
}

const gameboard = new Gameboard().getGameBoard();
let char = true;
initGame();

function initGame() {
    const table = document.querySelector("#gameTable");
    table.innerHTML = "";
    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            let td = document.createElement('td');
            let id = i.toString()+j.toString();
            td.id = id;
            td.onclick = () =>{ onPlayerClick(id); } 
            td.innerText = gameboard[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}

let iswon = false;

function onPlayerClick(id) {
    let i = parseInt(id.toString().charAt(0));
    let j = parseInt(id.toString().charAt(1));
    console.log(i);
    console.log(j);
    if (char) {
        gameboard[i][j] = 'X';
    }else{
        gameboard[i][j] = 'O';
    }
    char = !char;
    initGame();
    checkGame();
    let flag = false;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (gameboard[i][j] == ' ') {
                flag =  true;
                break;
            }
        }
    }
    if (!flag  && !iswon) {
        result.innerText = "It's A Tia Please Play Agian!!";
        restart.style.visibility = "visible";
    }
}

function checkGame() {
    
    for (let i = 0; i < 3; i++) {
        if (gameboard[i][0]=='X' && gameboard[i][1]=='X' && gameboard[i][2]=='X') {
            console.log("player X won");
            result.innerText = "Player X Won the Match";
            restart.style.visibility = "visible";
            iswon = true;
        }
        if (gameboard[i][0]=='O' && gameboard[i][1]=='O' && gameboard[i][2]=='O') {
            console.log("player O won");
            result.innerText = "Player O Won the Match";
            restart.style.visibility = "visible";
            iswon = true;
        }
    }

    for (let i = 0; i < 3; i++) {
        if (gameboard[0][i]=='X' && gameboard[1][i]=='X' && gameboard[2][i]=='X') {
            console.log("player X won");
            result.innerText = "Player X Won the Match";
            restart.style.visibility = "visible";
            iswon = true;
        }
        if (gameboard[0][i]=='O' && gameboard[1][i]=='O' && gameboard[2][i]=='O') {
            console.log("player O won");
            result.innerText = "Player O Won the Match";
            restart.style.visibility = "visible";
            iswon = true;
        }
    }

    
    if (gameboard[0][0]=='X' && gameboard[1][1]=='X' && gameboard[2][2]=='X') {
        console.log("player X won");
        result.innerText = "Player X Won the Match";
        restart.style.visibility = "visible";
        iswon = true;
    }
    if (gameboard[0][0]=='O' && gameboard[1][1]=='O' && gameboard[2][2]=='O') {
        console.log("player O won");
        result.innerText = "Player O Won the Match";
        restart.style.visibility = "visible";
        iswon = true;
    }

    if (gameboard[0][2]=='X' && gameboard[1][1]=='X' && gameboard[2][0]=='X') {
        console.log("player X won");
        result.innerText = "Player X Won the Match";
        restart.style.visibility = "visible";
        iswon = true;
    }
    if (gameboard[0][2]=='O' && gameboard[1][1]=='O' && gameboard[2][0]=='O') {
        console.log("player O won");
        result.innerText = "Player O Won the Match";
        restart.style.visibility = "visible";
        iswon = true;
    }
}

const result = document.querySelector("#resulttxt");
result.innerText = "";
const restart = document.querySelector("#restartbtn");
restart.style.visibility = "hidden";

restart.onclick = () => {
    location.reload();
}