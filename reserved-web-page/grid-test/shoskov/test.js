const NEW_BRANDS = 
[
    "", 
    "",     
    "", 
    "", 
    "", 
    "The House with a Clock in Its Walls-EDITED",
    "", 
    "",     
    "", 
    "",
    "The Conjuring-EDITED",
    "",
    "",
    "Predator-EDITED", 
    "A Simple Favor-EDITED",     
    "Unbroken-EDITED", 
    "",
    "", 
    "",     
    "", 
    "",
    "", 
    "",     
    "", 
    "",
    "", 
    "",     
    "", 
    "",
    ""    
]

let varbs = document.querySelectorAll("strong");
for (let varb of varbs) {
    if (varb.textContent === "BRANDNAMES") {
        let brandValues = document.getElementsByClassName("fr-element fr-view");
        for (let i = 0; i < brandValues.length; i++) {
            brandValues[i].innerText = NEW_BRANDS[i];
        }
    }
}