// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var hobby = document.getElementById("hobby")
var asteptari = document.getElementById("asteptari")
var educatie = document.getElementById("educatie")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")


// Add event listener
button.addEventListener("click", altaViata) 
an.addEventListener("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear() 

// Define function
function altaViata() {
	nume.innerHTML = "Nume: GOOFY"
	prenume.innerHTML = "Prenume: AHHHHH"
	hobby.style.color = "purple"
	
	educatie.innerHTML = "Experiente:"
	asteptari.innerHTML = "<ul><li>Workshops</li><li>Internship</li></ul>"
	
	img.src = "images/oiiai.jpg"
	img.style.opacity = "80%"
	img.style.margin = "20px"
	img.style.width = "500px"
	img.style.border = "10px solid purple"
	
	body.style.background = "linear-gradient(90deg,rgba(153, 253, 255, 1) 0%, rgba(56, 252, 255, 1) 50%, rgba(69, 143, 255, 1) 100%)"
}

function displayAge() {
	an.innerHTML = year - an.innerHTML

}