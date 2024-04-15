export function compareObjects(obj1, obj2) {
    const str1 = JSON.stringify(obj1, null, 2).replace(/\s/g, '');
    const str2 = JSON.stringify(obj2, null, 2).replace(/\s/g, '');

    if (str1 !== str2) {
        return false
    }
    return true
}