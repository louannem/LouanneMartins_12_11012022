import React from "react";
import "../../utils/styles/Sidebar.css"

class Card extends React.Component {
    render() {
        return(
            <div className="sidebar-block">
                <img src={this.props.img} alt=""/>
                <div className="block-content">
                    <span className="value-wrapper">{this.props.value}</span>
                    <span className="type-wrapper">{this.props.type}</span>
                </div>
            </div>
        )
    }
}

export default Card