import React from 'react';
import styled from "styled-components";
import theme from "../theme"
import { Button, FormGroup, Label, Input } from 'reactstrap';

class RouteSetter extends React.Component {
    state = {
        height: 8,
        width: 7,
        angle: 0,
        modalShown: false
    }
    // state = {
    //     height: null,
    //     width: null,
    //     angle: null,
    //     modalShown: true
    // }
    render() {
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
        return ( 
            <div>
                {this.state.modalShown?
                    <Modal>
                        <FormGroup>
                            <Label for="height">Height</Label>
                            <Input type="height" name="height" id="height" placeholder="height of panel" value={this.state.height} onChange={e => this.setState({ height: e.target.value })}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="width">Width</Label>
                            <Input type="width" name="width" id="width" placeholder="width of panel" value={this.state.width} onChange={e => this.setState({ width: e.target.value })}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="angle">Angle</Label>
                            <Input type="angle" name="angle" id="angle" placeholder="angle of panel" value={this.state.angle} onChange={e => this.setState({ angle: e.target.value })}/>
                        </FormGroup>
                        <Button color="primary" onClick={e=>{
                            this.setState({modalShown: false})
                        }}>Create Panel</Button>
                    </Modal>
                :null}
            </div>
        );
    }
}
 
export default RouteSetter;