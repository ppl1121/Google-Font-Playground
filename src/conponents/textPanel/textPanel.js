import React, {Component} from 'react';
import PanelUnit from './panelUnit/panelUnit';
import {connect} from  'react-redux';
import classes from './textPanel.css';
import * as styleControlActionCreator from '../../store/styleControl/action/actionCreator/actionCreator';

class TextPanel extends Component {

    state = {
        panelUnitStyleGroup: [
            {
                panelId: 0,
                styleData: {
                    fontSize: 10,
                    fontCategory: 'All',
                    fontFamily: '',
                    fontVariant: '',
                    color: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1',
                    },
                    backgroundColor: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1',
                    },
                },             
            },
            {
                panelId: 1,
                styleData: {
                    fontSize: 20,
                    fontCategory: 'All',
                    fontFamily: '',
                    fontVariant: '',
                    color: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1',
                    },
                    backgroundColor: {
                        r: '0',
                        g: '0',
                        b: '0',
                        a: '1',
                    },
                },
            }
        ]
    };

    componentDidMount () {
        const newStyleData =  {...this.props.panelStyle.styleData};
        const newPanelUnitStyleGroup = [...this.state.panelUnitStyleGroup];
        const panelUnitIndex= newPanelUnitStyleGroup.findIndex(panelUnitStyle=> panelUnitStyle.panelId===this.props.panelStyle.panelId);
        const newPanelUnitStyle = {...newPanelUnitStyleGroup[panelUnitIndex], styleData: newStyleData};
        newPanelUnitStyleGroup[panelUnitIndex] = newPanelUnitStyle;
        this.setState({panelUnitStyleGroup: newPanelUnitStyleGroup});
    }

    componentDidUpdate () {
        const index = this.state.panelUnitStyleGroup.findIndex(unit => unit.panelId===this.props.panelStyle.panelId);
        if(index>=0 && (this.props.panelStyle.styleData.fontSize !== this.state.panelUnitStyleGroup[index].styleData.fontSize ||
                        this.props.panelStyle.styleData.color !== this.state.panelUnitStyleGroup[index].styleData.color ||
                        this.props.panelStyle.styleData.backgroundColor !== this.state.panelUnitStyleGroup[index].styleData.backgroundColor) ||
                        this.props.panelStyle.styleData.fontFamily !== this.state.panelUnitStyleGroup[index].styleData.fontFamily ||
                        this.props.panelStyle.styleData.fontVariant !== this.state.panelUnitStyleGroup[index].styleData.fontVariant ) {
            const newStyleData =  {...this.props.panelStyle.styleData};
            const newPanelUnitStyleGroup = [...this.state.panelUnitStyleGroup];
            const panelUnitIndex= newPanelUnitStyleGroup.findIndex(panelUnitStyle=> panelUnitStyle.panelId===this.props.panelStyle.panelId);
            const newPanelUnitStyle = {...newPanelUnitStyleGroup[panelUnitIndex], styleData: newStyleData};
            newPanelUnitStyleGroup[panelUnitIndex] = newPanelUnitStyle;
            this.setState({panelUnitStyleGroup: newPanelUnitStyleGroup});
        }  
    }

    addPanelUnit = () => {
        let panelUnitIndex = this.state.panelUnitStyleGroup.reduce((maxId,el)=> el.panelId>maxId ? el.panelId : maxId ,0) + 1;
        
        const panelStyle = {
            panelId: panelUnitIndex,
            styleData: {
                fontSize: 40,
                fontCategory: 'All',
                fontFamily: '',
                fontVariant: '',
                color: {
                    r: '0',
                    g: '0',
                    b: '0',
                    a: '1',
                },
                backgroundColor: {
                    r: '255',
                    g: '255',
                    b: '255',
                    a: '1',
                },
            }
        }
        const newGroup = [...this.state.panelUnitStyleGroup];
        newGroup.push(panelStyle);
        this.setState({panelUnitStyleGroup: newGroup});
    }

    deletePanelUnit = (panelId) => {
        const newGroup = [...this.state.panelUnitStyleGroup];
        const index = newGroup.findIndex(unit => unit.panelId===panelId);
        newGroup.splice(index,1);
        this.setState({panelUnitStyleGroup: newGroup});
    }

    panelUnitChangedHandler = (panelStyle) => {
        this.props.panelChanged(panelStyle);
    }


    render() {
        const panelUnits = this.state.panelUnitStyleGroup.map(
                panelUnitStyle => <PanelUnit key={panelUnitStyle.panelId}  deletePanelUnit={this.deletePanelUnit} addPanelUnit={this.addPanelUnit}    panelId={panelUnitStyle.panelId}   styleData={panelUnitStyle.styleData}  panelUnitChanged={() => this.panelUnitChangedHandler({...panelUnitStyle})} /> );
        return (
            <div  className={classes.Panel}>
                {panelUnits}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        panelStyle: state.styleControl.panelStyle
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        panelChanged: (panelStyle) => dispatch(styleControlActionCreator.panelChanged(panelStyle))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TextPanel);