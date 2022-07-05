export function getDateStr(str: string) {
    let str1 = str.slice(0, 4);
    let str2 = str.slice(5, 7);
    let str3 = str.slice(8, 10);
    return `${str3}/${str2}/${str1}`;
}

export function getHourStr(str: string) {
    let str1 = str.slice(11, 13);
    let str2 = str.slice(14, 16);
    return `${str1}:${str2}`;
}

export function getHourStrUtc(str: string) {
    let str1 = str.slice(11, 13);
    let str2 = str.slice(14, 16);
    let num = Number(str1) - 4;
    return `${num}:${str2}`;
}