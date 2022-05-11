import React, { useEffect, useState } from 'react';
import { RowView } from './RowView';
import { Column, Row, Table } from '../types';
// import { BsSortAlphaDown, BsSortAlphaUpAlt } from 'react-icons/bs'
import SortByAlphaIcon from '@mui/icons-material/SortByAlpha';
import '../App.css';

type TableProps = {
    table: Table;
    handleTableUpdate: (updatedTable: Table) => void;
}

export function TableView(props: TableProps) {
    const table = props.table;
    const cols = table.cols;
    // keep list of changes made to the table so we can batch and send one update to the server
    const [rowsAdded, setRowsAdded] = useState<Row[]>([]);
    const [rowsRemoved, setRowsRemoved] = useState<Row[]>([]);
    const [rowsChanged, setRowsChanged] = useState<Row[]>([]);

    const [rows, setRows] = useState<Row[]>(table.rows);

    useEffect(() => {
        setRows(table.rows);
    }, [table.rows]);

    // sort the table by the given column
    const sortTableByColumn = (col: Column, isAscending: boolean) => {
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
           {table && (
               <div>
                   <h1>{table.name}</h1>
                   <div>
                          <table id="table">
                                <thead>
                                    <tr>
                                        {cols.map(col => (
                                            <th key={col.colHeader}>{col.colHeader} <button onClick={() => sortTableByColumn(col, true)}><SortByAlphaIcon/></button><button onClick={() => sortTableByColumn(col, false)}><SortByAlphaIcon/></button></th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map(row => (
                                            <RowView row={row} key={row.rowIdx}/>
                                    ))}
                                </tbody>
                            </table> 
                    </div>
                </div>
              )}
              
       </div>
    )

}