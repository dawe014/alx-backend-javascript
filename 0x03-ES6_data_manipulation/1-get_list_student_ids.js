export default function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
        return [];
    }
    const arr2 = arr.map(data => ({
        value: data.id
    })).map(d=>d.value);
    return arr2;    
}