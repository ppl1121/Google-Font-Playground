import React from 'react';
import classes from './fontSizeController.css';

const fontSizeController = (props) => {
    return (
        <div className={classes.FontSizeController}>
            <label className={classes.FontSizeLabel}>Font Size</label>
            <input className={classes.FontSizeInput} value={props.sizeValue} onChange={props.fontSizeChangedHandler} min='9' max='100' type ="number" />
        </div>
    )
}

export default fontSizeController;