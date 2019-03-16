import React from 'react';
import classes from './textColorController.css';
import ColorPicker from '../colorPicker/colorPicker';

const textColorController = (props) => (
    <div className={classes.TextColorController}>
        <label>Text Color</label>
        <div className={classes.ColorPicker}>
            <ColorPicker color={props.color} colorChangedHandler= {props.colorChangedHandler} />
        </div>
        
    </div>
)

export default textColorController;