import React from 'react'
import Navibar from "../../components/navigationbar";

class StoreSetting extends React.Component{
    componentDidMount() {
        window.scrollTo({top: 0,behavior: 'smooth'})
    }

    render() {
        return (
            <React.Fragment>
                <h1 style={{textAlign: 'center'}}>商家設定</h1>
                <Navibar />
            </React.Fragment>
        )
    }
}

export default StoreSetting