import React from 'react';
import classes from './backgroundColorController.css';
import ColorPicker from '../colorPicker/colorPicker';

const BackgroundColorController = (props) => (
    <div className={classes.BackgroundColorController}>
        <label>Text Color</label>
        <div className={classes.ColorPicker}>
            <ColorPicker BackgroundColor color={props.color} colorChangedHandler= {props.colorChangedHandler} />
        </div>
        
    </div>
)

export default BackgroundColorController;