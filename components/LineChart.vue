<template>
    <div ref="chartContainer" class="chart-container"></div>
</template>
  
<script>
import {
    ref,
    onMounted,
    watch,
} from 'vue';
import * as echarts from 'echarts';

const timelineData = {
  cl: [99.0, 99.0, 100.0, 102.0, 102.0, 102.0, 98.0, 101.0, 99.9, 100.0, 102.0, 102.0, 100.0, 98.0, 92.0, 96.0, 101.0, 101.0, 93.0, 96.0, 101.0, 97.0, 101.0, 97.0, 102.0, 100.0, 99.0, 100.0, 99.0, 96.0, 98.0],
  co2cp: [22.9, 22.9, 25.6, 24.5, 24.5, 26.3, 22.5, 22.2, 24.0, 22.6, 24.3, 24.3, 21.7, 26.4, 26.6, 29.0, 26.7, 26.7, 27.7, 26.2, 25.9, 26.8, 22.6, 23.2, 24.3, 23.1, 25.1, 26.3, 25.0, 20.4, 18.7],
  wbc: [8.2, 8.4, 8.67, 7.7, 7.3, 7.3, 7.71, 8.64, 8.75, 6.76, 7.5, 6.54, 8.4, 8.21, 11.3, 9.5, 8.9, 8.9, 8.02, 8.17, 8.06, 8.06, 7.73, 7.73, 7.54, 7.32, 8.23, 6.66, 8.04, 9.6, 8.6],
  hb: [91.0, 103.0, 117.0, 137.0, 161.0, 90.0, 118.0, 109.0, 123.0, 118.0, 121.0, 119.0, 109.0, 115.0, 130.0, 125.0, 118.0, 118.0, 116.0, 111.0, 118.0, 118.0, 122.0, 122.0, 125.0, 119.0, 129.0, 118.0, 113.0, 115.0, 133.0],
  urea: [24.0, 24.0, 22.1, 24.2, 24.0, 27.8, 27.8, 30.5, 30.5, 31.6, 24.5, 24.5, 24.5, 28.5, 15.8, 20.3, 26.3, 30.9, 21.4, 31.8, 28.3, 15.7, 22.8, 26.1, 25.5, 26.5, 22.9, 21.9, 26.3, 19.6, 15.2],
  ca: [2.43, 2.43, 2.47, 2.52, 2.5, 2.38, 2.38, 2.32, 2.32, 2.34, 2.36, 2.36, 2.36, 2.46, 2.41, 2.41, 2.46, 2.29, 2.53, 2.54, 2.49, 2.42, 2.37, 2.53, 2.56, 2.51, 2.77, 2.52, 2.63, 2.61, 2.43],
  k: [3.74, 3.74, 3.75, 3.67, 3.55, 4.41, 4.41, 4.13, 4.13, 3.61, 3.72, 3.72, 3.72, 3.62, 3.74, 4.17, 4.63, 4.63, 4.33, 3.72, 3.86, 3.71, 3.53, 3.65, 4.55, 4.33, 3.78, 3.85, 4.55, 3.58, 3.11],
  na: [141.5, 141.5, 139.2, 140.3, 139.6, 141.0, 141.0, 141.0, 141.0, 142.0, 143.0, 143.0, 143.0, 136.0, 132.0, 138.0, 139.0, 139.0, 132.0, 138.0, 140.0, 139.0, 140.0, 137.0, 142.0, 140.0, 141.0, 140.0, 140.0, 137.0, 136.0],
  scr: [1114.0, 1114.0, 1189.0, 1084.0, 1087.0, 1009.0, 1009.0, 1104.0, 1104.0, 1181.0, 1031.0, 1031.0, 1031.0, 961.0, 841.0, 991.0, 954.0, 916.0, 892.0, 912.0, 852.0, 913.0, 822.0, 833.0, 795.0, 838.0, 881.0, 850.0, 776.0, 778.0, 768.0],
  p: [2.33, 2.33, 1.75, 1.61, 2.21, 1.88, 1.88, 2.34, 2.34, 2.01, 2.17, 2.17, 2.17, 2.2, 1.51, 1.9, 1.53, 2.03, 1.76, 1.91, 1.55, 1.63, 2.05, 1.33, 1.88, 1.81, 1.96, 1.99, 1.9, 1.86, 1.42],
  albumin: [41.0, 41.0, 40.0, 41.0, 40.0, 38.0, 38.0, 39.0, 39.0, 37.0, 37.0, 37.0, 37.0, 37.0, 35.5, 37.6, 38.3, 38.3, 35.3, 35.6, 36.0, 36.0, 35.4, 34.5, 35.6, 34.3, 35.2, 33.0, 35.4, 31.8, 30.2],
  crp: [0.07, 0.07, 0.08, 0.08, 3.81, 3.81, 2.25, 8.66, 7.43, 2.83, 5.11, 5.11, 20.25, 16.8, 15.39, 12.5, 11.44, 11.44, 9.24, 9.24, 2.83, 2.83, 13.57, 13.57, 13.57, 13.57, 2.05, 1.76, 1.76, 12.93, 7.17],
  glucose: [8.6, 8.6, 5.6, 6.3, 6.0, 7.3, 7.3, 8.1, 8.1, 5.6, 8.2, 8.2, 8.2, 11.3, 11.3, 9.3, 7.8, 7.8, 6.7, 6.7, 8.6, 8.6, 8.6, 8.6, 8.6, 9.4, 11.5, 8.9, 11.4, 16.8, 14.7],
  appetite: [2073.78, 2778.0, 2173.24, 1019.5, 1019.5, 1019.5, 3278.07, 1355.89, 2834.46, 2834.46, 2834.46, 2907.1, 2907.1, 2907.1, 2474.7, 2474.7, 2474.7, 2474.7, 2474.7, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67, 3495.67],
  weight: [68.55, 68.09, 67.78, 67.15, 66.8, 66.34, 65.36, 64.97, 64.23, 64.05, 63.6, 63.14, 62.68, 62.2, 65.0, 65.0, 63.0, 63.15, 68.0, 67.22, 66.42, 65.71, 64.0, 64.31, 66.0, 64.81, 61.0, 61.0, 64.0, 64.0, 64.0],
  sbp: [130.0, 160.0, 130.0, 145.0, 145.0, 154.0, 158.0, 135.0, 130.0, 140.0, 150.0, 150.0, 150.0, 150.0, 135.0, 163.0, 130.0, 175.0, 140.0, 140.0, 140.0, 145.0, 140.0, 140.0, 140.0, 140.0, 135.0, 135.0, 137.0, 130.0, 130.0],
  dbp: [80.0, 90.0, 70.0, 80.0, 80.0, 80.0, 80.0, 90.0, 75.0, 90.0, 80.0, 80.0, 85.0, 95.0, 80.0, 106.0, 85.0, 105.0, 83.0, 83.0, 90.0, 90.0, 80.0, 80.0, 90.0, 87.0, 80.0, 84.0, 80.0, 80.0, 85.0],
}

const indicators = {
    cl: { id: 'cl', name: '血氯', unit: 'mmol/L', value: '98.0' },
    co2cp: { id: 'co2cp', name: '二氧化碳结合力', unit: 'mmol/L', value: '18.7' },
    wbc: { id: 'wbc', name: 'WBC', unit: '×10^9/L', value: '8.6' },
    hb: { id: 'hb', name: 'HGB', unit: 'g/L', value: '133.0' },
    urea: { id: 'urea', name: 'Urea', unit: 'mmol/L', value: '15.2' },
    ca: { id: 'ca', name: 'Calcium', unit: 'mmol/L', value: '2.43' },
    k: { id: 'k', name: '血钾', unit: 'mmol/L', value: '3.11' },
    na: { id: 'na', name: 'Sodium', unit: 'mmol/L', value: '136.0' },
    scr: { id: 'scr', name: '血肌酐', unit: 'μmol/L', value: '768.0' },
    p: { id: 'p', name: 'PHOS', unit: 'mmol/L', value: '1.42' },
    albumin: { id: 'albumin', name: '白蛋白', unit: 'g/L', value: '30.2' },
    crp: { id: 'crp', name: 'hs-CRP', unit: 'mg/L', value: '7.17' },
    glucose: { id: 'glucose', name: 'Glucose', unit: 'mmol/L', value: '14.7' },
    appetite: { id: 'appetite', name: '食物摄入', unit: 'g', value: '3495.67' },
    weight: { id: 'weight', name: 'Weight', unit: 'kg', value: '64.0' },
    sbp: { id: 'sbp', name: '收缩压', unit: 'mmHg', value: '130.0' },
    dbp: { id: 'dbp', name: '舒张压', unit: 'mmHg', value: '85.0' },
}

export default {
    props: {
        time: {
            type: Array,
            default: () => ['2007-07', '2007-10', '2007-12', '2008-04', '2008-07', '2008-10', '2009-04', '2009-07', '2009-11', '2010-01', '2010-04', '2010-07', '2010-10', '2011-01', '2011-08', '2011-12', '2012-03', '2012-04', '2012-06', '2012-08', '2012-10', '2012-12', '2013-02', '2013-03', '2013-08', '2013-10', '2014-03', '2014-06', '2014-10', '2015-01', '2015-03']
        },
        f1: {
            type: String,
            default: () => "co2cp",
        },
        f2: {
            type: String,
            default: () => "albumin",
        },
        f3: {
            type: String,
            default: () => "k",
        }
    },
    setup(props) {
        const chartContainer = ref(null);
        let chartInstance = null;

        const initChart = () => {
            if (!chartContainer.value) return;
            chartInstance = echarts.init(chartContainer.value);
            const option = {
                grid: {
                    left: '10%',
                    right: '15%',
                    top: '25%',
                    height: '75%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    formatter: params => {
                        let tooltipText = '日期：' + params[0].axisValue + '<br/>';
                        params.forEach(item => {
                            let currentIndicator = Object.values(indicators).find(ind => ind.name === item.seriesName);
                            let unit = currentIndicator ? currentIndicator.unit : '';
                            tooltipText += `${item.marker}${item.seriesName}: ${item.data} ${unit}<br/>`;
                        });
                        return tooltipText;
                    },
                },
                legend: {
                    data: [indicators[props.f1].name, indicators[props.f2].name, indicators[props.f3].name],
                    top: '0',
                },
                xAxis: {
                    type: 'category',
                    data: props.time,
                    name: '日期',
                    axisLabel: {
                        interval: 4,
                        rotate: 45,
                        align: 'center',  // 设置文字对齐方式
                        margin: 30    // 调整标签与轴线的距离
                    },
                    axisTick: {
                        alignWithLabel: true
                    },
                },
                yAxis: [
                    {
                        type: 'value',
                        name: indicators[props.f1].name,
                        position: 'left',
                        offset: 5,
                        min: 'dataMin', // 自动以数据最小值为下限
                        max: 'dataMax', // 自动以数据最大值为上限
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#5470C6',
                                width: 2,
                                type: 'solid'
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        name: indicators[props.f2].name,
                        nameLocation: 'start',
                        position: 'left',
                        min: 'dataMin', // 自动以数据最小值为下限
                        max: 'dataMax', // 自动以数据最大值为上限
                        offset: 45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#91CC75',
                                width: 2,
                                type: 'solid'
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    {
                        type: 'value',
                        name: indicators[props.f3].name,
                        position: 'left',
                        offset: 85,
                        min: 'dataMin', // 自动以数据最小值为下限
                        max: 'dataMax', // 自动以数据最大值为上限
                        splitLine: {
                            show: false
                        },
                        axisLine: {
                            show: true,
                            lineStyle: {
                                color: '#EE6666',
                                width: 2,
                                type: 'solid'
                            }
                        },
                    }
                ],
                series: [{
                        name: indicators[props.f1].name,
                        type: 'line',
                        data: timelineData[props.f1],
                        smooth: true,
                        color: '#5470C6',
                        yAxisIndex: 0
                    },
                    {
                        name: indicators[props.f2].name,
                        type: 'line',
                        data: timelineData[props.f2],
                        smooth: true,
                        color: '#91CC75',
                        yAxisIndex: 1
                    },
                    {
                        name: indicators[props.f3].name,
                        type: 'line',
                        data: timelineData[props.f3],
                        smooth: true,
                        color: '#EE6666',
                        yAxisIndex: 2
                    }
                ]
            };
            chartInstance.setOption(option);
        };

        const handleResize = () => {
            chartInstance.resize();
        };

        onMounted(() => {
            initChart();
            setTimeout(() => {
                chartInstance.resize();
            }, 100);
            window.addEventListener('resize', handleResize);
        });

        watch(
            () => [props.time, timelineData[props.f1], timelineData[props.f2], timelineData[props.f3]],
            () => {
                chartInstance?.setOption({
                    xAxis: {
                        data: props.time
                    },
                    series: [{
                            data: timelineData[props.f1]
                        },
                        {
                            data: timelineData[props.f2]
                        },
                        {
                            data: timelineData[props.f3]
                        }
                    ]
                });
            }, {
                deep: true
            }
        );
        return {
            chartContainer
        };
    }
};
</script>
  
<style scoped>
.chart-container {
    width: 400px;
    height: 250px;
}
</style>
