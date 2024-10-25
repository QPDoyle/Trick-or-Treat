function CandyBag(c1, c2, c3, c4, c5) {
    const bagArray = [c1, c2, c3, c4, c5];
}

const createBag=()=> {
    const candyBag1 = new CandyBag("Twix", "Skittles", "Snickers", "Sour Patch Kids", "Kit-Kat");
}

function pickCandy(bag) {
    return bag[Math.floor(Math.random() * 5)];
}


