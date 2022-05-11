import React, { useEffect, useState } from 'react';
import { RowView } from './RowView';
import { Column, Row, Header } from '../types';
// import { BsSortAlphaDown, BsSortAlphaUpAlt } from 'react-icons/bs'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import '../App.css';

type TableProps = {
    rows: [];
    headers: [];
}

export function TableView(props: TableProps) {
    console.log("Table view")

    const [headers, setHeaders] = useState<string[]>(props.headers);
    const [rows, setRows] = useState<Row[]>(props.rows);

    useEffect(() => {
        setRows(props.rows);
        setHeaders(props.headers);
    }, [props.rows]);

    // sort the table by the given column
    const sortTableByColumn = (col: Header, isAscending: boolean) => {
        rows.sort((a, b) => {
            const aVal = a.data[col.colIdx].value;
            const bVal = b.data[col.colIdx].value;
            if (aVal < bVal) {
                return -1;
            } else if (aVal > bVal) {
                return 1;
            } else {
                return 0;
            }
        });
        if (!isAscending) {
            rows.reverse();
        }
        setRows([...rows]);
    }

    return (
       <div>
           {props.rows && props.headers && (
               <div>
                   <h1>Venues</h1>
                   <div>
                          <table id="table">
                                <thead>
                                    <tr>
                                        {headers.map(hdr => (
                                            <th key={hdr}>{hdr}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* {rows.map(row => (
                                            // <RowView row={}/>
                                    ))} */}
                                </tbody>
                            </table> 
                    </div>
                </div>
              )}
              
       </div>
    )

}