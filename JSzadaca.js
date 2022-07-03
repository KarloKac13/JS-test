function zadatak1(val) {
    val = document.getElementById("zadatak1").value
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((word) => word !== " ").length;
    
    alert(val)
    document.getElementById("zadatak1").value = ""
}

function zadatak2(val) {
    val = document.getElementById("zadatak2").value
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((word) => word !== " ");
    
    
    for (let [idx, letter] of val.entries()) {
        alert(`${idx + 1}. riječ: ${letter.length}`)
    }

    document.getElementById("zadatak2").value = ""
}

function zadatak3(a, b, c, d) {
    const highestVal = [a, b, c, d];
    return alert(Math.max(...highestVal))
}

function zadatak4(a, b, c, d) {
    const sortArr = [a, b, c, d];
    return alert(sortArr.sort((a,b) => a - b))
}

function zadatak5() {
    const person = {
        height: 180,
        weight: 80,
        hair: "brown",
        job : {
            position: "manager",
            firm: "mojaFirma",
            address: "adresa123"
        }
    }
    
    const json = JSON.stringify(person)
    alert(json)
}