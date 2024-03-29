import './Button.css'
import React from 'react'

export default props => {
    let classes = 'button'
    classes += props.operation ? ' operation' : ''
    classes += props.double ? ' double' : ''
    classes += props.triple ? ' triple' : ''

    return (
        <button
            className={classes}
            onClick={x => props.click && props.click(props.label)}>
            {props.label}
        </button>
    )
}
