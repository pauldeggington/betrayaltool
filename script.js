function onCharacterChange() {
    var select = document.querySelector("#characterSelect")
    var characterNameValue = select.value
    var selected = select.options[select.selectedIndex];
    
    var imgPath = selected.getAttribute("img")
    
    var characterPicture = document.querySelector("#characterPicture1")

    characterPicture.src = imgPath;
    var allCatSlide = document.querySelectorAll(".catslideContainer");
    var defaultsPath = selected.getAttribute("defaults");
    var paths = defaultsPath.split(",")
    for(var i = 0;i < paths.length;i++) {
        var path = paths[i]
        var catSlide = allCatSlide[i]
        var values = catSlide.querySelectorAll(".Values");
        values.forEach(cValue=>{
            if(cValue.innerHTML==path){
                // if this is the default path
                cValue.classList.add("defaultsAttr");
            } else {
                // if this is not the default path
                cValue.classList.remove("defaultsAttr");
            }
        })
    }
}
// Do certain things only after all elements have been loaded
window.addEventListener('DOMContentLoaded', (event) => {
	// Everything inside these curly brackets will run only once the page has been loaded.
  
  var values = document.querySelectorAll(".catslideContainer > .Values");
  
  values.forEach(function(elem) {
    elem.addEventListener("click", event => onValueClicked(elem))
  })
  onCharacterChange();
})

function onValueClicked(element) {
	var parent = element.parentElement;
  
  var values = parent.querySelectorAll(".Values");
  
  // Do this to the clicked value
  // PUT ON-CLICK STUFF HERE
    element.classList.add("valuesSelected");

  values.forEach(function(other) {
  	if (other != element) {
    	// Do this  to all elements that weren't clicked on
      // PUT ON NOT-CLICKED STUFF HERE
        other.classList.remove("valuesSelected");

    }
  })
}



function topNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}




