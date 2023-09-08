const link = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"

let monthlyVariance;
let baseTemp;

let width = 1200;
let height = 600;
let padding =  60;

let canvas = d3.select("#canvas")
canvas.attr('width', width)
canvas.attr('height', height)

let generateScales = () => {
  xScale = d3.scaleLinear()
             .range([padding, width - padding])
}

let drawCells = () => {

}

let drawAxes = () => {
  let xAxis = d3.axisBottom(xScale)

  canvas.append('g')
        .call(xAxis)
        .attr('transform', 'translate(0,' + (height - padding) + ')')
        
}

fetch(link)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    monthlyVariance = data.monthlyVariance;
    baseTemp = data.baseTemperature
    console.log(baseTemp)
    console.log(monthlyVariance)
    generateScales();
    drawCells();
    drawAxes();
  })
  .catch(function(error) {
    console.error("Error:", error);
  });