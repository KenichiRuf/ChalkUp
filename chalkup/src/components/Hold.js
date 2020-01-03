import React, {useState} from 'react'
import { useDrag, DragSource, DragPreviewImage } from 'react-dnd'

import theme from '../theme'
import Foot from '../images/holds/foot1.png'

const Hold = (props) => {
    const [src, setSrc] = useState('')
    const changeSrc = e => {
        setSrc(e.target.src)
    }
    const [{ isDragging }, drag, preview] = useDrag({
        item: { type: 'hold', orig: props.id?false:true, id: props.id, src },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    })
    console.log(src)
    if (props.id) {
    return (
        <div>
            <img src={props.src}
            ref={drag}
            onMouseEnter={changeSrc}
            style={{
                width: 50,
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                position: 'absolute',
                top: props.y,
                left: props.x,
                userSelect: 'none'
            }} alt="hold"/>
            <DragPreviewImage connect={preview} src={props.src} />
        </div>
    );
    } else {
         return (<div>
            <img src={props.src}
            ref={drag}
            onMouseEnter={changeSrc}
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                userSelect: 'none',
                margin: theme.unit(1)
            }} alt="hold"/>
            <DragPreviewImage connect={preview} src={props.src} />
        </div>)
    }
}
 
export default Hold;