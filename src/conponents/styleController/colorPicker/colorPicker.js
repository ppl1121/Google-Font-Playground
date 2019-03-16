import React, {Component} from 'react';
import {SketchPicker} from 'react-color'
import clickOutside from 'react-click-outside';
import classes from './colorPicker.css';
class ColorPicker extends Component {
    
    state = {     
        displayColorPicker: false,
        pickerIconColor: {
                r: '0',
                g: '0',
                b: '0',
                a: '1',
        }
    }

    

    handleClickOutside() {
        this.setState({displayColorPicker: false});
    }

    handleColorChange = (color, event) => {
        this.props.colorChangedHandler(color.rgb);
    }

    ColorPickerToggleHandler = () => {
        this.setState((prevState => {
            return {displayColorPicker: !prevState.displayColorPicker};
        }));
    }

    render() {

        let colorStyle = {
            color: `rgba(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b}, ${this.props.color.a})`
        }

        let PickerIcon = (
            <div onClick={this.ColorPickerToggleHandler} className={classes.ColorPickerIcon} style={colorStyle} >
                    T
            </div>
        )
        if(this.props.BackgroundColor) {
            colorStyle = {
                backgroundColor: `rgba(${this.props.color.r}, ${this.props.color.g}, ${this.props.color.b}, ${this.props.color.a})`
            }

            PickerIcon = (
                <div onClick={this.ColorPickerToggleHandler} className={classes.ColorPickerIcon} style={colorStyle} >
                </div>
            )   
        }

        return (
            <div className={classes.ColorPicker}>
                {PickerIcon}
                
                
                <div className={classes.SketchPicker}>
                   {this.state.displayColorPicker ?  <SketchPicker color={this.props.color} onChange={ this.handleColorChange } /> : null} 
                </div>
            </div>
        )
    }
}

export default clickOutside(ColorPicker);