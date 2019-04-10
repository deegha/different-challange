/**
 * Created at 10/04/2019
*/

/**
 * Action constants
*/

export const SET_WINDOW_DIMENTIONS = "SET_WINDOW_DIMENTIONS"

/**
 * Action creators
*/

export const setWindowDimensions = (width, height) => ({
    type : SET_WINDOW_DIMENTIONS,
    width,
    height
})