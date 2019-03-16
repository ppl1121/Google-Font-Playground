import React, {Component} from 'react';
import classes from './styleController.css';
import FontSizeController from './fontSizeController/fontSizeController';
import TextColorController from './textColorController/textColorController';
import BackgroundColorController from './backgroundColorController/backgroundColorController';
import FontFamilyController from './fontFamilyController/fontFamilyController';
import FontVariantsController from './fontVariantsController/fontVariantsController';
import FontCategoryController from './fontCategoryController/fontCategoryController';
import axios from '../../axios/axios'
import {connect} from  'react-redux';
import * as styleControlActionCreator from '../../store/styleControl/action/actionCreator/actionCreator'

class StyleController extends Component {

    state = {
        availableFontCategory: [],
        availableFontFamilies: [],
        availableFontVariants: []
        
        // isFontVariantsDisplayClear: false
        
    }

    componentDidUpdate = () => {
        // if(this.props.panelStyle.styleData.fontFamily!==''){
        //     const new_variants = this.state.availableFontFamilies.find(FontFamily => FontFamily.family === this.props.panelStyle.styleData.fontFamily).variants;          
        //     if(new_variants.join() !== this.state.availableFontVariants.join()){
        //         const new_availableFontVariants = [...new_variants];
        //         this.setState({availableFontVariants: new_availableFontVariants});
        //     }  
        // }  
       if(this.props.panelStyle.styleData.fontFamily === '' && this.props.panelStyle.styleData.fontVariant === ''){
           if(this.state.availableFontVariants.length>0){
            this.setState({availableFontVariants: []});
           }
       }
       const new_families = this.props.panelStyle.fontData.filter(font =>{
                                if(this.props.panelStyle.styleData.fontCategory==='All'){
                                    return true;
                                }
                                else{
                                    return font.category === this.props.panelStyle.styleData.fontCategory;
                                }
                            })
        const just_familyName_new = new_families.map(FontFamily => FontFamily.family);
        const just_familyName_prev = this.state.availableFontFamilies.map(FontFamily => FontFamily.family);
        if(just_familyName_new.join() !== just_familyName_prev.join()){
            this.setState({availableFontFamilies: new_families});
        }
        if(this.props.panelStyle.styleData.fontFamily!==''){
            const new_variants = new_families.find(FontFamily => FontFamily.family === this.props.panelStyle.styleData.fontFamily).variants;          
            if(new_variants.join() !== this.state.availableFontVariants.join()){
                const new_availableFontVariants = [...new_variants];
                this.setState({availableFontVariants: new_availableFontVariants});
            }  
        }
        
    }

    componentDidMount = () => {
        // axios.get('').then(response => {
        //     const fontData = response.data.items.slice(0,150)
        //     const  availableFontCategory = new Set();
        //     fontData.forEach(DataItem => availableFontCategory.add(DataItem.category));
        //     availableFontCategory.add('All');
        //     console.log(fontData);
        //     this.setState({availableFontFamilies: fontData, availableFontCategory: [...availableFontCategory]});
        // }).catch(err => {
        //     console.log(err);
        // });
        axios.get('').then(response =>{
            const fontData = response.data.items.slice(0,150);
            this.props.fontDataLoad(fontData);
            console.log(fontData);
            const  availableFontCategory = new Set();
            fontData.forEach(DataItem => availableFontCategory.add(DataItem.category));
            availableFontCategory.add('All');
            this.setState({availableFontCategory: [...availableFontCategory], availableFontFamilies: fontData });

        }).catch(err => {
                console.log(err);
        });

    }

    fontSizeChangedHandler = (event) => {
        this.props.fontSizeChanged(event.target.value);
    }

    colorChangedHandler = (color) => {
        this.props.colorChanged(color);
    }

    backgroundColorChangedHandler = (color) => {
        this.props.backgroundColorChanged(color);
    }


    fontCategoryChangedHandler = (event) => {
        this.props.fontCategoryChanged(event.target.value);
        this.setState({availableFontVariants: []});
    }

    fontFamilySelectedHandler = (value) => {
        // const new_availableFontVariants = [...value.variants];
        // this.setState({availableFontVariants: new_availableFontVariants});
        this.props.fontFamilyChanged(value.value);
        // this.props.fontVariantsChanged('');
    }

    fontVariantsSelectedHandler = (value) => {
        // this.setState({isFontVariantsDisplayClear: false});
        this.props.fontVariantsChanged(value.value);
    }

    


    render () {

        const familyOptions = this.state.availableFontFamilies.map(FontFamily => {return {value:FontFamily.family, label:FontFamily.family, variants: FontFamily.variants}});
        const varientsOptions =  this.state.availableFontVariants.map(FontVarient => {return {value: FontVarient, label: FontVarient}});
        return (
            <div className={classes.StyleController}>

                <FontCategoryController categoryValue={this.props.panelStyle.styleData.fontCategory}
                                        categoryItems={this.state.availableFontCategory.sort((a,b)=>a.localeCompare(b))}
                                        onChange={this.fontCategoryChangedHandler}/>
                <FontFamilyController  value={familyOptions.filter(FontFamily => FontFamily.value===this.props.panelStyle.styleData.fontFamily)} 
                                       options={familyOptions} onChange={this.fontFamilySelectedHandler}  />
                <FontVariantsController value={varientsOptions.filter(FontVariants => FontVariants.value===this.props.panelStyle.styleData.fontVariant)} 
                                        options={varientsOptions} onChange={this.fontVariantsSelectedHandler}  
                                        isDisabled={this.state.availableFontVariants.length===0 ? true : false} />   
                <FontSizeController fontSizeChangedHandler={this.fontSizeChangedHandler} sizeValue={this.props.panelStyle.styleData.fontSize} />
                <TextColorController color={this.props.panelStyle.styleData.color} colorChangedHandler={this.colorChangedHandler} />
                <BackgroundColorController color={this.props.panelStyle.styleData.backgroundColor} colorChangedHandler={this.backgroundColorChangedHandler} />
                                      
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        panelStyle: state.styleControl.panelStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fontSizeChanged: (fontSize) => dispatch(styleControlActionCreator.fontSizeChanged(fontSize)),
        colorChanged: (color) => dispatch(styleControlActionCreator.colorChanged(color)),
        backgroundColorChanged: (color) => dispatch(styleControlActionCreator.backgroundColorChanged(color)),
        fontCategoryChanged: (fontCategory) => dispatch(styleControlActionCreator.fontCategoryChanged(fontCategory)),
        fontFamilyChanged: (fontFamily) => dispatch(styleControlActionCreator.fontFamilyChanged(fontFamily)),
        fontVariantsChanged: (fontVariants) => dispatch(styleControlActionCreator.fontVariantChanged(fontVariants)),
        fontDataLoad: (fontData) => dispatch(styleControlActionCreator.fontDataLoad(fontData))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(StyleController);