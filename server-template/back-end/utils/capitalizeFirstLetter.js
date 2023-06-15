// write a function that capitalize the first letter of a sentence or a string

const capitalizeFirstLetter = (string) => {
    return string[0].toUpperCase() + string.slice(1)
};

module.exports = capitalizeFirstLetter;