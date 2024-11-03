function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    closeNav();
}

function toggleWaterPump() {
    const toggle = document.getElementById("toggleWaterPump");
    var controlCard = document.getElementById("water-control");
    if (toggle.checked) {
        controlCard.style.backgroundColor = "#12807c";
        controlCard.querySelector("p strong").textContent = "ON";
    } else {
        controlCard.style.backgroundColor = "#C2D6C5";
        controlCard.querySelector("p strong").textContent = "OFF";
    }
}

function toggleFertilizerPump() {
    const toggle = document.getElementById("toggleFertilizerPump");
    var controlCard = document.getElementById("fertilizer-control");
    if (toggle.checked) {
        controlCard.style.backgroundColor = "#12807c";
        controlCard.querySelector("p strong").textContent = "ON";
    } else {
        controlCard.style.backgroundColor = "#C2D6C5";
        controlCard.querySelector("p strong").textContent = "OFF";
    }
}

function toggleRoof() {
    const toggle = document.getElementById("toggleRoof");
    var controlCard = document.getElementById("roof-control");
    if (toggle.checked) {
        controlCard.style.backgroundColor = "#12807c";
        controlCard.querySelector("p strong").textContent = "OPEN";
    } else {
        controlCard.style.backgroundColor = "#C2D6C5";
        controlCard.querySelector("p strong").textContent = "CLOSED";
    }
}
