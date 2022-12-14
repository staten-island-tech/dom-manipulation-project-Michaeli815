const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),

}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", `<p id="card"> ${task}.
     <button id="btnd">-</button> </p>  `)

});

const tasks = {
btnd: btnd  = "#btnd",
const: card = "#card"
}
// const tasks = {
//     btnd:querySelector(`#btnd`),
//     p:box.querySelector(`#card`),


// }
// function carddef() {
//     const card = DOMSelectors.querySelectorAll("p")
// }


DOMSelectors.btn.addEventListener("click", function () {
    DOMSelectors.input.value = "";
});

//     let dbutton = document.DOMSelectors.btnd




// const remove = Array.from(document.querySelector("#btnd","#card"));
// remove.forEach((buttond) => {
//     buttond.addEventListener("click", function(){
//         card.remove();
// });
// })

tasks.btnd.addEventListener(`click`, function(e){
    let btnd = del.target;
    btnd.parentelement.parentelement.remove();

});