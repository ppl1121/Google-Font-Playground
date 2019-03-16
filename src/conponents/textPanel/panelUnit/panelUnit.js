import React from 'react';
import classes from './panelUnit.css';
const panelUnit = (props) => {

    const styleData = {
        fontSize: `${props.styleData.fontSize}px`,
        color: `rgba(${props.styleData.color.r}, ${props.styleData.color.g}, ${props.styleData.color.b}, ${props.styleData.color.a})`,
        backgroundColor: `rgba(${props.styleData.backgroundColor.r}, ${props.styleData.backgroundColor.g}, ${props.styleData.backgroundColor.b}, ${props.styleData.backgroundColor.a})`,
        fontCategory: `${props.styleData.fontCategory}`,
        fontFamily: `${props.styleData.fontFamily}`,
        fontVariant: `${props.styleData.fontVariant}`
    }

    return ( 
        <div onClick={props.panelUnitChanged} className={classes.PanelUnit}>
            <textarea style={styleData} type='textarea' className={classes.TextArea} />
            <div>
                <button onClick={props.addPanelUnit}>add</button>
                <button onClick={()=> props.deletePanelUnit(props.panelId)}>close</button>
            </div>
        </div>       
            

    );
};

export default panelUnit;