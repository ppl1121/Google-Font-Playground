import React from 'react';
import Select from 'react-select';
import classes from './fontVariantsController.css'
const fontVariantsController = (props) => {
    return (
        <div className={classes.FontVariantsController}>
            <label>Font Variants</label>
            <div className={classes.FontVariantsSelector}>
                <Select value={props.value}  isDisabled={props.isDisabled} options={props.options} onChange={props.onChange} />
            </div>
        </div>
    )
}

export default fontVariantsController;