function l(obj) {
    obj = JSON.stringify(obj, null, 4); // (Optional) beautiful indented output.
    console.log(obj); // Logs output to dev tools console.
}
module.exports.l = l;
function s(obj) {
    return JSON.stringify(obj, null, 4); // (Optional) beautiful indented output
}
module.exports.s = s;
