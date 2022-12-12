/*
    Step by step making mint chocolate candy
        Buy some milk chocolate
        Add some mint flavoring
        Combine the chocolate and mint
        Bake the mixture
        Break the hardened sheet into 6 pieces
        🍫 🍫 🍫 🍫 🍫 🍫 Enjoy!
    A function for each
    some have if statements, that check a property of the chocolate object
*/

const buyChocolate = () => {
    const chocolateObject = {type: "Milk Chocolate"}

    return chocolateObject;
}

const addFlavoring = (chocolate) => {
    chocolate.flavor = "Mint";

    return chocolate;
}

const makeBarkMixture = (chocolate) => {
    if (chocolate.flavor === "Mint") {
        chocolate.mixed = true;
    } else {
        chocolate.mixed = false;
    }

    return chocolate;
}

const bakeCandy = (chocolate) => {
    if (chocolate.mixed === true) {
        chocolate.baked = true;
    } else {
        chocolate.baked = false;
    }

    return chocolate;
}

const breakBark = (chocolate) => {
    if (chocolate.baked === true) {
        const barkArr = ['Mint Chocolate Bark', 'Mint Chocolate Bark', 'Mint Chocolate Bark', 'Mint Chocolate Bark', 'Mint Chocolate Bark', 'Mint Chocolate Bark']
        
        return barkArr;
    }
}

boughtChocolate = buyChocolate();
chocolateWithFlavoring = addFlavoring(boughtChocolate);
mixedBark = makeBarkMixture(chocolateWithFlavoring);
bakedBark = bakeCandy(mixedBark);
barkCandy = breakBark(bakedBark);

console.log(barkCandy);