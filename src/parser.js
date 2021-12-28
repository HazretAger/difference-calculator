const getFormat = {
    json: JSON.parse
};

export default (file, format) => getFormat[format](file);