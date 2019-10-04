import React from 'react';

const Cell = ({cellVal, index, onClick, onDragOver, mouseLeave, cellMouseDown}) => {
  return (
    <div
      style={{
        'border': 'solid',
        'width':'25px',
        'height':'25px'
      }}
      onClick={()=>{onClick(index, cellVal)}}
      onMouseDown={()=>{cellMouseDown(index, cellVal)}}
      onMouseOver={()=>{onDragOver(index, cellVal)}}
      onMouseOut={()=>{mouseLeave(index, cellVal)}}
    >

      {cellVal}

    </div>
  )
}

export default Cell;