// Write a function named flightHandlerFunction that will remove the disabled class on the corresponding <section id="flight"> (section, not button) and replace it with a class of enabled.

document.querySelector("#activate-flight").addEventListener("click", () => {
    const flightSection = document.querySelector('#flight');
    flightSection.classList.toggle("enabled");
});

//Activate Mindreading button
document.querySelector("#activate-mindreading").addEventListener("click", () => {
    const mindreading = document.querySelector('#mindreading');
    mindreading.classList.toggle("enabled");
});

//Activate xray button
document.querySelector("#activate-xray").addEventListener("click", () => {
    const xray = document.querySelector('#xray');
    xray.classList.toggle("enabled");
});

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





