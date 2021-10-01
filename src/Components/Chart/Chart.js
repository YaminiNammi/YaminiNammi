import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumOfValues = Math.max(...dataPointValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint)=> (
                <ChartBar value={dataPoint.value} 
                maxValue={maximumOfValues} 
                label={dataPoint.label}/>
            ))}
        </div>
    );
};
export default Chart;