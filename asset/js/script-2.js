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
		newLi.classList.add("list-group-item");
		newLi.style.marginBlock = "8px";
		newLi.style.borderRadius = "10px";
		newLi.innerText =
			"Nome: " + pet.petName + ", Proprietario: " + pet.ownerName + ", Specie: " + pet.species + ", Breed:" + pet.breed;
		petList.appendChild(newLi);
	});
};

pets.push(new Pet("Fido", "Marco", "Cane", "Labrador"));
pets.push(new Pet("Whiskers", "Sofia", "Gatto", "Siamese"));
pets.push(new Pet("Buddy", "Luca", "Coniglio", "Olandese"));
pets.push(new Pet("Goldie", "Giulia", "Pesce", "Goldfish"));
pets.push(new Pet("Charlie", "Marco", "Pappagallo", "Cacatua"));

addButton.onclick = function () {
	let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
	pets.push(newPet);
	renderList();
	petName.value = "";
	ownerName.value = "";
	species.value = "";
	breed.value = "";
};

console.log(pets);
