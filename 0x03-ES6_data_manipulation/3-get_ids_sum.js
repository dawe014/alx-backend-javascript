export default function getStudentIdsSum(students) {
    const sum = students.reduce((accomulater, currentvalue) => {
        return accomulater + currentvalue.id;
    }, 0)
    return sum;
}