const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),
    btnd:document.getElementById("btnd")
}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task} <button type="button" id="btnd">-</button> </p>  `)
    DOMSelectors.input.value = "";

});


// DOMSelectors.btnd.addEventListener("click", function(){
// let card = document.p
//     p.btnd.parentelement.remove();

// });


const remove = document.getElementById("btnd");
remove.forEach((btnd) => {
    btnd.addEventListener("click", function(){
        btnd.parentelemet.remove();
}
);