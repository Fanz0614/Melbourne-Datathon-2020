import ReactEcharts from 'echarts-for-react';
import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from './store/actionCreators.js'

class Echarts extends React.Component{
    
    
    render(){
        const{NSW_data}=this.props;
        const{temp_data}=this.props;

        const NSW_date=[];
        const NSW_demand=[];
        const NSW_RRP=[];
        NSW_data.forEach((item)=>{
            NSW_date.push(item.date)
            NSW_demand.push(item.TOTALDEMAND)
            NSW_RRP.push(item.RRP)
        })

        const temp_date=[];
        const temp_min=[];
        const temp_max=[];
        const temp_avg=[];
        temp_data.forEach((item)=>{
            temp_date.push(item.Date)
            temp_min.push(item.MinTemp)
            temp_max.push(item.MaxTemp)
            temp_avg.push(item.AvgTemp)
        })

        
        return(
            <div>
                <ReactEcharts 
                
                option = {{
                    title: {
                        text: 'NSW',
                        subtext: 'Electricity total demand and RRP',
                        left: 'center'
                    },
                    tooltip: {
                        trigger: 'axis',
                        axisPointer: {
                            animation: false
                        }
                    },
                    legend: {
                        data: ['RRP', 'Demand'],
                        left: 10
                    },
                    toolbox: {
                        feature: {
                            dataZoom: {
                                yAxisIndex: 'none'
                            },
                            restore: {},
                            saveAsImage: {}
                        }
                    },
                    axisPointer: {
                        link: {xAxisIndex: 'all'}
                    },
                    dataZoom: [
                        {
                            show: true,
                            realtime: true,
                            start: 30,
                            end: 70,
                            xAxisIndex: [0, 1]
                        },
                        {
                            type: 'inside',
                            realtime: true,
                            start: 30,
                            end: 70,
                            xAxisIndex: [0, 1]
                        }
                    ],
                    grid: [{
                        left: 70,
                        right:70,
                        height: '35%'
                    }, {
                        left: 70,
                        right: 70,
                        top: '55%',
                        height: '35%'
                    }],
                    xAxis: [
                        {
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: NSW_date
                        },
                        {
                            gridIndex: 1,
                            type: 'category',
                            boundaryGap: false,
                            axisLine: {onZero: true},
                            data: NSW_date,
                            
                        }
                    ],
                    yAxis: [
                        {
                            name: 'RRP',
                            type: 'value',
                            max: 6000
                        },
                        {
                            gridIndex: 1,
                            name: 'Demand',
                            type: 'value',
                            inverse: true
                        }
                    ],
                    series: [
                        {
                            name: 'RRP',
                            type: 'line',
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: NSW_RRP
                        },
                        {
                            name: 'Demand',
                            type: 'line',
                            xAxisIndex: 1,
                            yAxisIndex: 1,
                            symbolSize: 8,
                            hoverAnimation: false,
                            data: NSW_demand
                        }
                    ]
                }}
                
                
                />
                <ReactEcharts 
                    option = {{
                       
                    
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'cross'
                            }
                        },
                        grid: {
                            right: '20%'
                        },
                        toolbox: {
                            feature: {
                                dataView: {show: true, readOnly: false},
                                magicType: {show: true, type: ['line', 'bar']},
                                restore: {show: true},
                                saveAsImage: {show: true}
                            }
                        },
                        legend: {
                            data: ['MIN', 'MAX', 'AVG']
                        },
                        xAxis: [
                            {
                                type: 'category',
                                axisTick: {
                                    alignWithLabel: true
                                },
                                data: temp_date
                            }
                        ],
                        yAxis: [
                            {
                                type: 'value',
                                name: 'MIN',
                                min: 0,
                                max: 40,
                                position: 'right',
                                axisLine: {
                                    lineStyle: {
                                        color: '#5793f3'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} °C'
                                }
                            },
                            {
                                type: 'value',
                                name: 'MAX',
                                min: 0,
                                max: 40,
                                position: 'right',
                                offset: 80,
                                axisLine: {
                                    lineStyle: {
                                        color: '#d14a61'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} °C'
                                }
                            },
                            {
                                type: 'value',
                                name: 'AVG',
                                min: 0,
                                max: 40,
                                position: 'left',
                                axisLine: {
                                    lineStyle: {
                                        color: '#675bba'
                                    }
                                },
                                axisLabel: {
                                    formatter: '{value} °C'
                                }
                            }
                        ],
                        series: [
                            {
                                name: 'MAX',
                                type: 'bar',
                                data: temp_max
                            },
                            {
                                name: 'MIN',
                                type: 'bar',
                                yAxisIndex: 1,
                                data: temp_min
                            },
                            {
                                name: 'AVG',
                                type: 'line',
                                yAxisIndex: 2,
                                data: temp_avg
                            }
                        ]
                    }}
                />
            </div>
        )
    }
    componentDidMount(){
        this.props.getData();
        this.props.Tempdata();
        
    }
}
const mapState=(state)=>({
    NSW_data:state.echart.get('NSW'),
    temp_data:state.echart.get('temp')
    
})

const mapDispatch=(dispatch)=>({
    // getDeatil(id){
    //     dispatch(actionCreators.getDetail(id))
    // }
    getData(){
        dispatch(actionCreators.get_Data())
    },
    Tempdata(){
        dispatch(actionCreators.get_tempdata())
    }
    
})
export default connect(mapState,mapDispatch)(Echarts);