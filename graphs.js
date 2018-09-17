
var elevationData = [
    [0, 0],
    [20, 70],
    [22, 25],
    [40, 50],
    [60, 5],
]

var elevationData2 = [
    [0, 0],
    [20, 30],
    [22, 25],
    [40, 30],
    [60, 5],
]


var annotationsData ={
  
    chart: {
      type: 'area',
      zoomType: 'x',
      panning: true,
      panKey: 'shift',
      scrollablePlotArea: {
        minWidth: 600
      }
    },
  
    title: {
      text: 'HGw status'
    },
  
    subtitle: {
      text: ''
    },
  
    annotations: [{
      labelOptions: {
        backgroundColor: 'rgba(255,255,255,0.5)',
        verticalAlign: 'top',
        y: 15
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 27.98,
          y: 255
        },
        text: 'Arbois'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 45.5,
          y: 611
        },
        text: 'Montrond'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 63,
          y: 651
        },
        text: 'Mont-sur-Monnet'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 84,
          y: 789
        },
        x: -10,
        text: 'Bonlieu'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 129.5,
          y: 382
        },
        text: 'Chassal'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 159,
          y: 443
        },
        text: 'Saint-Claude'
      }]
    }, {
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 101.44,
          y: 1026
        },
        x: -30,
        text: 'Col de la Joux'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 138.5,
          y: 748
        },
        text: 'Côte de Viry'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 176.4,
          y: 1202
        },
        text: 'Montée de la Combe<br>de Laisia Les Molunes'
      }]
    }, {
      labelOptions: {
        shape: 'connector',
        align: 'right',
        justify: false,
        crop: true,
        style: {
          fontSize: '0.8em',
          textOutline: '1px white'
        }
      },
      labels: [{
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 96.2,
          y: 783
        },
        text: '6.1 km climb<br>4.6% on avg.'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 134.5,
          y: 540
        },
        text: '7.6 km climb<br>5.2% on avg.'
      }, {
        point: {
          xAxis: 0,
          yAxis: 0,
          x: 172.2,
          y: 925
        },
        text: '11.7 km climb<br>6.4% on avg.'
      }]
    }],
  
    xAxis: {
      labels: {
        format: '{value} km'
      },
      minRange: 5,
      title: {
        text: 'Distance'
      }
    },
  
    yAxis: {
      startOnTick: true,
      endOnTick: false,
      maxPadding: 0.35,
      title: {
        text: null
      },
      labels: {
        format: '{value} m'
      }
    },
  
    tooltip: {
      headerFormat: 'Distance: {point.x:.1f} km<br>',
      pointFormat: '{point.y} m a. s. l.',
      shared: true
    },
  
    legend: {
      enabled: false
    },
  
    series: [{
      data: elevationData,
      lineColor: Highcharts.getOptions().colors[1],
      color: Highcharts.getOptions().colors[2],
      fillOpacity: 0.5,
      name: 'Elevation',
      marker: {
        enabled: false
      },
      threshold: null
    }]
  
  };

Highcharts.chart('single-graph1', annotationsData);


annotationsData.series[0].data = elevationData2
Highcharts.chart('single-graph2', annotationsData);


var singleGraph3Data = {

chart: {
    type: 'column'
},

title: {
    text: 'Styling axes and columns'
},

yAxis: [{
    className: 'highcharts-color-0',
    title: {
    text: 'Primary axis'
    }
}, {
    className: 'highcharts-color-1',
    opposite: true,
    title: {
    text: 'Secondary axis'
    }
}],

plotOptions: {
    column: {
    borderRadius: 5
    }
},

series: [{
    data: [1, 3, 2, 4]
}, {
    data: [324, 124, 547, 221],
    yAxis: 1
}]

};

Highcharts.chart('single-graph3', singleGraph3Data);

Highcharts.chart('single-graph4', singleGraph3Data);

var singleGraph5Data = {
chart: {
    type: 'spline',
    scrollablePlotArea: {
    minWidth: 600,
    scrollPositionX: 1
    }
},
title: {
    text: 'Wind speed during two days'
},
subtitle: {
    text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway'
},
xAxis: {
    type: 'datetime',
    labels: {
    overflow: 'justify'
    }
},
yAxis: {
    title: {
    text: 'Wind speed (m/s)'
    },
    minorGridLineWidth: 0,
    gridLineWidth: 0,
    alternateGridColor: null,
    plotBands: [{ // Light air
    from: 0.3,
    to: 1.5,
    color: 'rgba(68, 170, 213, 0.1)',
    label: {
        text: 'Light air',
        style: {
        color: '#606060'
        }
    }
    }, { // Light breeze
    from: 1.5,
    to: 3.3,
    color: 'rgba(0, 0, 0, 0)',
    label: {
        text: 'Light breeze',
        style: {
        color: '#606060'
        }
    }
    }, { // Gentle breeze
    from: 3.3,
    to: 5.5,
    color: 'rgba(68, 170, 213, 0.1)',
    label: {
        text: 'Gentle breeze',
        style: {
        color: '#606060'
        }
    }
    }, { // Moderate breeze
    from: 5.5,
    to: 8,
    color: 'rgba(0, 0, 0, 0)',
    label: {
        text: 'Moderate breeze',
        style: {
        color: '#606060'
        }
    }
    }, { // Fresh breeze
    from: 8,
    to: 11,
    color: 'rgba(68, 170, 213, 0.1)',
    label: {
        text: 'Fresh breeze',
        style: {
        color: '#606060'
        }
    }
    }, { // Strong breeze
    from: 11,
    to: 14,
    color: 'rgba(0, 0, 0, 0)',
    label: {
        text: 'Strong breeze',
        style: {
        color: '#606060'
        }
    }
    }, { // High wind
    from: 14,
    to: 15,
    color: 'rgba(68, 170, 213, 0.1)',
    label: {
        text: 'High wind',
        style: {
        color: '#606060'
        }
    }
    }]
},
tooltip: {
    valueSuffix: ' m/s'
},
plotOptions: {
    spline: {
    lineWidth: 4,
    states: {
        hover: {
        lineWidth: 5
        }
    },
    marker: {
        enabled: false
    },
    pointInterval: 3600000, // one hour
    pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
    }
},
series: [{
    name: 'Hestavollane',
    data: [
    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
    10.1
    ]

}, {
    name: 'Vik',
    data: [
    0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
    0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
    0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
    0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
    1.5
    ]
}],
navigation: {
    menuItemStyle: {
    fontSize: '10px'
    }
}
};



Highcharts.chart('single-graph5', singleGraph5Data);
Highcharts.chart('single-graph6', singleGraph5Data);