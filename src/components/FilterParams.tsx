import React from 'react';

const FilterParams = () => {
    return <div></div>;
};

export default FilterParams;

function getCountries() {
    const str =
        'aearataubebgbrcachcncocuczdeegfrgbgrhkhuidieilinitjpkrltlvmamxmyngnlnonzphplptrorsrusasesgsiskthtrtwuausveza';
    const res: string[] = [];
    let temp = '';

    for (let i = 0; i < str.length; i++) {
        temp += str[i];

        if (temp.length === 2) {
            res.push(temp);
            temp = '';
        }
    }

    console.log(res);
}
