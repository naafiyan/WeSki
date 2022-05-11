/**
 * This is the type for a data value in a table. Each data value should keep track of its row, its
 * column, and its value.
 */
 export type TableData = {
    row: number;
    col: Column;
    value: string;
}

/**
 * This is the type for a column in a table. Each column should keep track of its unique index, its
 * header, its data type, and its nullity.
 */
export type Column = {
    colIdx: number;
    colHeader: string;
    type: object;
    nullity: boolean;
}

/**
 * This is the type for a row in a table. Each row should keep track of its unique index and its
 * data values as a list.
 */
export type Row = {
    rowIdx: number;
    data: TableData[];
}

export type Header = {
    colIdx: number;
    colHeader: string;
    data: TableData[];
}

export type Area = {
    name: string;
    weather: string;
    trails: number;
    acreage: number;
    base: number;
    snowfall: number;
    price: number;
}

/**
 * This is the type for a table in a database. Each table should keep track of its unique ID, its
 * name, its list of columns, its list of rows, and its list of data values.
 */
export type Table = {
    id: number;
    name: string;
    cols: Column[];
    rows: Row[];
    dataVals: TableData[];
}