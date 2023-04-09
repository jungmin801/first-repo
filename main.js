// 랜덤번호 지정
// 유저가 숫자를 입력한다. 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤번호 < 유저번호 Down!!
// 랜덤번호 > 유저번호 Up!!
// reset버튼을 누르면 게임이 초기화
// 기회는 5번. 다 쓰면 게임이 끝난다. 더이상 추측 불가, 버튼이 disable
// 유저가 1~100범위 밖 숫자를 입력하면 알려준다. 기회가 줄지 않는다.
// 이미 입력한 숫자를 또 입력하면 알려준다, 기회가 줄지 않는다.


let computerNum = 0
let resultArea = document.getElementById("result-area")
let userInput = document.getElementById("user-input")
let playButton = document.getElementById("play-button")
let resetButton = document.getElementById("reset-button")
let chancesArea = document.getElementById("chances-area")
let tryAgain = document.getElementById("try-again")
let chances = 5
let gameover = false
let history=[]


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", focusInput)


// 랜덤 숫자 뽑기
function pickrandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log(computerNum);
}
// 게임 진행
function play(){
    const userValue = userInput.value;

    if (userValue < 1 || userValue > 100){
        resultArea.textContent = "1~100사이의 숫자를 입력하세요"  
        return;
    }

    if (history.includes(userValue)){
        resultArea.textContent = "이미 입력한 값입니다."  
        return; 
    }

    chances = chances - 1 ;
    chancesArea.textContent = `남은 기회: ${chances}번`;

    history.push(userValue)

    if (userValue < computerNum) {
        resultArea.textContent = "Up!!"  ;
    } else if (userValue > computerNum) {
        resultArea.textContent = "Down!!"
    } else if (userValue == computerNum) {
        resultArea.textContent = "정답입니다!"
        playButton.disabled = true;
        resetButton.textContent = "한판 더?"
    };

    if (chances == 0){
        gameover = true;
    }

    if (gameover == true){
        playButton.disabled = true;
        resultArea.textContent = `정답은? ${computerNum}`
    }
}


// 다시하기 버튼 클릭시
function reset(){
    //user input 창이 비워짐
    //result area가 기본값으로
    //chances가 5로
    //playbutton이 클릭 가능
    //새로운 번호가 주어짐
    //history가 초기화

    pickrandomNum();
    userInput.value = "";
    resultArea.textContent = "결과는?";
    chances = 5;
    chancesArea.textContent = "남은 기회: 5번";
    tryAgain.textContent = "";
    history = [];
    resetButton.textContent = "다시하기"
}

function focusInput(){
    userInput.value = "";
}

pickrandomNum()
