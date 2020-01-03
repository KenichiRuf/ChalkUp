import React, {useState} from 'react'
import styled from 'styled-components'
import { useDrop } from 'react-dnd'

import Hold from './Hold'
import theme from "../theme"


const Panel = ({width, height, angle}) => {
    const [holds, updateHolds] = useState([])
    const dropHold = (left, top) => {
        let temp = holds
        temp.push({x: left, y: top})
        updateHolds(temp)
    }
    const moveHold = (id, left, top) => {
        let temp = holds.map((hold,i)=>{
            if (id == i+1) {
                hold.x = left 
                hold.y = top
            }
            return hold
        })
        updateHolds(temp)
    }
    const PanelBlock = styled.div`
        background: red;
        width: ${width>height?(window.innerWidth/3)+'px':((window.innerHeight*.9)*(width/height))+'px'};
        height: ${height>=width?(window.innerHeight*.9)+'px':((window.innerWidth/3)*(height/width))+'px'};
    `
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: 'hold',
        drop(item, monitor) {
            const type = monitor.getItemType()
            const delta = monitor.getSourceClientOffset()
            console.log(item)
            let left = delta.x
            let top = delta.y
            console.log({x:left, y:top})
            if (item.orig)
                dropHold(left, top)
            else
                moveHold(item.id, left, top)
            return undefined
        },
        collect: mon => ({
          isOver: !!mon.isOver(),
          canDrop: !!mon.canDrop(),
        }),
      })
    return (
        <div>
            <PanelBlock ref={drop}>panel</PanelBlock>
            {holds.map((hold,i)=>{
                return <Hold key={'Math.random() + hold.x + hold.y'} id={i+1} x={hold.x} y={hold.y} />
            })}
            <Hold></Hold>
        </div>
    );
}
 
export default Panel