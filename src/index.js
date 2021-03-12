module.exports = function check(str, bracketsConfig) {
    const map = new Map(bracketsConfig);
    const array = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== map.get(array[array.length - 1])) {
            array.push(str[i]);
        } else array.pop();
    }
    return array.length === 0;
};
