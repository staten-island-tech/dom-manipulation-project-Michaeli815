const DOMSelectors = {
    btn:document.getElementById("btn"),
    card:document.getElementById("card"),
    input:document.getElementById("input"),
    box:document.getElementById("container")
}

DOMSelectors.btn.addEventListener("click", function () {
    let input = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("afterend", `<p> ${input} </p>`);

});