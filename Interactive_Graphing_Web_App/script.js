
document.getElementById('plotButton').addEventListener('click', function() {
    const formula = document.getElementById('formulaInput').value;
    try {
        plotGraph(formula);
    } catch (error) {
        console.error("Error in plotting:", error);
        alert("Invalid input. Please enter a valid formula.");
    }
});

function plotGraph(formula) {
    const points = [];
    for (let x = -10; x <= 10; x += 0.5) {
        let y = x; // Replace this with actual formula evaluation
        points.push({ x, y });
    }

    const data = [{
        x: points.map(p => p.x),
        y: points.map(p => p.y),
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'blue' },
    }];

    const layout = {
        title: 'Graph of the Equation',
        xaxis: { title: 'x' },
        yaxis: { title: 'y' }
    };

    Plotly.newPlot('graphContainer', data, layout);
}
