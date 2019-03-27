import React from 'react';
import classes from './panelUnit.css';
const panelUnit = (props) => {

    const styleData = {

        fontSize: `${props.styleData.fontSize}px`,
        color: `rgba(${props.styleData.color.r}, ${props.styleData.color.g}, ${props.styleData.color.b}, ${props.styleData.color.a})`,
        backgroundColor: `rgba(${props.styleData.backgroundColor.r}, ${props.styleData.backgroundColor.g}, ${props.styleData.backgroundColor.b}, ${props.styleData.backgroundColor.a})`,
        fontCategory: `${props.styleData.fontCategory}`,
        fontFamily: `${props.styleData.fontFamily}`,
    }

    if(props.styleData.fontVariant === 'regular'){
        styleData.fontStyle = 'normal';
    }
    if(props.styleData.fontVariant === 'italic'){
        styleData.fontStyle = 'italic';
    }
    

    return ( 
        <div onClick={props.panelUnitChanged} className={classes.PanelUnit}>
            <div className={classes.PanelUnitFrame}>
                <ul className={classes.PanelUnitHeader}>
                    <li>{props.styleData.fontSize}</li>
                    <li>{props.styleData.fontFamily==='' ? 'Oswald' : props.styleData.fontFamily}</li>
                    <li>{props.styleData.fontVariant==='' ? 'Regular' : props.styleData.fontVariant}</li>
                </ul>
                <textarea style={styleData} type='textarea' className={classes.TextArea} />
                <div>
                    <button className={classes.Add_Button} onClick={props.addPanelUnit}>Add</button>
                    {props.panelId!==0 ? <button className={classes.Delete_Button} onClick={()=> props.deletePanelUnit(props.panelId)}>close</button> : null }
                </div>
            </div>
            
        </div>       
            

    );
};

export default panelUnit;