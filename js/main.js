google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(draw_chart);

function draw_chart(){

    var data = google.visualization.arrayToDataTable(exp_data);

    var options = {
        chart: {
            title: 'Ministry wise Summary of Budget Provisions (in crores of Rupees)',
            'width':400,
            'height':1000

        },

        hAxis: {
            title: 'Expenditure',
            minValue: 0,
            textStyle: {
                bold: true,
                fontSize: 12,
                color: '#4d4d4d'
            },
            titleTextStyle: {
                bold: true,
                fontSize: 18,
                color: '#4d4d4d'
            }
        },
        vAxis: {
            title: 'Department',
            textStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            titleTextStyle: {
                fontSize: 14,
                bold: true,
                color: '#848484'
            },
            minTextLines: 2
        },
        bars: 'horizontal',
        axes: {
            y: {
                0: {side: 'left'}
            }
        }

    };
    var material = new google.charts.Bar(document.getElementById('chart_div'));
    material.draw(data, options);
}



