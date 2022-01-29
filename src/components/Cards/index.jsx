import propTypes from "prop-types";
import "../../utils/styles/Cards.css"

export default function Cards({img, value, type}) {
    return(
        <div className="cards-block">
            <img src={img} alt=""/>
            <div className="block-content">
                <span className="value-wrapper">{value}</span>
                <span className="type-wrapper">{type}</span>
            </div>
        </div>
    )
}

Cards.propTypes = {
    img: propTypes.string.isRequired,
    value: propTypes.string.isRequired,
    type: propTypes.string.isRequired
}