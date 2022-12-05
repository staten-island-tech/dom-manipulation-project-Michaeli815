const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container")
}

DOMSelectors.btn.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input} </p>`);

    DOMSelectors.input.value = "";

});