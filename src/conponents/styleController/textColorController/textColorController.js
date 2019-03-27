import React from 'react';
import classes from './textColorController.css';
import ColorPicker from '../colorPicker/colorPicker';
import OutsideClick from '../../../outsideClicker/outsideClicker';

const textColorController = (props) => (
    <div className={classes.TextColorController}>
        <label className={classes.TextColorLabel}>Text Color</label>
        <div className={classes.ColorPicker}>
            <OutsideClick>
                <ColorPicker color={props.color} colorChangedHandler= {props.colorChangedHandler} />
            </OutsideClick>
        </div>
        
    </div>
)

export default textColorController;