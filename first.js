let addbtn = document.getElementById("addbtn");
let colourbox = document.getElementById("colourbox");
const para = document.createElement("p")
document.body.append(para)
para.style.fontSize = "30px"
para.style.color = "white"
para.innerHTML = "Colour:"
addbtn.addEventListener("click", function () {
    let randomcolour = "#" + Math.floor(Math.random() * 16777215).toString(16);
    colourbox.style.backgroundColor = randomcolour;

    para.innerHTML = `Random-Colour-Name: ${randomcolour}`

});

