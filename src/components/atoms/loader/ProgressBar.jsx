import { IonProgressBar } from "@ionic/react"
import './ProgressBar.css'

const ProgressBar = ({value, style = {}}) => { 
    return ( 
        <IonProgressBar value={value} className={value === 1 ? `full-green` : 'progress-bar'} style={style}></IonProgressBar>
    )
} 

export default ProgressBar 