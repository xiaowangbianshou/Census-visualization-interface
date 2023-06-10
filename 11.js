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