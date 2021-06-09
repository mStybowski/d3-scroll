const items = [
    {
      name: "VOLVO",
      value: 86,

    },
      {
      name: "TOYOTA",
      value: 76,
    },
      {
      name: "BMW",
      value: 46,
    },
      {
      name: "Mercedes",
      value: 62,
      }
]
  
let scrollValue = 0;
  
const mySVG = document.querySelector('svg')

mySVG.onwheel = function(e) {
    let itemsToSend;
    console.dir(e)
    if(e.wheelDelta < 0){
        scrollValue+=20;
    }
    else{
        scrollValue-=20;
    }
    itemsToSend = items.map(el => ({...el, shiftValue: scrollValue}))
    update(itemsToSend);
 };

 const SVGElement = d3.select('svg')
 .attr('style', 'margin: 0 auto; display: block;')

 const SVGCanvas = SVGElement;

const body = document.querySelector('body')
body.style.background = '#090909';

//  SVGCanvas.append('rect')          
//  .attr('width', 600)
//  .attr('height', 500)
//  .attr('fill', '#7b7b7b')
//  .attr('y', 0)
//  .attr('x', 0)

const rectFunct = (selection, dataFilter) => {

  selection
    .selectAll("rect")
    .data(dataFilter)

  selection.enter().append('rect')
    .classed("my-rect", true)
    .attr('width', 600-60)
    .attr('height', 35)
    .attr('fill', 'white')
    .attr('x', 30)
    .attr('y', (d, i) => i*110-d.shiftValue)

  selection.exit().remove();
}

 const update = (items) => {

  var gGroup = SVGCanvas
    .selectAll("g")
    .data(items, d => d.name);

  let enterPhaseG = gGroup
    .enter().append("g")

    gGroup
      .call(gSelection => {
            gSelection.call(rectFunc, (d) => [d])

      })

  gGroup
    .exit().remove();
  
}

update(items);
  
  