const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),
}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${task}.
     <button id="btnd">-</button> </p>  `)

});

// function carddef() {
//     const card = DOMSelectors.querySelectorAll("p")
// }


DOMSelectors.btn.addEventListener("click", function () {
    DOMSelectors.input.value = "";
});

//     let dbutton = document.DOMSelectors.btnd

// dbutton.addEventListener("click", function(del){
//     let dbutton = del.target;
//     dbutton.parentelement.remove();

// });


const remove = Array.from(document.querySelectorAll(`btnd`));
const card = DOMSelectors.querySelectorAll("p")
remove.forEach((buttond) => {
    buttond.addEventListener("click", function(){
        p.remove();
});
})
