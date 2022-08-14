'use strict';

function zadatak1(val) {
    val = document.getElementById("zadatak1").value
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((word) => word !== "");
    
    alert(val.length);
    document.getElementById("zadatak1").value = ""
}

function zadatak2(val) {
    val = document.getElementById("zadatak2").value
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .filter((word) => word !== " ");

    let input = "";
    let result = "";
    let idx = 1;

    for (let i of val) {
        for (let j = 0; j <= i.length; j++) {
          if (j === i.length - 1) {
            j++;
            input += j;
          }
        }
    }
    
    for (let letter of input) {
        result += `${idx++}. riječ: ${letter} \n`;
    }

    alert(result);
    

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

var generatedPersons = [];

// var persons = {};

const hairColors = ["brown", "blond", "black"];
const jobPositions = ["worker", "manager", "director"];
const firms = ["firma1", "firma2", "firma3"];
const addresses = [
  "adresa 123",
  "ulica pere perica 77",
  "trg zrtava programiranja 2",
];

function zadatak6() {
    const height = Math.floor(Math.random() * (51) + 150);
    const weight = Math.floor(Math.random() * (101) + 50);
    const hairIdx = Math.floor(Math.random() * hairColors.length);
    const jobIdx = Math.floor(Math.random() * jobPositions.length);
    const firmIdx = Math.floor(Math.random() * firms.length);
    const addressIdx = Math.floor(Math.random() * addresses.length);

    generatedPersons.push({
      height: height,
      weight: weight,
      hair: hairColors[hairIdx],
      job: {
        position: jobPositions[jobIdx],
        firm: firms[firmIdx],
        address: addresses[addressIdx],
      },
    });

    console.log(generatedPersons);
}

function personCount() {
    alert(
      "Broj osoba u generatedPersons array-u je " + generatedPersons.length
    );
}

function lastPerson() {
    alert(JSON.stringify(generatedPersons.slice(-1)))
}

var tallest = null;
var arr;

function tallestPerson() {

  tallest = generatedPersons[0].height;

  for (var i of generatedPersons) {
    if (tallest <= i.height) {
      tallest = i.height;
      if (tallest === i.height) {
        arr = i
      }
  
    }
  }
  
  alert(JSON.stringify(arr));
}

function allPersons() {
    alert(JSON.stringify(generatedPersons));
}