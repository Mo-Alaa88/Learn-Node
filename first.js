// // If you export one function you can used that 
// function getCourses(){
//     return ['java','JS']
// }

// function getSessions(){
//     return ['java','JS']
// }
// module.exports.getCourses = getCourses;

////////////////////////////////

// but if you need export more function you can used that brackets
const getCourses = function (){
    return ['java','JS']
}

const getSessions = function (){
    return ['java','JS']
}
module.exports = {
    getCourses:getCourses,
    getSessions:getSessions,
};