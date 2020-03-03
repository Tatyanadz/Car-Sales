export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (target) => {
    return { type: REMOVE_FEATURE, feature: target };
}