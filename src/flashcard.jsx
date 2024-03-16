import './flashcard.css';
import amendments from './amendments.json'

const Flashcard = (props) => {

    const element = amendments[props.index];

    return (
    <div className={`flashcard ${props.side ? 'flipped' : ''}`}>
        <div className="back">
            <p>Amendment {element.Amendment}</p>
        </div>
        <div className="front">
            <h1>{element.Description}</h1>
        </div>
    </div>
  )
}

export default Flashcard