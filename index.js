const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container")
}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task} </p>`);
    DOMSelectors.input.value = "";

});
const qsa = (els) => document.querySelectorall(els);
const alltasks = qsa(`.avenger`);
console.log(alltasks);

let 