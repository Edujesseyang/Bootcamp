function getTrigArea(height, base) {
    return height * base / 2;
}

const getCircleArea = (radius) => {
    return Number((Math.PI * radius * radius).toFixed(2));
}

const getRectangleArea = (height, width) => height * width;

// module exports list
module.exports = {
    getTrigArea,
    getRectangleArea,
    getCircleArea,
}