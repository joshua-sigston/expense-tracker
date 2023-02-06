import style from './chart.module.css'

import ChartBar from './ChartBar'

const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMax = Math.max(...dataPointValues)
    return (
        <div className={style.chart_container}>
            {props.dataPoints.map(dataPoint => <ChartBar    value={dataPoint.value} 
                                                            maxValue={totalMax} 
                                                            label={dataPoint.label}
                                                            key={Math.random()}/>)
            }
        </div>
    )
}

export default Chart