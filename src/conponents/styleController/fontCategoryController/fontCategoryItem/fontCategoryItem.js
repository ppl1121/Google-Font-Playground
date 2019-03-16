import React from 'react';
import classes from './fontCategoryItem';

const fontCategoryItem = (props) => (
    <div>
        <label>{props.value}</label>
        <input type='radio' value={props.value}  name='category' onChange={props.onChange} checked={props.checked} />
    </div>
);

export default fontCategoryItem;