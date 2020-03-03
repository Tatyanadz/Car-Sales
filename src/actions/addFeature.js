export const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = (target) => {
    return { type: ADD_FEATURE, feature: target};
}