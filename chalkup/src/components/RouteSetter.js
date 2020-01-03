import React from 'react';
import styled from "styled-components";
import Backend from 'react-dnd-html5-backend'
import { DndProvider, useDrop } from 'react-dnd'

import Panel from './Panel'
import theme from "../theme"
import { Button, FormGroup, Label, Input } from 'reactstrap';

const Modal = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 400px;
`

class RouteSetter extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            height: 18,
            width: 18,
            angle: 0,
            modalShown: false
        }
    }
    handleChange = e => {
        console.log(e.target.name)
        this.setState({ [e.target.name] : e.target.value });
    }
    render() {
        return ( 
            <div>
                {this.state.modalShown?<Modal key='modal-container'>
                    <FormGroup>
                        <Label for="height">Height</Label>
                        <Input key='modal-height' type="number" name="height" id="height" placeholder="height of panel in centimeters" value={this.state.height} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="width">Width</Label>
                        <Input key='modal-width' type="number" name="width" id="width" placeholder="width of panel in centimeters" value={this.state.width} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="angle">Angle</Label>
                        <Input key='modal-angle' type="angle" name="angle" id="angle" placeholder="angle of panel" value={this.state.angle} onChange={this.handleChange}/>
                    </FormGroup>
                    <Button color="primary" onClick={e=>{
                        this.setState({modalShown: false})
                    }}>Create Panel</Button>
                </Modal>:null}
                <DndProvider backend={Backend}>
                    <Panel width={this.state.width} height={this.state.height} angle={this.state.angle} />
                </DndProvider>
            </div>
        );
    }
}
 
export default RouteSetter;