let petName = document.getElementById("petName");
let ownerName = document.getElementById("ownerName");
let species = document.getElementById("species");
let breed = document.getElementById("breed");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

class Pet {
	constructor(petName, ownerName, species, breed) {
		this.petName = petName;
		this.ownerName = ownerName;
		this.species = species;
		this.breed = breed;
	}

	checkSameOwner(anotherPet) {
		if (this.ownerName === anotherPet.ownerName) {
			return true;
		} else {
			return false;
		}
	}
}

const renderList = function () {
	petList.innerHTML = "";
	pets.forEach((pet) => {
		const newLi = document.createElement("li");
		newLi.innerText = "Nome: " + pet.petName + ", proprietario: " + pet.ownerName;
		petList.appendChild(newLi);
	});
};

addButton.onclick = function () {
	let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
	pets.push(newPet);
	renderList();
	petName.value = "";
	ownerName.value = "";
	species.value = "";
	breed.value = "";
};
