// let controls = {
//     "Forwards": [38, "ArrowUp"],
//     "Backwards": [40, "ArrowDown"],
//     "Left": [37, "ArrowLeft"],
//     "Right": [39, "ArrowRight"]
// }

// document.getElementById("Forwards").children[1].onclick = () => { changeControls("Forwards") };
// document.getElementById("Backwards").children[1].onclick = () => { changeControls("Backwards") };
// document.getElementById("Left").children[1].onclick = () => { changeControls("Left") };
// document.getElementById("Right").children[1].onclick = () => { changeControls("Right") };


// function changeControls(str) {
//     let touch = document.getElementById(str);
//     touch.children[1].innerHTML = "Press new control";
//     document.removeEventListener('keydown', eventListener, true);

//     function handleKeyDown(event) {
//         document.addEventListener('keydown', eventListener, true);
//         console.log(event.key);
//         controls[str][0] = event.keyCode;
//         controls[str][1] = event.key;
//         touch.children[0].innerHTML = "Walk " + str + " : " + controls[str][1];
//         touch.children[1].innerHTML = "Change";
//         document.removeEventListener("keydown", handleKeyDown, true);
//     }

//     document.addEventListener("keydown", handleKeyDown, true);
// }
let controls = {
    "Forwards": [38, "ArrowUp"],
    "Backwards": [40, "ArrowDown"],
    "Left": [37, "ArrowLeft"],
    "Right": [39, "ArrowRight"]
};

document.getElementById("Forwards").children[1].onclick = () => { changeControls("Forwards") };
document.getElementById("Backwards").children[1].onclick = () => { changeControls("Backwards") };
document.getElementById("Left").children[1].onclick = () => { changeControls("Left") };
document.getElementById("Right").children[1].onclick = () => { changeControls("Right") };

function changeControls(str) {
    let touch = document.getElementById(str);
    touch.children[1].innerHTML = "Press new control";
    document.removeEventListener('keydown', handleKeyDown, true);

    function handleKeyDown(event) {
        document.addEventListener('keydown', handleKeyDown, true);
        controls[str][0] = event.keyCode;
        controls[str][1] = event.key;
        touch.children[0].innerHTML = "Walk " + str + " : " + controls[str][1];
        touch.children[1].innerHTML = "Change";
        document.removeEventListener("keydown", handleKeyDown, true);
        // Sauvegarde des touches
        localStorage.setItem('controls', JSON.stringify(controls));
    }

    document.addEventListener("keydown", handleKeyDown, true);
}
