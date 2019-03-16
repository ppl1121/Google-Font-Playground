import * as actionType from '../actionType/actionType'

export const fontDataLoad = (fontData) => {
    return {
        type: actionType.LOAD_FONT_DATA,
        data: fontData
    }
}

export const panelChanged = (panelId) => {
    return {
        type: actionType.PANEL_UNIT_CHANGED,
        data: panelId
    }
}

export const fontSizeChanged = (fontSizeDate) => {
    return {
        type: actionType.FONT_SIZE_CHANGED,
        data: fontSizeDate
    }
}

export const colorChanged = (color) => {
    return {
        type: actionType.COLOR_CHANGED,
        data: color
    }
}

export const backgroundColorChanged = (color) => {
    return {
        type: actionType.BACKGROUND_COLOR_CHANGED,
        data: color
    }
}


export const fontFamilyChanged = (fontFamilyData) => {
    return {
        type: actionType.FONT_FAMILY_CHANGED,
        data: fontFamilyData
    }
}

export const fontVariantChanged = (fontVariantData) => {
    return {
        type: actionType.FONT_VARIANT_CHANGED,
        data: fontVariantData
    }
}

export const fontCategoryChanged = (fontCategoryData) => {
    return {
        type: actionType.FONT_CATEGORY_CHANGED,
        data: fontCategoryData
    }
}



