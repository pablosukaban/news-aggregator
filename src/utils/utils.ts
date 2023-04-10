import { ArticleType } from '../types';

export function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function divideArray(arr: ArticleType[], divNumber: number) {
    const result = [];

    for (let i = 0; i < arr.length; i += divNumber) {
        const temp = arr.slice(i, i + divNumber);
        result.push(temp);
    }

    return result;
}
