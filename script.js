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

 const SVGElement = d3.select('svg')
 .attr('style', 'margin: 0 auto; display: block;')

 const SVGCanvas = SVGElement.append('g')

const body = document.querySelector('body')
body.style.background = '#090909';

 SVGCanvas.append('rect')          
 .attr('width', 600)
 .attr('height', 500)
 .attr('fill', '#7b7b7b')
 .attr('y', 0)
 .attr('x', 0)


 const update = (itemsy) => {

  
  // SVGCanvas.append('rect')        
  //         .attr('width', 600)
  //         .attr('height', 500)
  //         .attr('fill', 'green')
  
  const rendery = SVGCanvas  
          .selectAll(".my-rect")
          .data(itemsy, d => d.name)

//           var bar = SVGCanvas.selectAll("g")
//     .data(itemsy, d => d.name)

// bar
//   .enter().append("g")
//   .append('rect')
//   .attr('width', 600-60)
//   .attr('height', 35)
//   .attr('fill', '#090909')
//   .attr('x', 30)
//   .attr('y', (d, i) => i*110-d.shiftValue)

//   bar.selectAll('rect')
//   .attr('width', 600-60)
//   .attr('height', 35)
//   .attr('fill', '#090909')
//   .attr('x', 30)
//   .attr('y', (d, i) => i*110-d.shiftValue)

// bar
//   .exit().remove();

// //   bar1.call(barSelection => {
// //       barSelection
// //       .append('rect')
// //       .classed("my-rect", true)
// //       .attr('width', 600-60)
// //       .attr('height', 35)
// //       .attr('fill', '#090909')
// //       .attr('x', 30)
// //       .attr('y', (d, i) => i*110-d.shiftValue)

// //   })

// //   let bar2 = bar.call(barSelection => {
// //     barSelection
// //     .append('rect')
// //     .classed("my-rect", true)
// //     .attr('width', 600-60)
// //     .attr('height', 35)
// //     .attr('fill', '#090909')
// //     .attr('x', 30)
// //     .attr('y', (d, i) => i*110-d.shiftValue)

// // })

// //   let bar3 = bar
// //   .exit().remove();



  rendery
          .enter()
          .append('rect')
          .classed("my-rect", true)
          .attr('width', 600-60)
          .attr('height', 35)
          .attr('fill', '#090909')
          .attr('x', 30)
          .attr('y', (d, i) => i*110-d.shiftValue)
  
  rendery
        .call((sel) => {
        sel        
          .attr('width', 600-60)
          .attr('height', 35)
          .attr('fill', '#090909')
          .attr('x', 30)
          .attr('y', (d, i) => i*110-d.shiftValue)
  })
  
  rendery
  .exit().remove()
  
}

update(items);
  
  