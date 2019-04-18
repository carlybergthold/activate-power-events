
//event listener to toggle powers on the first three buttons
document.addEventListener('click', () => {

    let section = event.target.id.split("-");
    let id = section[1];
    const flightSection = document.querySelector(`#${id}`).classList.toggle("enabled");;

})


//Activate All button
document.querySelector("#activate-all").addEventListener("click", () => {
    const activateAll = document.querySelectorAll('.power');
    activateAll.forEach(element => {
        element.classList.add("enabled");
    });
});

//Deactivate all button
document.querySelector("#deactivate-all").addEventListener("click", () => {
    const deactivateAll = document.querySelectorAll('.power');
    deactivateAll.forEach(element => {
        element.classList.remove("enabled");
    });
});


// Original code for the first three buttons

// document.querySelector("#activate-flight").addEventListener("click", () => {
//     const flightSection = document.querySelector('#flight');
//     flightSection.classList.toggle("enabled");
// });

// //Activate Mindreading button
// document.querySelector("#activate-mindreading").addEventListener("click", () => {
//     const mindreading = document.querySelector('#mindreading');
//     mindreading.classList.toggle("enabled");
// });

// //Activate xray button
// document.querySelector("#activate-xray").addEventListener("click", () => {
//     const xray = document.querySelector('#xray');
//     xray.classList.toggle("enabled");
// });





