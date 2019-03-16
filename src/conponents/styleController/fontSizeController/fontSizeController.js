import React from 'react';

const fontSizeController = (props) => {
    return (
        <div>
            <label>Font Size</label>
            <input value={props.sizeValue} onChange={props.fontSizeChangedHandler} min='9' max='100' type ="number" />
        </div>
    )
}

export default fontSizeController;