Promise.all([ // load multiple files
	d3.csv('./'),
	d3.json('./')
]).then(([data1, data2])=>{

    const margin = {top: 20, right: 20, bottom: 20, left: 20};
    const width = 720 - margin.left - margin.right,
        height = 360 - margin.top - margin.bottom;

    const svg = d3.select('.nodeGram')
                    .append('svg')
                    .attr("viewBox", [0,0,width,height]);

})