const DOMSelectors = {
    btn:document.getElementById("btn"),
    input:document.querySelector(`#input`),
    box:document.getElementById("container"),

}

DOMSelectors.btn.addEventListener("click", function () {
    let task = DOMSelectors.input.value;
    DOMSelectors.box.insertAdjacentHTML("beforeend", ` <div><p id="card"> ${task}.
     <button class="btnd">-</button> </p> </div> `)
erase();
});

const tasks = {
btnd: btnd  = "#btnd",
card: card = "#card"
}
// const tasks = {
//     btnd:querySelectorAll(`#btnd`),
//     p:box.querySelectorAll(`#card`),


// }
// function carddef() {
//     const card = DOMSelectors.querySelectorAll("p")
// }


DOMSelectors.btn.addEventListener("click", function () {
    DOMSelectors.input.value = "";
});

//     let dbutton = document.DOMSelectors.btnd



function erase() {
const remove = document.querySelectorAll(".btnd");
remove.forEach((buttond) => {
    buttond.addEventListener("click", (event) => {
        event.target.parentElement.remove();
});
})};

// const element = document.getElementById('btnd');
// element.addEventListener("click", function () {
// card.remove();
// });

// tasks.btnd.addEventListener("click", function(){
//     card.element.element.remove();

// });

// btnd.addEventListener("click", function () {
//     btnd.parentelement.remove();
    
// });
