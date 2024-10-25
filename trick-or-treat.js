function pickCandy() {
    const candyBag1 = ["Twix", "Skittles", "Snickers", "Sour Patch Kids", "Kit-Kat"];
    const choice = Math.floor(Math.random() * 5);
    const message = `You picked ${candyBag1[choice]}. Enjoy!`

    const paragraph1 = document.getElementById("candyBag1");
    paragraph1.textContent = message;
    const candyImage = document.getElementById("candyImage");
    if(choice == 0) {
        candyImage.src = "images/twix.png";
        candyImage.alt = "Twix";
    } else if(choice == 1){
        candyImage.src = "images/skittles.png";
        candyImage.alt = "Skittles";
    } else if(choice == 2) {
        candyImage.src = "images/snickers.png";
        candyImage.alt = "Snickers";
    } else if(choice == 3) {
        candyImage.src = "images/sour.png";
        candyImage.alt = "Sour Patch Kids";
    } else if(choice == 4) {
        candyImage.src = "images/kit-kat.png";
        candyImage.alt = "Kit-Kat";
    }
}

