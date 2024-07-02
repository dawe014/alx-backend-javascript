
export default function getStudentsByLocation(getListStudents, city){
    const arr = getListStudents.filter(data=>data.location==city)
    return arr;
}