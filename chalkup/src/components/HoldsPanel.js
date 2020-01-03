import React from 'react'

import styled from 'styled-components'

import theme from '../theme'
import Hold from './Hold'
import Foot from '../images/holds/foot1.png'

let holdNames = ['foot1', 'hand1', 'hand2']

const HoldsContainer = styled.div`
    width: 20%;
    height: 100vh;
    /* padding: ${theme.unit(1)}; */
    position: fixed;
    right: 0;
    top: 0;
    background: ${theme.colors.white};
    border-left: 2px solid ${theme.colors.highlight};
`

const HoldsTitles = styled.h4`
    display: block;
    padding: ${theme.unit(1)};
    text-align: center;
    background: ${theme.colors.highlight};
`

function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

//variables
let newList = [];
let arr = [];

// functions
function importAll(r) {
    let images = {};
    r.keys().map(item => (images[item.replace("./", "")] = r(item)));
    for (let i = 0; i < Object.keys(holdNames).length; i++) {
        let value = holdNames[i].toLowerCase().split` `.join`_`;
        value += ".png";
        let x = getKeyByValue(images, images[value]);
        let obj = {};
        obj.name = x;
        obj.value = images[value];
        obj.type = x.slice(0, 4);
        newList.push(obj);
    }
    return newList;
}

const images = importAll(
    require.context("../images/holds/", false, /\.(png|jpe?g|svg)$/)
);

console.log(images)

class HoldsPanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { holds: images }
    }
    render() {
        const handHolds = this.state.holds.filter(hold=>hold.type == 'hand')
        const footHolds = this.state.holds.filter(hold=>hold.type == 'foot')
        return (
            <HoldsContainer>
                <HoldsTitles>hand holds</HoldsTitles>
                {handHolds.map(hold=>{
                    return <Hold name={hold.name} src={hold.value} type={hold.type} />
                })}
                <HoldsTitles>foot holds</HoldsTitles>
                {footHolds.map(hold=>{
                    return <Hold name={hold.name} src={hold.value} type={hold.type} />
                })}
            </HoldsContainer>
        );
    }
}
 
export default HoldsPanel;