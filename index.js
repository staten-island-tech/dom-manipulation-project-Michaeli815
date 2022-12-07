const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),
    button:document.getElementById("btnd")
}

DOMSelectors.btn.addEventListener("click", function (s) {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task} <button type="button" id="btnd">-</button> </p>  `)
    DOMSelectors.input.value = "";

});
const card = btn.p

btnd.addEventListener("click", function(card){
    let deleteb = card.deleteb
    deleteb.element.element.remove();

}

);