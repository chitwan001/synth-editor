/**
 * Convert json key to css style e.g. backgroundColor to background-color
 * @param themeConfigKey
 */
export const generateCssStyleFromObjKey = (themeConfigKey: string) => {
    return themeConfigKey.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
}