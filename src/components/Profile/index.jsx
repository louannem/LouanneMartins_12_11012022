import React from "react"
import "../../utils/styles/Profile.css"

class Profile extends React.Component {
    render() {
        return(
            <div className="profile-wrapper">

                <div className="profile-title">
                    <h1>Bonjour <span>Thomas</span></h1>
                    <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
                </div>

                <div className="profile-content">
                    <div className="graph-wrapper"></div>
                    <div className="stats-wrapper"></div>
                </div>
            </div>
        )
    }
}

export default Profile