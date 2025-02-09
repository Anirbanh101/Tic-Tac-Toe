let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //player X , player O
// to store the all possible winning patterns in array
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 6, 8]
];
// for the reset game
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
// print the inner text in the boxes value to "O" and "X"
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        //console.log("box was clicked");
        if(turnO) {  // if(turnO === true)
            // player O
            box.innerText = "O";
            turnO = false;
        } else {
            // player X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; // for not changnig the vlue of box more then one time.
        checkWinner();
    });
});
// all boxes are disabled if one is winner
const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};
// all boxes are enabled if the new game is start
const enableBoxes = () => {
    for(let box of boxes) {
        box.enabled = true;
        box.innerText = "";
    }
};
// show the winner
const showWinner = (winner) => {
    msg.innerText = `Congratulations, winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};
// checking the conditon for all winning patterns
const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if(pos1Val === pos2Val && pos2Val === pos3Val) {
                //console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);