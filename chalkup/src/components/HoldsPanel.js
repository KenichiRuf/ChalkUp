import React from 'react'

import styled from 'styled-components'

import theme from '../theme'
import Hold from './Hold'
import Foot from '../images/holds/foot1.png'

const HoldsContainer = styled.div`
    width: 20%;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
    background: grey;
`

class HoldsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { holds: [{src:Foot}] }
    }
    render() {
        return (
            <HoldsContainer>
                {this.state.holds.map(hold=>{
                    return <Hold src={hold.src} />
                })}
            </HoldsContainer>
        );
    }
}
 
export default HoldsPanel;