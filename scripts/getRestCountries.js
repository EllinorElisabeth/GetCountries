import restCountries from "/scripts/restCountries.js";

const inputField = document.querySelector("#form-input");
const showAllCountriesBtn = document.querySelector("#show-all-countries-btn");
const searchByNameBtn = document.querySelector("#search-by-name-btn");
const searchByRegionBtn = document.querySelector("#search-by-region-btn");
const outputSection = document.querySelector("#output");

const showAllCountries = async () => {
    console.log("Viser alle land");
    const countries = await restCountries.getAllCountries();
    showCountries(countries);
}

const showCountriesByName = async () => {
    const userInput = inputField.value;
    const countries = await restCountries.getCountriesByName(userInput);
    showCountries(countries);
}

const showCountriesByRegion = async () => {
    const userInput = inputField.value;
    const countries = await restCountries.getCountriesByRegion(userInput);
    showCountries(countries);
}

const showCountries = (countries) => {
 
    let outputText = "";

    countries.forEach(country => {
        
        outputText += `

            <article>
                <h3>${country.name.common}</h3>
                
            </article>

        `;
        
    });
    outputSection.innerHTML = outputText;
}

/*
(() => {
    searchByNameBtn.addEventListener("click", showCountriesByName);
    showAllCountriesBtn.addEventListener("click", showAllCountries);
    searchByRegionBtn.addEventListener("click", showCountriesByRegion);
    
})();
*/

// Check that the buttons trigger correctly
(() => {
    searchByNameBtn.addEventListener("click", () => {
        console.log("Søker på navn...");
        showCountriesByName();
    });
    
    showAllCountriesBtn.addEventListener("click", () => {
        console.log("Viser alle land...");
        showAllCountries();
    });

    searchByRegionBtn.addEventListener("click", () => {
        console.log("Søker på kontinent...");
        showCountriesByRegion();
    });
})();
