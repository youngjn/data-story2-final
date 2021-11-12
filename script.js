$(function() {
		  

		});


function twoth() {

	var current = $(".firstNumber").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 25);

		function add() {
			if (currentInt > 407) {
				currentInt-=1;
				if(currentInt < 407) {
					clearInterval(intervv);
				} else {
					$(".firstNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#ffc3bf");
				        
				        $(".firstNumber").css("color", "#ffc3bf");

				        $(".firstCow").css("width", currentInt/2);


				}
			} else if(currentInt == 407) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 407) {
				        clearInterval(intervv);
				      } else {
				        $(".firstNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#ffc3bf");
				        
				        $(".firstNumber").css("color", "#ffc3bf");

				        $(".firstCow").css("width", currentInt/2);
				      }
			}

			
		}
	}
	

	current = $(".firstNumber").text();
	currentInt = parseInt(current);
}



function twothtwo() {

	var current = $(".secondNumber").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 20);

		function add() {
			if (currentInt > 451) {
				currentInt-=1;
				if(currentInt < 451) {
					clearInterval(intervv);
				} else {
					$(".secondNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#f09690");
				        
				        $(".secondNumber").css("color", "#f09690");

				        $(".secondCow").css("width", currentInt/2);


				}
			} else if(currentInt == 451) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 451) {
				        clearInterval(intervv);
				      } else {
				        $(".secondNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#f09690");
				        
				        $(".secondNumber").css("color", "#f09690");

				        $(".secondCow").css("width", currentInt/2);

				      }
			}

			
		}
	}
	

	current = $(".secondNumber").text();
	currentInt = parseInt(current);
}

function twothfour() {

	var current = $(".thirdNumber").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 15);

		function add() {
			if (currentInt > 510) {
				currentInt-=1;
				if(currentInt < 510) {
					clearInterval(intervv);
				} else {
					$(".thirdNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#e06d65");
				        
				        $(".thirdNumber").css("color", "#e06d65");


				        $(".thirdCow").css("width", currentInt/2);


				}
			} else if(currentInt == 510) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 510) {
				        clearInterval(intervv);
				      } else {
				        $(".thirdNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#e06d65");
				        
				        $(".thirdNumber").css("color", "#e06d65");


				        $(".thirdCow").css("width", currentInt/2);

				      }
			}

			
		}
	}
	

	current = $(".thirdNumber").text();
	currentInt = parseInt(current);
}



function twothsix() {

	var current = $(".fourthNumber").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 10);

		function add() {
			if (currentInt > 569) {
				currentInt-=1;
				if(currentInt < 569) {
					clearInterval(intervv);
				} else {
					$(".fourthNumber").text(currentInt).toLocaleString('en-US');
				        $(".fourthNumber").css("color", "#d45148");
				        $(".cows").css("color", "#d45148");

				        $(".fourthCow").css("width", currentInt/2);


				}
			} else if(currentInt == 569) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 569) {
				        clearInterval(intervv);
				      } else {
				        $(".fourthNumber").text(currentInt).toLocaleString('en-US');
				        $(".cows").css("color", "#d45148");
				        $(".fourthNumber").css("color", "#d45148");

				        $(".fourthCow").css("width", currentInt/2);

				      }
			}

			
		}
	}
	

	current = $(".fourthNumber").text();
	currentInt = parseInt(current);
}




function twotheight() {

	var current = $(".fifthNumber").text();
	var currentInt = parseInt(current);


	countUp();

	function countUp() {
		var intervv=setInterval(add, 5);

		function add() {
			if (currentInt > 620) {
				currentInt-=1;
				if(currentInt < 620) {
					clearInterval(intervv);
				} else {
					$(".fifthNumber").text(currentInt).toLocaleString('en-US');
					$(".fifthNumber").css("color", "#bf3026");

				        $(".fifthCow").css("width", currentInt/2);


				}
			} else if(currentInt == 620) {
				clearInterval(intervv);
			} else {
				currentInt+=1;
				if (currentInt > 620) {
				        clearInterval(intervv);
				      } else {
				        $(".fifthNumber").text(currentInt).toLocaleString('en-US');
				        $(".fifthNumber").css("color", "#bf3026");

				        $(".fifthCow").css("width", currentInt/2);


				      }
			}

			
		}
	}
	

	current = $(".fifthNumber").text();
	currentInt = parseInt(current);
}






// $(function() {
// 		  var cnt0 = 200000000;

// 		  counterFn();

// 		  function counterFn() {

// 		    id0 = setInterval(count0Fn, 100);

// 		    function count0Fn() {
// 		      cnt0++;
// 		      if (cnt0 > 99) {
// 		        clearInterval(id0);
// 		      } else {
// 		        $(".number").text(cnt0);
// 		      }
// 		    }
// 		  }
// 		});





// var ctx2 = document.getElementById("secondChart").getContext("2d");

// var secondChart = new Chart(ctx2, {
// 	type: 'line',
// 	data: {
// 		labels: [
// 		"1998",
// 		"1999",
// 		"2000",
// 		"2001",
// 		"2002",
// 		"2003",
// 		"2004",
// 		"2005",
// 		"2006",
// 		"2007",
// 		"2008",
// 		"2009",
// 		"2010",
// 		"2011",
// 		"2012",
// 		"2013",
// 		"2014",
// 		"2015",
// 		"2016",
// 		"2017",
// 		"2018"
// 		],
// 		datasets: [{
// 			label: 'South Korea Meat Production',
// 			data: [1.70, 1.78, 1.65, 1.59, 1.66, 1.78, 1.59, 1.64, 1.77, 1.84, 1.87, 1.97, 2.02, 1.81, 2.10, 2.31, 2.33, 2.42, 2.44, 2.41, 2.50],
// 			fill: false,
// 			borderColor: '#bf3026',
// 			backgroundColor: '#bf3026',
// 			borderWidth: 1
// 		}]
// 	},
// 	options: {
// 		responsive: true,
// 		maintainAspectRatio: true,
// 		plugins: {
// 			title: {
// 				display: true,
// 				text: 'South Korea Meat Production From 1998 to 2018',
// 				color: 'white',
// 				font: {
// 					family: "'DM Serif Display', serif",
// 					size: 20
// 				}
// 			},
// 			legend: {
// 				display: true,
// 				position: 'top',
// 				labels: {
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 14
// 					}
// 				}
// 			}
// 		},
// 		scales: {
// 			y: {
// 				ticks: {
// 					beginAtZero: true,
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 16
// 					}
// 				},
// 				title: {
// 					display: true,
// 					text: 'Production Amount in Million Tons (mt)',
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 18,
// 						lineHeight: 4
// 					}
// 				},
// 				min: 0
// 			},
// 			x: {
// 				ticks: {
// 					color: 'white',
// 					font: {
// 						family: "'Cormorant Garamond', serif",
// 						size: 16
// 					}
// 				}
// 			}
// 		}
// 	}

// });

var myChart = echarts.init(document.getElementById('pieChart'));

var option = {
  tooltip: {
    trigger: 'item'
  },
  visualMap: {
    show: false,
    min: 0,
    max: 800,
    inRange: {
      colorLightness: [0.2, 1]
    }
  },
  series: [
    {
      name: 'Gas Type',
      type: 'pie',
      radius: '65%',
      center: ['50%', '50%'],
      data: [
        { value: 76, name: 'Carbon Dioxide (CO2)' },
        { value: 16, name: 'Methane' },
        { value: 6, name: 'Nitrous Oxide (N2O)ㄹ' },
        { value: 2, name: 'HFC, PFC, SF6' }
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      label: {
        color: 'rgba(255, 255, 255, 1)'
      },
      labelLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 1)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: '#bf3026',
        shadowBlur: 60,
        shadowColor: 'rgba(0, 0, 0, 0.5)'
      },
      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 200;
      }
    }
  ]
};

myChart.setOption(option);




var gaugeChart1 = echarts.init(document.getElementById('gaugeChart1'));
var gaugeChart2 = echarts.init(document.getElementById('gaugeChart2'));
var gaugeChart3 = echarts.init(document.getElementById('gaugeChart3'));


const gaugeData1 = [
  {
    value: 9.87,
    name: 'Poultry',
    title: {
      offsetCenter: ['0%', '50%']
    },
    detail: {
      offsetCenter: ['0%', '70%']
    }
  }

];

const gaugeData2 = [
	{
		value: 12.31,
	    name: 'Pork',
	    title: {
	      offsetCenter: ['0%', '50%']
	    },
	    detail: {
	      offsetCenter: ['0%', '70%']
	    }
	}
];

const gaugeData3 = [
	{
		value: 99.48,
	    name: 'Beef',
	    title: {
	      offsetCenter: ['0%', '50%']
	    },
	    detail: {
	      offsetCenter: ['0%', '70%']
	    }
	}
];

var option2 = {
	// colorBy: 'series',
	color: ['#f0ada8', '#fc746a', '#bf3026'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#f0ada8'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData1,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"
      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      axisLabel: {
      	color: '#ffffff'
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

var option3 = {
	// colorBy: 'series',
	color: ['#fc746a', '#fc746a', '#bf3026'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#fc746a'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData2,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"
      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      axisLabel: {
      	color: '#ffffff'
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

var option4 = {
	// colorBy: 'series',
	color: ['#d13232', '#fc746a', '#d13232'],
  series: [
    {
      type: 'gauge',
      anchor: {
        show: true,
        showAbove: true,
        size: 15,
        itemStyle: {
          color: '#d13232'
        }
      },
      progress: {
        show: true,
        overlap: true,
        roundCap: true
      },
      axisLine: {
        roundCap: true
      },
      // label: {
      // 	color: 'rgb(255,255,255)'
      // },
      data: gaugeData3,
      title: {
        fontSize: 17,
        color: '#ffffff',
        fontFamily: "'DM Serif Display', serif"

      },
      splitLine: {
      	lineStyle: {
      		color: '#fff'
      	}
      },
      radius: '80%',
      axisLabel: {
      	fontSize: 13,
      	fontFamily: "'Cormorant Garamond', serif",
      	color: 'white'
      },
      startAngle: 135,
      endAngle: 45,
      detail: {
        width: 60,
        height: 20,
        fontSize: 17,
        color: '#fff',
        backgroundColor: 'auto',
        fontFamily: "'DM Serif Display', serif",
        borderRadius: 3,
        formatter: '{value}kg'
      }
    }
  ]
};

function poultryGauge() {
	option2 && gaugeChart1.setOption(option2);

}

function porkGauge() {
	option3 && gaugeChart2.setOption(option3);
	// console.log('clicked');

}

function beefGauge() {
	option4 && gaugeChart3.setOption(option4);

}



var roseChart = echarts.init(document.getElementById('roseChart'));

var roseOption = {
	tooltip: {
		trigger: 'item'
	},
	color: [
	"#d13232",
	"#d43f3f",
	"#d64d4d",
	"#d65c5c",
	"#db6969",
	"#de7a7a",
	"#db8484",
	"#e09494"
	],
	textStyle: {
		fontFamily: "'DM Serif Display', serif",
		fontSize: 16
	},
	// legend: {
 //    top: 'bottom',
 //    textStyle: {
 //    	color: 'white'
 //    }
 //  },
  toolbox: {
    show: true,
    feature: {
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Average Yield of Cuts(%)',
      type: 'pie',
      radius: '55%',
      center: ['50%', '50%'],
      itemStyle: {
        borderRadius: 8
      },
      label: {
      	color: 'white',
      	fontSize: 16
      },
      data: [
        { value: 17.7, name: 'Ham' },
        { value: 12.2, name: 'Belly' },
        { value: 11.2, name: 'Picnic Shoulder' },
        { value: 8.5, name: 'Loin' },
        { value: 6.2, name: 'Boston Butt' },
        { value: 4.8, name: 'Others' },
        { value: 4.2, name: 'Spare Rib' },
        { value: 1.8, name: 'Tenderloin' }
      ]
    }
  ]
};



roseOption && roseChart.setOption(roseOption);




var barChart = echarts.init(document.getElementById('barChart'));

var barOption = {
	roundCap: true,
	textStyle: {
		fontFamily: "'DM Serif Display', serif"
	},
  dataset: {
    source: [
      ['score', 'amount', 'country'],
      [8.19, 14.900000, 'Germany'],
      [10.63, 19.350000, 'Russia'],
      [29.34, 53.350000, 'Brazil'],
      [46.83, 85.150000, 'U.S.A'],
      [88.16, 160.300000, 'China'],
    ]
  },
  grid: { containLabel: true },
  xAxis: { name: 'in Million Cows',
  					nameTextStyle: {
  						color: '#fff',
  						fontSize: 15
  					},
  					nameGap: 30,
  					axisLabel: {
  						color: '#fff',
  						fontSize: 16
  					}
},
  yAxis: { type: 'category',
  				axisLabel:  {
  					fontFamily: "'Cormorant Garamond', serif",
  					color: '#fff',
  					fontSize: 20
  				}
},
  visualMap: {
  	show: false,
    orient: 'horizontal',
    left: 'center',
    min: 10,
    max: 100,
    text: ['High Production', 'Low Production'],
    // Map the score column to color
    dimension: 0,
    textStyle: {
    	color: '#fff'
    },
    inRange: {
      color: ['#f0ada8', '#bf3026']
    }
  },
  series: [
    {
      type: 'bar',
      encode: {
        // Map the "amount" column to X axis.
        x: 'amount',
        // Map the "product" column to Y axis
        y: 'country'
      }
    }
  ]
};

barOption && barChart.setOption(barOption);





var lineChart2 = echarts.init(document.getElementById('lineChart2'));

var lineOption2 = {
	color: [
		"#d13232",
		"#fc746a",
		"#f0ada8"
	],
	textStyle: {
		fontFamily: "'DM Serif Display', serif",
		fontSize: 15,
		color: 'white'
	},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
  	show: false,
    data: ['South Korea'],
    textStyle: {
    	color: 'white',
    	fontFamily: "'Cormorant Garamond', serif",
    	fontSize: 18
    },
    itemStyle: {
    	borderWidth: '6'
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
      	fontSize: 16
      },
      data: ['1998', '2003', '2008', '2013', '2018']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
      	fontSize: 16
      }
    }
  ],
  series: [
    {
      name: 'Population',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [46620691, 48260897, 49182456, 50345717, 51171706]
    }
  ]
};

lineOption2 && lineChart2.setOption(lineOption2);


var lineChart = echarts.init(document.getElementById('lineChart'));

var lineOption = {
	color: [
		"#d13232",
		"#fc746a",
		"#f0ada8"
	],
	textStyle: {
		fontFamily: "'DM Serif Display', serif",
		fontSize: 15,
		color: 'white'
	},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  legend: {
  	show: false,
    data: ['Beef', 'Pork', 'Poultry'],
    textStyle: {
    	color: 'white',
    	fontFamily: "'Cormorant Garamond', serif",
    	fontSize: 18
    },
    itemStyle: {
    	borderWidth: '6'
    }
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLabel: {
      	fontSize: 16
      },
      data: ['1998', '2003', '2008', '2013', '2018']
    }
  ],
  yAxis: [
    {
      type: 'value',
      axisLabel: {
      	fontSize: 16
      }
    }
  ],
  series: [
    {
      name: 'Beef',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [7.41, 7.94, 7.42, 10.30, 12.77]
    },
    {
      name: 'Pork',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [15.03, 17.28, 18.84, 20.84, 26.07]
    },
    {
      name: 'Poultry',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [5.60, 7.78, 8.86, 11.52, 15.09]
    }
  ]

  
};


lineOption && lineChart.setOption(lineOption);


new Pageable("#container");




// const sections = document.querySelectorAll('.fullscreensection');

// const animationDuration = 1000;
// let lastTime = 0;

// let index = 0;

// // Scroll to next Section
// function moveNext() {

//     if (index > sections.length - 2) {

//         return;
//     }
//     index++;

//     sections.forEach((section, i) => {

//         if (i === index) {
//             section.scrollIntoView({ behavior: 'smooth' })
//         }
//         console.log("This");

//     })

//     console.log(index);

// }

// // Scroll to next Section
// function movePrev() {

//     if (index < 1) {

//         return;
//     }
//     index--;

//     sections.forEach((section, i) => {

//             if (i === index) {
//                 section.scrollIntoView({ behavior: 'smooth' })
//             }
//             // console.log("This");

//         })
//         // console.log(index);

// }


// window.addEventListener("wheel", e => {


//     const value = e.deltaY;
//     const currentTime = new Date().getTime();

//     console.log(value);

//     if (currentTime - lastTime < animationDuration) {
//         e.preventDefault();
//         return;
//     }

//     if (value < 0) {
//         moveNext();
//     } else {

//         movePrev();
//     }

//     lastTime = currentTime;

// }, { passive: false })








