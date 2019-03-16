import React from 'react';
import Select from 'react-select';
import classes from './fontFamilyController.css'
const fontFamilyController = (props) => {
    return (
        <div className={classes.FontFamilyController}>
            <label>Font Family</label>
            <div className={classes.FontFamilySelector}>
                <Select value={props.value}  onChange={props.onChange} options={props.options} />
            </div>
        </div>
    )
}

export default fontFamilyController;