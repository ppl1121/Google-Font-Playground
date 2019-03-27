import React from 'react';
import classes from './backgroundColorController.css';
import ColorPicker from '../colorPicker/colorPicker';
import OutsideClick from '../../../outsideClicker/outsideClicker';

const BackgroundColorController = (props) => (
    <div className={classes.BackgroundColorController}>
        <label className={classes.TextColorLabel}>Background Color</label>
        <div className={classes.ColorPicker}>
            <OutsideClick>
            <ColorPicker BackgroundColor color={props.color} colorChangedHandler= {props.colorChangedHandler} />
            </OutsideClick>
        </div>
        
    </div>
)

export default BackgroundColorController;