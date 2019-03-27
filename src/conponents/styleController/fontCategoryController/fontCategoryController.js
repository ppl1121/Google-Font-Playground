import React from 'react';
import classes from './fontCategoryController.css';
import FontCategoryItem from './fontCategoryItem/fontCategoryItem';
const fontCategoryController = (props) => {

    const categoryItems = props.categoryItems.map(item =>
                        <li className={classes.CategoryItem}
                            key={item}><FontCategoryItem value={item} 
                                                         onChange={props.onChange} 
                                                         checked={item===props.categoryValue} />
                        </li>);

    return (
        <div className={classes.FontCategoryController}>
            <label className={classes.Lable} >Font Category</label>
            <div className={classes.FontCategoryWrapper}>
                <ul className={classes.CategoryItems}>
                    {categoryItems}
                </ul>          
            </div>
        </div>
    );
};

export default fontCategoryController;
