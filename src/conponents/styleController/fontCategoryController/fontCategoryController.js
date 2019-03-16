import React from 'react';
import classes from './fontCategoryController';
import FontCategoryItem from './fontCategoryItem/fontCategoryItem';
const fontCategoryController = (props) => {

    const categoryItems = props.categoryItems.map(item =><FontCategoryItem key={item} value={item} onChange={props.onChange} checked={item===props.categoryValue}  />);
    return (
        <div>
            <label>Text Category</label>
            <div>
                {categoryItems}
            </div>

        </div>
    );
};

export default fontCategoryController;
