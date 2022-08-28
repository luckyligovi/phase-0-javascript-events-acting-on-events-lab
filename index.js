// Your code here
const leftNumbers = dodger.style.left.replace("px", "");
const left = parseInt(leftNumbers, 10);

function moveDodgerLeft(){
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
};

function moveDodgerRight() {
    if (left > 0) {
        dodger.style.left = `${left + 1}px`;
    }
}