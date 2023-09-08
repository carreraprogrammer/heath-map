const link = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"

let monthlyVariance;
let baseTemp;


fetch(link)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    monthlyVariance = data.monthlyVariance;
    baseTemp = data.baseTemperature
    console.log(baseTemp);
  })
  .catch(function(error) {
    console.error("Error:", error);
  });