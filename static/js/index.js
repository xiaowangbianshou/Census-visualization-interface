$(function() {

    // 全国人口情况
    zandz();
    map();
    mzrk();
    jthgm();

    // 地区人口情况
    ssrk();
    qyrk();

    //人口性别构成情况 
    zrkxb();
    csxb();

    // 人口年龄构成情况
    qgnlgc();
    rkfyb();

    // 人口受教育程度情况
    sjycd();
    wml();

    // 城乡人口和流动人口情况
    cxrk();
    ldrk();




    function leida1() {
        var myChart = echarts.init(document.getElementById('map'));

        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });

    }




})

// 全国人口规模
function zandz() {
    var myChart = echarts.init(document.getElementById('zandz'));
    var color = ["#CC00FF", "#FFC0CB", "#FF69B4", "#DDA0DD", "#FF00FF", "#9400D3", "#8A2BE2"]
    var option = {
        grid: {
            left: "12%", //左边距
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#002cff'
                }
            }
        },
        // toolbox: {
        //   feature: {
        // 	dataView: { show: true, readOnly: false },
        // 	magicType: { show: true, type: ['line', 'bar'] },
        // 	restore: { show: true },
        // 	saveAsImage: { show: true }
        //   }
        // },
        legend: {
            data: ['人口总量', '增速'],
            textStyle: {
                color: '#fff'
            }

        },
        xAxis: [{
            type: 'category',
            data: [1953, 1964, 1982, 1990, 2000, 2010, 2020],
            // data: {{data1_year|safe}},
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg' //x轴的hover背景色
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //x轴的数值颜色
                    fontSize: 20
                },
            }

        }],
        yAxis: [{
                type: 'value',
                name: '人口总量（万人）',
                nameTextStyle: { color: '#fff' },
                min: 0,
                max: 150000,
                interval: 50000,
                // splitLine:{show:false},
                // splitArea:{show:true},
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#bfg',
                    }
                },
                axisLabel: {
                    formatter: '{value} ',
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                }
            },
            {
                type: 'value',
                name: '增速',
                min: 0,
                max: 3,
                interval: 0.5,
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#bfg',
                    }
                },
                axisLabel: {
                    formatter: '{value} ',
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                }
            }
        ],
        series: [{
                name: '人口总量',
                type: 'bar',
                tooltip: {
                    valueFormatter: function(value) {
                        return value + '(千万人)';
                    }
                },
                data: [
                    58.260, 69.458, 100.818, 113.368, 126.583, 133.972, 141.178
                ],
                barWidth: 40,
                itemStyle: {

                    color: '#4ec1e4'

                }
            },
            {
                name: '增速',
                type: 'line',
                yAxisIndex: 1,
                tooltip: {
                    valueFormatter: function(value) {
                        return value + ' %';
                    }
                },
                data: [0, 1.61, 2.09, 1.48, 1.07, 0.57, 0.53],
                itemStyle: {
                    normal: {
                        color: '#EE6666',
                        lineStyle: {
                            width: 4
                        },
                        label: {
                            show: true,
                            fontSize: 18
                        },

                    }
                }
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function map() {
    var myChart = echarts.init(document.getElementById('map-top5'));
    let iconRQ = "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNCRkRBMEJBQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNCRkRBMEJCQzgwRjExRUFBNUI0RTMyMThEN0UxMzFEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M0JGREEwQjhDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6M0JGREEwQjlDODBGMTFFQUE1QjRFMzIxOEQ3RTEzMUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5mT42iAAABQ0lEQVR42mL8LabOQCQIBOL1xChkItJAkLp+IBajpqFWQCwPxJ7UNDQCSgdQy1BmIA6Bsl2AmJMahjoAsTiUzQPETtQwNAKN709IAwvUayZQ/hcg/o0k/x6Ig9D0+ABxKJT9HYh/oMm/BBm6GYitgTgfiBmJcLkkEK/CIXcGiGNB3v8JxIVQF31gIA/8AeIWaNK7gRymG4BYH4hPkGjgXSC2A+JaWNChR9QjqIJeIP5PhIGzgdgAiI8Tin2QbSVAvIOAgROBOA0auUQlKV4gtidgqBGp6RSUFrmIKA/ESDEUPcGfBOIUIH6Lln29iTVUCIjdkJJKExDbAPFcqJdPEMpd2AwF5TBWaFKxBeJ6qOHIqaMbmjrcsBUw2AwNh7rKAEeaBaWOMiD2BeJvQOxOyFBuaFJJwZZU0MBWaHCIo0sABBgAetA4Jx5t/ToAAAAASUVORK5CYII="

    let data = [{
            name: "广东",
            value: [113.1553, 23.06]
        },
        {
            name: "山东",
            value: [117.00, 36.40]
        },

        {
            name: "河南",
            value: [113.5, 34.4]
        },
        {
            name: "江苏",
            value: [118.7, 32.4]
        },
        {
            name: "四川",
            value: [103.5, 30.6]
        },


    ]
    let LableData = [{
            name: "Top1 广东",
            coords: [
                [113.1553, 23.06],
                [118.24, 18.55, 100]
            ], // 线条位置[开始位置，结束位置]
            value: [12601, 113.08]
        },
        {
            name: "Top2山东",
            coords: [
                [117.00, 36.40],
                [125, 36]
            ], // 线条位置[开始位置，结束位置]
            value: [10153, 102.67]
        },
        {
            name: "Top3河南",
            coords: [
                [113.5, 34.4],
                [98, 41]
            ], // 线条位置[开始位置，结束位置]
            value: [9937, 100.60]
        },
        {
            name: "Top4江苏",
            coords: [
                [118.7, 32.4],
                [125.24, 27.55, 100]
            ], // 线条位置[开始位置，结束位置]
            value: [8475, 103.15]
        },
        {
            name: "Top5四川",
            coords: [
                [103.5, 30.6],
                [93, 20]
            ], // 线条位置[开始位置，结束位置]
            value: [8367, 102.19]
        },
    ];

    option = {
        /*backgroundColor: '#000f1e',*/
        geo: {
            map: 'china',
            aspectScale: 0.85,
            layoutCenter: ["50%", "50%"], //地图位置
            layoutSize: '100%',
            itemStyle: {
                normal: {
                    shadowColor: '#276fce',
                    shadowOffsetX: 0,
                    shadowOffsetY: 15,
                    opacity: 0.5,
                },
                emphasis: {
                    areaColor: '#276fce',

                }
            },
            regions: [{
                name: '南海诸岛',
                itemStyle: {
                    areaColor: 'rgba(0, 10, 52, 1)',

                    borderColor: 'rgba(0, 10, 52, 1)',
                    normal: {
                        opacity: 0,
                        label: {
                            show: false,
                            color: "#009cc9",
                        }
                    },


                },
                label: {
                    show: false,
                    color: '#FFFFFF',
                    fontSize: 12,
                },


            }],

        },
        series: [
            // 常规地图
            {
                type: 'map',
                mapType: 'china',
                aspectScale: 0.85,
                layoutCenter: ["50%", "50%"], //地图位置
                layoutSize: '100%',
                zoom: 1, //当前视角的缩放比例
                // roam: true, //是否开启平游或缩放
                scaleLimit: { //滚轮缩放的极限控制
                    min: 1,
                    max: 2
                },
                itemStyle: {
                    normal: {
                        areaColor: '#0c274b',
                        borderColor: '#1cccff',
                        borderWidth: 1.5


                    },
                    emphasis: {
                        areaColor: '#02102b',
                        label: {
                            color: "#fff"
                        }

                    }
                },


            },
            { //首都星图标
                name: '首都',
                type: 'scatter',
                coordinateSystem: 'geo',
                data: [{
                    name: '首都',
                    value: [116.24, 41.55, 100],

                }, ],
                symbol: iconRQ,
                symbolSize: 20,
                label: {
                    normal: {
                        show: false,

                    },
                    emphasis: {
                        show: false
                    }
                },

            },
            // 区域散点图
            {
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                symbolSize: 10,
                rippleEffect: { //坐标点动画
                    period: 3,
                    scale: 5,
                    brushType: 'fill'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}',
                        color: '#b3e2f2',
                        fontWeight: "bold",
                        fontSize: 16
                    }
                },

                data: data,
                itemStyle: { //坐标点颜色
                    normal: {
                        show: true,
                        color: '#ff8003',
                        shadowBlur: 20,
                        shadowColor: '#fff'
                    },
                    emphasis: {
                        areaColor: '#f00'
                    }
                },

            },


            /*{
		            name: 'lable',
		            type: 'scatter',
		            coordinateSystem: 'geo',
		            symbol: 'pin',
		            symbolSize: [50,50],
		            label: {
		                normal: {
		                    show: true,
		                    textStyle: {
		                        color: '#fff',
		                        fontSize: 9,
		                    },
		                    formatter (value){
		                        return value.data.value[1]
		                    }
		                }
		            },
		            itemStyle: {
		                normal: {
		                    color: '#D8BC37', //标志颜色
		                }
		            },
		            data: data,
		            showEffectOn: 'render',
		            rippleEffect: {
		                brushType: 'stroke'
		            },
		            hoverAnimation: true,
		            zlevel: 1
		        },*/
            {

                type: 'lines',
                zlevel: 3,
                symbol: 'circle',
                symbolSize: [5, 5],
                color: '#ff8003',
                opacity: 1,
                label: {
                    show: true,
                    padding: [10, 20],
                    color: '#fff',
                    backgroundColor: "#1a3961",
                    borderColor: '#aee9fb',
                    borderWidth: 1,
                    borderRadius: 6,
                    formatter(params) {

                        let arr = [params.name, "人口总数：" + params.value[0] + "万人", "性别比例：" + params.value[1] + "%"];
                        return arr.join("\n")
                    },
                    textStyle: {
                        align: 'left',
                        lineHeight: 20,
                    }
                    /* normal: {
		
		                     textStyle: {
		                         color: '#fff',
		                         fontSize: 9,
		                     },
		                     formatter (value){
		                         return value.data.value[2]
		                     },
		
		                 }*/
                },
                lineStyle: {
                    type: 'solid',
                    color: '#fff',
                    width: 0.5,
                    opacity: 1,

                },
                data: LableData,


            },
        ]
    };

    myChart.on('click', function(params) {
        console.log(params);
    });
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

}

function mzrk() {
    var myChart = echarts.init(document.getElementById('mzrk'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#002cff'
                }
            }
        },
        legend: {
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                },
            }
        },
        yAxis: {
            type: 'category',
            data: ['1953', '1964', '1982', '1990', '2000', '2010', '2020'].reverse(),
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                },
            }

        },
        series: [{
                name: '汉族人口占比（%）',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    fontSize: 18
                },
                emphasis: {
                    focus: 'series'
                },
                data: [93.08, 92.85, 92.56, 91.18, 91.15, 91.43, 91.09].reverse(),
                itemStyle: {
                    color: '#EE6666'
                },
            },
            {
                name: '少数民族占比（%）',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true,
                    fontSize: 18
                },
                emphasis: {
                    focus: 'series'
                },
                data: [6.01, 5.68, 6.62, 7.98, 8.40, 8.49, 8.89].reverse(),
                itemStyle: {
                    color: '#3BA272'
                },
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function jthgm() {
    var myChart = echarts.init(document.getElementById('jthgm'));
    option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                let res = params[0].name + '年平均家庭户规模:' + params[0].value + "人"
                return res
            }
        },
        xAxis: {
            type: 'category',
            data: [1953, 1964, 1982, 1990, 2000, 2010, 2020],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg' //x轴的hover背景色
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //x轴的数值颜色
                    fontSize: 20
                },
            }
        },
        yAxis: {
            name: '平均家庭户规模（人）',
            nameTextStyle: { color: '#fff' },
            type: 'value',
            min: 0,
            max: 5,
            interval: 1,
            // splitLine:{show:false},
            // splitArea:{show:true},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg',
                }
            },
            axisLabel: {
                formatter: '{value} ',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: [4.33, 4.43, 4.41, 3.96, 3.44, 3.1, 2.62],
            type: 'line',
            smooth: true,
            itemStyle: {
                normal: {
                    color: '#EE6666',
                    lineStyle: {
                        color: "#98dbc8",
                        width: 5
                    },
                    label: {
                        show: true,
                        fontSize: 18,
                        color: '#fff'
                    },
                }
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

// 地区人口情况
function ssrk() {
    var myChart = echarts.init(document.getElementById('ssrk'));
    const colors = ['#F9CF67', '#E92B77'];
    option = {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
                fontSize: 20
            }
        },
        legend: {
            textStyle: {
                color: '#fff',
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            data: ['北京', '天津', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '上海', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '重庆', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆'],
            axisLabel: {
                show: true,
                rotate: 40,
                textStyle: {
                    color: '#fff',
                    fontSize: 20

                }
            }
        },
        yAxis: {
            type: 'value',
            name: '人口量（万人）',
            nameTextStyle: { color: '#fff' },
            position: 'left',
            min: -1000,
            max: 13000,
            interval: 1000,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            },
            splitLine: {
                show: false
            }
        },
        series: [{
                name: '2010年人口数（万人）',
                type: 'bar',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#fa7264',
                    fontSize: 20
                },
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [1961, 1294, 7185, 3571, 2471, 4375, 2746, 3831, 2302, 7866, 5443, 5950, 3689, 4457, 9579, 9402, 5724, 6568, 10430, 4603, 867, 2885, 8042, 3475, 4597, 300, 3733, 2558, 563, 630, 2181]
            },
            {
                name: '2010-2020年增加人口数（万人）',
                type: 'bar',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#ffdf6c',
                    fontSize: 20
                },
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [228, 93, 276, -79, -66, -116, -339, -646, 185, 609, 1014, 153, 465, 62, 574, 535, 51, 76, 2171, 410, 141, 320, 325, 381, 124, 65, 220, -56, 29, 90, 404]
            },
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}

function qyrk() {
    var myChart = echarts.init(document.getElementById('qyrk'));
    option = {
        tooltip: {
            trigger: 'axis',
        },
        legend: {
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            name: '区域人口数占比（%）',
            nameTextStyle: { color: '#fff' },
            splitLine: {
                show: false
            },
            type: 'value',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 15
                },
            },
            min: 0,
            max: 100,
            interval: 20,
        },
        yAxis: {
            type: 'category',
            data: [],
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#000'
                }
            },
        },
        series: [{
                name: '东部地区',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                barWidth: 80,
                emphasis: {
                    focus: 'series'
                },
                data: [39.93],
                itemStyle: {
                    color: '#82b068'
                },
                label: {
                    show: true,
                    fontSize: 18
                },
            },
            {
                name: '西部地区',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [27.12],
                itemStyle: {
                    color: '#e6695c'
                },
                label: {
                    show: true,
                    fontSize: 18
                },
            },
            {
                name: '中部地区',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [25.81],
                itemStyle: {
                    color: '#e1b64c'
                },
                label: {
                    show: true,
                    fontSize: 18
                },
            },
            {
                name: '东北地区',
                type: 'bar',
                stack: 'total',
                label: {
                    show: true
                },
                emphasis: {
                    focus: 'series'
                },
                data: [6.98],
                itemStyle: {
                    color: '#62a9cd'
                },
                label: {
                    show: true,
                    fontSize: 18
                },
            },
        ]
    };
    myChart.setOption(option);

}

// 人口性别构成情况
function zrkxb() {
    var myChart = echarts.init(document.getElementById('zrkxb'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + ' 男女性别比: ' + params[0].value + "%"
            }
        },
        xAxis: {
            type: 'value',
            name: '性别比（%）',
            min: 104,
            max: 108,
            interval: 0.5,
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                },
            }
        },
        yAxis: {
            type: 'category',
            name: '年份',
            nameTextStyle: { color: '#fff' },
            data: ['1953', '1964', '1982', '1990', '2000', '2010', '2020'].reverse(),
            axisLabel: {
                formatter: '{value} ',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            }
        },
        series: [{
            data: [107.55, 105.2, 106.19, 106.27, 106.74, 105.21, 105.09].reverse(),
            type: 'bar',
            itemStyle: {
                color: '#85c269'
            },
            label: {
                show: true,
                fontSize: 20
            },
        }]
    };
    myChart.setOption(option);

}

function csxb() {
    var myChart = echarts.init(document.getElementById('csxb'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + '出生性别比: ' + params[0].value + "%"
            }
        },
        xAxis: {
            type: 'category',
            name: '年份',
            nameTextStyle: { color: '#fff' },
            splitLine: {
                show: false
            },
            data: ['1953年', '1964年', '1982年', '1990年', '2000年', '2010年', '2020年'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg' //x轴的hover背景色
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //x轴的数值颜色,
                    fontSize: 20
                },
            }
        },
        yAxis: {
            type: 'value',
            name: '出生性别比(%)',
            nameTextStyle: { color: '#fff' },
            splitLine: {
                show: false
            },
            min: 100,
            max: 120,
            interval: 5,
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg' //x轴的hover背景色
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //x轴的数值颜色
                    fontSize: 20
                },
            }
        },
        series: [{
                data: [104.88, 103.83, 108.5, 111.27, 116.86, 117.94, 111.3],
                type: 'line',
                smooth: true,
                tooltip: {
                    valueFormatter: function(value) {
                        return value + ' %';
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#EE6666',
                        lineStyle: {
                            width: 8 // 0.1的线条是非常细的了
                        },
                        label: {
                            show: true,
                            color: '#fff'
                        }
                    }
                },
            },
            {
                type: 'line',
                markLine: {
                    symbol: ['none'],
                    silent: true,
                    lineStyle: {
                        normal: {
                            type: 'solid', // 线的类型（实线、虚线、点线）
                            color: '#bdc54f',
                            width: 3,
                        }
                    },
                    data: [{
                        yAxis: 107
                    }],
                    label: {
                        normal: {
                            formatter: '标准值107', // 这儿设置安全基线
                            fontSize: 13
                        },

                    },
                },
            },
            {
                type: 'line',
                markLine: {
                    symbol: ['none'],
                    silent: true,
                    lineStyle: {
                        normal: {
                            type: 'solid', // 线的类型（实线、虚线、点线）
                            color: '#bdc54f',
                            width: 3,
                        }
                    },
                    data: [{
                        yAxis: 102
                    }],
                    label: {
                        normal: {
                            formatter: '标准值102', // 这儿设置安全基线
                            fontSize: 13
                        }
                    },
                },
            }
        ]
    };
    myChart.setOption(option);

}

// 人口年龄构成情况
function qgnlgc() {
    var myChart = echarts.init(document.getElementById('qgnlgc'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            }
        },
        legend: {
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '8%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'value',
            name: '各年龄段人口占比(%)',
            nameTextStyle: {
                color: '#fff',
                fontSize: 10
            },
            position: 'left',
            min: 0,
            max: 100,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            }
        }],
        yAxis: {
            type: 'category',
            data: ['1953', '1964', '1982', '1990', '2000', '2010', '2020'].reverse(),
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                }
            }
        },
        series: [{
                name: '0-14岁人口占比（%）',
                type: 'bar',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#fa7264'
                },
                stack: 'total',
                label: {
                    show: true,
                    fontSize: 18
                },
                emphasis: {
                    focus: 'series'
                },
                data: [36.28, 40.69, 33.59, 27.69, 22.89, 16.6, 17.95].reverse()
            },
            {
                name: '15-64岁人口占比（%）',
                type: 'bar',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#47ac5c'
                },
                stack: 'total',
                label: {
                    show: true,
                    fontSize: 18
                },
                emphasis: {
                    focus: 'series'
                },
                data: [56.4, 53.18, 58.79, 63.79, 66.78, 70.14, 63.35].reverse()
            },
            {
                name: '65岁及以上人口占比（%）',
                type: 'bar',
                yAxisIndex: 0,
                itemStyle: {
                    color: '#3f5aa0'
                },
                stack: 'total',
                label: {
                    show: true,
                    fontSize: 18
                },
                emphasis: {
                    focus: 'series'
                },
                data: [7.32, 6.13, 7.62, 8.57, 10.33, 13.26, 18.7].reverse()
            }


        ]
    };


    myChart.setOption(option);


}

function rkfyb() {
    var myChart = echarts.init(document.getElementById('rkfyb'));
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['总抚养比', '少儿抚养比', '老年抚养比'],
            textStyle: {
                color: '#fff'
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            name: '年份',
            nameTextStyle: { color: '#fff' },
            type: 'category',
            data: [2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg' //x轴的hover背景色
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff', //x轴的数值颜色
                    fontSize: 20
                },
            }
        },
        yAxis: {
            name: '抚养比（%）',
            nameTextStyle: { color: '#fff' },
            type: 'value',
            min: 0,
            max: 50,
            interval: 10,
            // splitLine:{show:false},
            // splitArea:{show:true},
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg',
                }
            },
            axisLabel: {
                formatter: '{value} ',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            }
        },
        series: [{
                name: '总抚养比',
                type: 'line',
                data: [34.4, 34.89, 35.3, 36.2, 37, 37.9, 39.3, 40.4, 41.5, 45.9],
                itemStyle: {
                    normal: {
                        color: '#fdce61',
                        lineStyle: {
                            color: "#ffce57",
                            width: 5
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#fff'
                        },
                    }
                }
            },
            {
                name: '少儿抚养比',
                type: 'line',
                data: [22.1, 22.2, 22.2, 22.5, 22.6, 22.9, 23.4, 23.7, 23.8, 26.2],
                itemStyle: {
                    normal: {
                        color: '#fdce61',
                        lineStyle: {
                            color: "#fd7062",
                            width: 5
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#fff'
                        },
                    }
                }
            },
            {
                name: '老年抚养比',
                type: 'line',
                data: [12.3, 12.7, 13.1, 13.7, 14.3, 15, 15.9, 16.8, 17.8, 19.7],
                itemStyle: {
                    normal: {
                        color: '#fdce61',
                        lineStyle: {
                            color: "#4f74c7",
                            width: 5
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#fff'
                        },
                    }
                }
            },
        ]
    };
    myChart.setOption(option);


}

// 人口受教育程度情况
function sjycd() {
    var myChart = echarts.init(document.getElementById('sjycd'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        legend: {
            data: ['大专及以上 (10万人)', '高中（含中专）(10万人)', '初中 (10万人)', '小学 (10万人)'],
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        xAxis: [{
            type: 'category',
            data: ['1964', '1982', '1990', '2000', '2010', '2020'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
                lineStyle: {
                    color: '#fff'
                }
            },
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
            type: 'value',
            name: '人数/(十万人)',
            nameTextStyle: { color: '#fff' },
            min: 0,
            max: 40000,
            interval: 5000,
            splitLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} ',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                },
                lineStyle: {
                    color: '#fff'
                }
            }
        }],
        series: [{
                name: '大专及以上 (10万人',
                type: 'bar',
                tooltip: {
                    valueFormatter: function(value) {
                        return value + ' 十万人';
                    }
                },
                data: [
                    416, 1615, 1422, 3611, 8930, 15467
                ],
                itemStyle: {
                    color: '#fa7266'
                }
            },
            {
                name: '高中（含中专）(10万人)',
                type: 'bar',
                tooltip: {
                    valueFormatter: function(value) {
                        return value + ' 十万人';
                    }
                },
                data: [
                    1319, 6779, 8039, 11146, 14032, 15088
                ],
                itemStyle: {
                    color: '#ff8c4d'
                }
            },
            {
                name: '初中 (10万人)',
                type: 'bar',
                tooltip: {
                    valueFormatter: function(value) {
                        return value + ' 十万人';

                    }
                },
                data: [
                    4680, 17892, 23344, 33961, 38788, 34507
                ],
                itemStyle: {
                    color: '#8fc172'
                }
            },
            {
                name: '小学 (10万人)',
                type: 'bar',
                tooltip: {
                    valueFormatter: function(value) {
                        return value + '十万人';
                    }
                },
                data: [
                    28330, 35237, 37057, 35701, 26779, 24767
                ],
                itemStyle: {
                    color: '#ffc553'
                }
            },
        ]

    };
    myChart.setOption(option);


}

function wml() {
    var myChart = echarts.init(document.getElementById('wml'));
    option = {
        tooltip: {

            trigger: 'item',
            formatter: "{b}文盲率：{c} % "

        },
        legend: {
            top: 'bottom',
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        series: [{
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 7
            },
            labelLine: {
                normal: {
                    length: 3, // 改变标示线的长度
                    lineStyle: {
                        color: "#fff" // 改变标示线的颜色
                    }
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#fff', // 改变标示文字的颜色
                        fontSize: 20
                    }
                }
            },
            data: [
                { value: 33.58, name: '1964年' },
                { value: 22.81, name: '1982年' },
                { value: 15.88, name: '1990年' },
                { value: 6.72, name: '2000年' },
                { value: 4.08, name: '2010年' },
                { value: 2.67, name: '2020年' }
            ],
            color: ['#339470', '#fa7264', '#6cbae1', '#ce422e', '#ff8d4f', '#ffd25a']
        }]
    };


    myChart.setOption(option);


}
// 城乡人口和流动人口情况
function cxrk() {
    var myChart = echarts.init(document.getElementById('cxrk'));
    option = {
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
            data: ['城镇人口（万人）', '乡村人口（万人）', '城镇人口比重（%）'],
            selected: {
                '城镇人口比重（%）': false,
                '城镇人口（万人）': true,
                '乡村人口（万人）': false
            },
            textStyle: {
                color: '#fff',
                fontSize: 20
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['1953', '1964', '1982', '1990', '2000', '2010', '2020'],
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
                lineStyle: {
                    color: '#fff'
                }
            },
            axisPointer: {
                type: 'shadow'
            }
        }],
        yAxis: [{
                type: 'value',
                name: '人口量（万人）',
                nameTextStyle: { color: '#fff' },
                min: 0,
                max: 100000,
                interval: 20000,
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} ',
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    },
                    lineStyle: {
                        color: '#fff'
                    }
                }
            },
            {
                type: 'value',
                name: '人口比重（%）',
                min: 0,
                max: 70,
                interval: 10,
                splitLine: { show: false },
                axisLine: {
                    lineStyle: {
                        type: 'solid',
                        color: '#bfg',
                    }
                },
                axisLabel: {
                    formatter: '{value} ',
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 20
                    }
                }
            }
        ],
        series: [{
                name: '城镇人口（万人）',
                type: 'line',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [7726, 12710, 21082, 29971, 45844, 66557, 90199],
                itemStyle: {
                    normal: {
                        color: '#062e9a',
                        lineStyle: {
                            width: 4
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#fff'
                        },

                    }
                }
            },
            {
                name: '乡村人口（万人）',
                type: 'line',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [50534, 56748, 79736, 83397, 80739, 67415, 50979],
                itemStyle: {
                    normal: {
                        color: '#6fa75c',
                        lineStyle: {
                            width: 4
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#ff'
                        },

                    }
                }
            },
            {
                name: '城镇人口比重（%）',
                type: 'line',
                yAxisIndex: 1,
                data: [13.26, 18.3, 20.91, 26.44, 36.22, 49.68, 63.89],
                itemStyle: {
                    normal: {
                        color: '#f5d06c',
                        lineStyle: {
                            width: 4
                        },
                        label: {
                            show: true,
                            fontSize: 18,
                            color: '#fff'
                        },
                    }
                }
            },

        ]
    };
    myChart.setOption(option);


}

function ldrk() {
    var myChart = echarts.init(document.getElementById('ldrk'));
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            }
        },
        legend: {
            textStyle: {
                color: '#fff',
                fontSize: 20
            },
            date: ['人户分离人口', '流动人口']
        },
        xAxis: {
            type: 'value',
            name: '（万人）',
            min: 0,
            max: 50000,
            interval: 10000,
            axisPointer: {
                type: 'shadow',
                color: '#fff'
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#bfg'
                }
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                },
            }
        },
        yAxis: {
            type: 'category',
            name: '年份',
            nameTextStyle: { color: '#fff' },
            data: ['2000', '2010', '2020'].reverse(),
            axisLabel: {
                formatter: '{value} ',
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 20
                }
            }
        },
        series: [{
                name: '人户分离人口',
                data: [14439, 26139, 49276].reverse(),
                tooltip: {
                    valueFormatter: function(value) {
                        return '人户分离:' + value + '(万人)';
                    }
                },
                type: 'bar',
                itemStyle: {
                    color: '#EE6666'
                }
            },
            {
                name: '流动人口',
                data: [12107, 22143, 37583].reverse(),
                tooltip: {
                    valueFormatter: function(value) {
                        return '流动人口:' + value + '(万人)';
                    }
                },
                type: 'bar',
                itemStyle: {
                    color: '#FCD25C'
                }
            }

        ]
    };

    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
}