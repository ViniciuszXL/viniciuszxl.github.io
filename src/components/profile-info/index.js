import React, { Component } from "react";

// Info //
import Info from '../../profile.json'

class ProfileInfo extends Component {
    
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.state = Info;
    }

    render() {
        return (
            <>
                <h1>Olá mundo!</h1>
            </>
        )
    }

}

export default ProfileInfo