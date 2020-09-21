 let input = document.querySelector(".block-form-input");
 let btn = document.querySelector(".block-input");
 let blockList = document.querySelector(".block-list");

function createElements(text){
let newElem = document.createElement("p");
let delateSpan = document.createElement("span");

delateSpan.className = "block-list-delate";
delateSpan.textContent = "delate";


newElem.className = "block-list-elem"
newElem.textContent = text;;
newElem.appendChild(delateSpan);

delateSpan.addEventListener("click", function(){
 blockList.removeChild(newElem);
});

blockList.appendChild(newElem);
}
 btn.addEventListener("click", function(e) {
 	e.preventDefault();
 	if(!(input.value === "enter: " || input.value === "")){
	createElements(input.value);
	input.value = "enter: ";
 	}
 });
input.addEventListener("focus", function(){
	input.value="";
});
input.addEventListener("blur", function(){
	if(input.value ==="")
		input.value = "enter: ";
});