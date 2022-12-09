const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),
    btnd:document.querySelectorAll("#btnd")
}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task} <button type="button" id="btnd">-</button> </p>  `)
    DOMSelectors.input.value = "";
});

    let dbutton = document.DOMSelectors.btnd

dbutton.addEventListener("click", function(del){
    let dbutton = del.target;
    dbutton.parentelement.remove();

});


// const remove = document.getElementById("container");
// remove.forEach((container) => {
//     btnd.addEventListener("click", function(){
//         btnd.parentelemet.remove();
// }
// );