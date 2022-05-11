import React, { useEffect, useState } from 'react';
import { Row } from "../types";
import { Cell } from './Cell';

type RowViewProps = {
    row: Row;
}

export function RowView(props: RowViewProps) {
    // ordering data by colIdx
    const [orderedData, setOrderedData] = useState<string[]>([]);

    useEffect(() => {
        const orderedData = [];
        for (let i = 0; i < props.row.data.length; i++) {
            orderedData.push('');
        }
        // loop through rows and order data according to colIdx
        for (let i = 0; i < props.row.data.length; i++) {
            const data = props.row.data[i];
            const colIdx = data.col.colIdx;
            orderedData[colIdx] = data.value;
        }
        setOrderedData(orderedData);
    }, [props.row]);



    const handleCellChange = (rowIdx: number, colIdx: number, dataStr: string) => {        
        // goto colIdx and update the value
        const data = props.row?.data[colIdx];
        if (data) data.value = dataStr;
    }

    return (
        props.row && 
        <tr>
            <>
                {orderedData.map((data, idx) => {
                    return <Cell key={idx} dataStr={data} rowIdx={props.row.rowIdx} colIdx={idx} handleCellChange={handleCellChange}/>
                })}
                <td>
                </td>
            </>
        </tr>
    )
}