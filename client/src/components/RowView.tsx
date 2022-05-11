import { PropaneSharp } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { Area } from "../types";
import { Cell } from './Cell';

type RowViewProps = {
    row: Area;
}

export function RowView(props: RowViewProps) {
    // ordering data by colIdx
    // const [orderedData, setOrderedData] = useState<string[]>([]);

    // useEffect(() => {
    //     // const orderedData = [];
    //     // for (let i = 0; i < 7; i++) {
    //     //     orderedData.push('');
    //     // }
    //     // // loop through rows and order data according to colIdx
    //     // for (let i = 0; i < 7; i++) {
    //     //     const data = props.row.data[i];
    //     //     const colIdx = data.col.colIdx;
    //     //     orderedData[colIdx] = data.value;
    //     // }
    //     // setOrderedData(orderedData);
    // }, [props.row]);



    // const handleCellChange = (rowIdx: number, colIdx: number, dataStr: string) => {        
    //     // goto colIdx and update the value
    //     const data = props.row?.data[colIdx];
    //     if (data) data.value = dataStr;
    // }

    return (
        props.row && 
        <tr>
            <>
                <td>
                    {props.row.name}
                    {props.row.weather}
                    {props.row.trails}
                    {props.row.acreage}
                    {props.row.base}
                    {props.row.snowfall}
                    {props.row.price}
                </td>
            </>
        </tr>
    )
}