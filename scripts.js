//button runs these functions on click
const btn = document.getElementById("random-btn");
btn.addEventListener("click", getNumberOfCards);
btn.addEventListener("click", RemoveCards);
btn.addEventListener("click", GenerateRandomNumbers);


let numberOfCards;

function getNumberOfCards() {

	numberOfCards = document.getElementsByClassName('card').length;
	return numberOfCards;

}

function GenerateRandomNumbers() {
//Creates an array of 40 unique numbers
	var arr = [];
		while(arr.length < 41){
  	  		var r = Math.floor(Math.random() * 449) + 1;
    		if(arr.indexOf(r) === -1) arr.push(r);
		}
//Loop through array and pull 40 of those numbers out
//Use the numbers to pull a card out and generate its parameters
	for (i=1; i < 41; i++) {
		let number = arr[i];
		
			let img = document.createElement("IMG");
			img.setAttribute("id", "card");
			img.setAttribute("class", "card");
			img.setAttribute("src", "cards/image("+number+").png");
			document.getElementById("card-grid").appendChild(img);
		document.getElementsByClassName("card").src = "cards/image("+number+").png";
	
	}
}

//This function removes the old cards to make room for another 40 if the button is pressed more than once
 function RemoveCards() {
	for(i=0; i < numberOfCards; i++){
		let cardsToRemove = document.getElementById("card")
			cardsToRemove.remove();
			
	}
}	



