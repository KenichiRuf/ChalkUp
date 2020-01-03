import React from 'react'
import { useDrag, DragSource, DragPreviewImage } from 'react-dnd'

import Foot from '../images/foot1.png'

const Hold = (props) => {
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'hold', orig: props.id?false:true, id: props.id },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    return (
        <div>
            <img src={Foot}
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                position: 'absolute',
                top: props.y,
                left: props.x,
                userSelect: 'none'
            }} alt="hold"/>
            <DragPreviewImage connect={preview} src={Foot} />
        </div>
    );
}
 
export default Hold;