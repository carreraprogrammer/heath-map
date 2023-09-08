const link = "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"

let monthlyVariance;
let baseTemp;

let width = 1200;
let height = 600;
let padding =  60;

let canvas = d3.select("#canvas")
canvas.attr('width', width)
canvas.attr('height', height)

let xScale, yScale; // Definir xScale y yScale aquí

let generateScales = () => {
  xScale = d3.scaleLinear()
             .range([padding, width - padding])

  yScale = d3.scaleLinear() // Cambiado de yScaleb a yScale
              .range([height - padding, padding]) // Cambiado el orden de los valores en el rango
}

let drawCells = () => {

}

let drawAxis = () => {
  let xAxis = d3.axisBottom(xScale)

  canvas.append('g')
        .call(xAxis)
        .attr('transform', 'translate(0,' + (height - padding) + ')')
        .attr('id', 'x-axis')

  let yAxis = d3.axisLeft(yScale)

  canvas.append('g')
        .call(yAxis)
        .attr('id', "y-axis")
        .attr('transform', 'translate(' + padding + ', 0)')
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
    drawAxis();
  })
  .catch(function(error) {
    console.error("Error:", error);
  });
