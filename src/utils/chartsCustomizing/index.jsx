import propTypes from "prop-types"

/**
 * 
 * @param {string} param0 BarChart title  
 * @returns Title in svg format
 */
export const BarCustomTitle = ({title}) => {
  return (          
        <text x={110} y={40} dy={0} fill="#20253A" fontWeight={600} fontSize={15} textAnchor="middle">{title}</text>
  )
}

BarCustomTitle.propTypes = {
  title: propTypes.string
}



/******************************************************************************************* */

/**
 * Custom RadialChart label rendered at the center of the chart
 * @param {props} viewBox container area
 * @param {props} line1 first line added to the custom label
 * @param {props} line2 second line added to the custom label
 * @returns svg block containing a circle, line1 and line2
 */
export const RadialCustomLabel = ({viewBox, line1}) => {
  const {cx, cy} = viewBox;
  return (
      <svg>
          <circle cx="50%" cy="50%" r="80" strokeWidth="0" fill="white" />
          <text x={cx} y={cy-10} fill="#3d405c" className="recharts-text recharts-label" textAnchor="middle" dominantBaseline="central">
              <tspan alignmentBaseline="middle" fontSize="26" fontWeight={600}>{line1}</tspan>
              <tspan fontSize="16" x={cx} dy="24" fill="#74798C">de votre objectif</tspan>
          </text>
      </svg>
  )
}

RadialCustomLabel.propTypes = {
  viewBox: propTypes.object,
  line1: propTypes.string.isRequired,
}


/********************************************************************************************************* */


/**
 * Customized tootlip for BarChart
 * @param {props} active boolean wheckinf if tooltip is displayed 
 * @param {props} payload source of the fetched data 
 * @returns Custom content in BarChart Tootlip
 */
export const BarTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-barchart-tooltip">
        <p className="poids">{`${payload[0].value}`}Kg</p>
        <p className='calories'>{`${payload[1].value}`}Kcal</p>
      </div>
    )
  }
  return null
}

BarTooltip.propTypes = {
  payload: propTypes.array
}


/********************************************************************************************************* */


/**
 * Customized tootlip for LineChart
 * @param {props} active boolean checking if tooltip is displayed 
 * @param {props} payload source of the fetched data 
 * @returns Custom content in LineChart Tootlip
 */
  export const LineTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
          <div className="custom-line-chart-tooltip">
            <p className="poids">{`${payload[0].value}`} min</p>
          </div>
        )
    }
    return null
  }

  LineTooltip.propTypes = {
    payload: propTypes.array
  }


/********************************************************************************************************* */


/**
* Adds custom XAxis labels to the LineChart
* @param {string} day array element
* @returns the daysArray array
*/
export function addLineDays(day) {
  const daysArray = [
    "L",
    "M",
    "M",
    "J",
    "V",
    "S",
    "D"
  ]
  return daysArray[day - 1]
}
  

/********************************************************************************************************* */

export function addBarAxis(day) {
  const axisArray = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10"
  ]
  return axisArray[day]
}

