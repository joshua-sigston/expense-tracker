import style from './chartBar.module.css'

const ChartBar = (props) => {
    let barHeight = '0%'

    barHeight = props.maxValue > 0 ? barHeight = (props.value / props.maxValue) * 100 + '%' : barHeight

    return(
        <div className={style.bar_container}>
            <div className={style.chart_bar__inner}>
                <div className={style.chart_bar__fill} style={{height: barHeight}}></div>
            </div>
            <div className={style.chart_bar__label}>{props.label}</div>
        </div>
    )
}

export default ChartBar