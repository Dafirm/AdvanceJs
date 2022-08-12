// Your code here
document.addEventListener("DOMContentLoaded", () => {
  const selectDrop = document.getElementById("countries");
  const searchButton = document.getElementById("search__button");
  const countryInput = document.getElementById("country__input");
  const searchLangButton = document.getElementById("searchLang__button");
  const countryLangInput = document.getElementById("countryLang__input");
  const searchBorderButton = document.getElementById("searchBorder__button");
  const countryBorderInput = document.getElementById("countryBorder__input");
  const searchPopButton = document.getElementById("searchPop__button");
  const countryPopInput = document.getElementById("countryPop__input");

  // method 1 (list of countries dropdown)

  fetch("https://restcountries.com/v3.1/all")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let nameResult = "";
      data.map((country) => {
        nameResult += `<option value = "${country.name.common}">${country.name.common}</option>`;
      });
      selectDrop.innerHTML = nameResult;
    })
    .catch((err) => {
      console.log(err);
    });





    searchButton.addEventListener("click", () => {
        let countryName = countryInput.value;
        let countryURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
        console.log(countryURL);
    
        fetch(countryURL)
          .then((resp) => resp.json())
          .then((data) => {
            result.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <div class = "data_container">
            <h4>Languages:</h4>
             <span>${Object.values(data[0].borders)
               .toString()
               .split(",")
               .join(",  ")}</span>
            </div>
            
    
            `;
          })
          .catch((err) => {
            console.log(err);
          });
      });


  searchLangButton.addEventListener("click", () => {
    let countryLang = countryLangInput.value;
    let countryLangURL = `https://restcountries.com/v3.1/lang/${countryLang}`;
    console.log(countryLangURL);

    fetch(countryLangURL)
      .then((resp) => resp.json())
      .then((data) => {
        langResult.innerHTML = `
            <h2>${data[0].name.common}</h2>
            <div class = "data_container">
             <h4>Capital:</h4>
             <span>${data[0].capital[0]}</span>
            </div>`;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  searchBorderButton.addEventListener("click", () => {
    let countryBorder = countryBorderInput.value;
    let countryBorderURL = `https://restcountries.com/v3.1/name/${countryBorder}?fullText=true`;
    console.log(countryBorderURL);

    fetch(countryBorderURL)
      .then((resp) => resp.json())
      .then((data) => {
        borderResult.innerHTML = `
        <h2>${data[0].name.common}</h2>
        <div class = "data_container">
         <h4>Border country:</h4>
         <span>${Object.values(data[0].borders)
           .toString()
           .split(",")
           .join(",  ")}</span>
        </div>

        `;
      })
      .catch((err) => {
        console.log(err);
      });
  });

  searchPopButton.addEventListener("click", () => {
    let countryPop = countryPopInput.value;
    let countryPopURL = `https://restcountries.com/v3.1/name/${countryPop}?fullText=true`;
    console.log(countryPopURL);

    fetch(countryPopURL)
      .then((resp) => resp.json())
      .then((data) => {
        popResult.innerHTML = `
        <div class = "data_container">
         <h4>Country population:</h4>
         <span>${data[0].population}</span>
        </div>

        `;
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
