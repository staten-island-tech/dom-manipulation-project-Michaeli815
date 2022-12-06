const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container")
}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task} <button type="button" id="btnd">-</button> </p>  `)
    DOMSelectors.input.value = "";

});

