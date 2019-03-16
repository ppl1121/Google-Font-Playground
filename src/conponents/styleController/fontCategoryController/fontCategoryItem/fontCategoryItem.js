import React from 'react';
import classes from './fontCategoryItem.css';

const fontCategoryItem = (props) => {
    let attachedClasses = [classes.ItemLable];
    if(props.checked){
        attachedClasses = [classes.ItemLable, classes.ItemChecked];
    }
    return (
        <div>
            <label className={attachedClasses.join(' ')}>
                <span>
                    {props.value}
                </span>
                <input type='radio' value={props.value}  
                       name='category' onChange={props.onChange} 
                       checked={props.checked} />
            </label>
            
        </div>
    );
} ;

export default fontCategoryItem;