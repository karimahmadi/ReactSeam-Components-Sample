function SampleData( sortColumnName , sortType, limit = 0, offset = 10 ) {
    let result = [];
    let resultList = [];
    if (sortColumnName && sortType) {
        result.sort((a, b) => {
            let x = a[sortColumnName];
            let y = b[sortColumnName];
            if (typeof a[sortColumnName] === 'string')
                x = a[sortColumnName].charCodeAt();
            if (typeof b[sortColumnName] === 'string')
                y = b[sortColumnName].charCodeAt();
            if (sortType === 'asc')
                return x - y;

            else
                return y - x;
        });
    }
    //pagination//
    if (offset !== undefined && limit !== 0) {
        resultList = [];
        for (let i = limit * offset; i < ((offset + 1) * limit) && i < result.length; i++) {
            resultList.push(result[i]);
        }
    }
    return resultList;
}
export {SampleData};
