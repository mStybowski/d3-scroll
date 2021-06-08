const items = [
    {
      name: "VOLVO",
      value: 86,
      shiftValue: 0
    },
      {
      name: "TOYOTA",
      shiftValue: 0
    },
      {
      name: "BMW",
      shiftValue: 0
    },
      {
      name: "Mercedes",
      shiftValue: 0
      }
  ]
  
  let scrollValue = 0;
  
  const mySVG = document.querySelector('svg')

//   const myinte = setInterval(() => console.log(document.scrollY), 1500);/

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
 const SVGCanvas = d3.select('svg').append('g')

 const update = (itemsy) => {

  
  // SVGCanvas.append('rect')        
  //         .attr('width', 600)
  //         .attr('height', 500)
  //         .attr('fill', 'green')
  
  const rendery = SVGCanvas  
          .selectAll(".my-rect")
          .data(itemsy, d => d.name)
  
  rendery
          .enter()
          .append('rect')
          .classed("my-rect", true)
          .attr('width', 600)
          .attr('height', 35)
          .attr('fill', 'blue')
          .attr('y', (d, i) => i*110-d.shiftValue)
  
  rendery
        .call((sel) => {
        sel        
          .attr('width', 600)
          .attr('height', 35)
          .attr('fill', 'blue')
          .attr('x', 0)
          .attr('y', (d, i) => i*110-d.shiftValue)
  })
  
  rendery
  .exit().remove()
  
}

update(items);
  
  