import * as actionType from '../action/actionType/actionType'

const initialState = {
    panelStyle: {
        panelId: 0,
        styleData: {
            fontCategory: 'All',
            fontFamily: '',
            fontVariant: '',
            fontSize: 50,
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
        },
        fontData: [],
        isFontVariantsDisplayClear: false
    }
}

const reducer = (state = initialState, action) => {
    let newPanelStyle;
    let newStyleData;
    switch (action.type){
        case actionType.FONT_SIZE_CHANGED:
            newStyleData = {...state.panelStyle.styleData, fontSize: action.data};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData, isFontVariantsDisplayClear: false };
            return {...state, panelStyle: newPanelStyle};

        case actionType.PANEL_UNIT_CHANGED:
            newPanelStyle = {...state.panelStyle, ...action.data }
             return {...state, panelStyle: newPanelStyle};

        case actionType.COLOR_CHANGED:
            newStyleData = {...state.panelStyle.styleData, color: action.data};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData};
            return {...state, panelStyle: newPanelStyle};

        case actionType.BACKGROUND_COLOR_CHANGED:
            newStyleData = {...state.panelStyle.styleData, backgroundColor: action.data};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData};
            return {...state, panelStyle: newPanelStyle};   

        case actionType.FONT_CATEGORY_CHANGED:
            newStyleData = {...state.panelStyle.styleData, fontCategory: action.data, fontFamily:'', fontVariant:''};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData, isFontVariantsDisplayClear: true};
            return {...state, panelStyle: newPanelStyle};    
        
        case actionType.FONT_FAMILY_CHANGED:
            newStyleData = {...state.panelStyle.styleData, fontFamily: action.data, fontVariant:''};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData, isFontVariantsDisplayClear: true};
            return {...state, panelStyle: newPanelStyle};
        
        case actionType.FONT_VARIANT_CHANGED:
            newStyleData = {...state.panelStyle.styleData, fontVariant: action.data};
            newPanelStyle = {...state.panelStyle, styleData: newStyleData, isFontVariantsDisplayClear: false};
            return {...state, panelStyle: newPanelStyle };
       
        case actionType.LOAD_FONT_DATA:
            newPanelStyle = {...state.panelStyle, fontData: action.data};
            return {...state, panelStyle: newPanelStyle };

        default: return state;
    }
}

export default reducer;
