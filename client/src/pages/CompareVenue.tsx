import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function CompareVenue() {

    const [rows, setRows] = useState<string[][]>([[]]);
    const [headers, setHeaders] = useState<string[]>([]);

    // fetch the data from api endpoint
    const fetchTables = async () => {
        console.log("getting here");
        const response = await fetch('http://localhost:4567/table');
        const data = await response.json();
        console.log(data);
        setHeaders(data.headers);
        setRows(data.rows);
    }

    // useEffect with tables dependency to map and set the table names
    useEffect(() => {
        handleLoadData();
    }, []);

    // handle loading the data when button is pressed
    const handleLoadData = () => {
        fetchTables();
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: '#5A9B85',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

    // function isNumeric(value: string) {
    //     return /^-?\d+$/.test(value);
    // }

    // const sortTable = () => {
    //     for(var i=0; i<rows.length; i+=1) {
    //         for(var j=i; j<rows.length; j+=1) {
    //             if(isNumeric(rows[j][props.sortCol])){
    //                 if (parseFloat(rows[j][props.sortCol]) < parseFloat(rows[i][props.sortCol])) {
    //                     var temp = rows[j];
    //                     rows[j] = rows[i];
    //                     rows[i] = temp;
    //                 };
    //             } else {
    //                 if (rows[j][props.sortCol] < rows[i][props.sortCol]) {
    //                     var temp = rows[j];
    //                     rows[j] = rows[i];
    //                     rows[i] = temp;
    //                 };
    //             }
    //         };
    //     };
    //     const tab: table = {
    //         headerList: props.tableInfo.headerList,
    //         rowMap: rows,
    //     }
    //     props.setRowMap(tab);
    // };

    // useEffect(sortTable, [props.sortCol]);

    return (
        <div>
            <h1>Compare Venues</h1>
            <div id="body">
                <TableContainer component={Paper}>
                    <Table aria-label="table with ski venue data">
                        <TableHead>
                            <StyledTableRow>
                                <StyledTableCell>Ski Area</StyledTableCell>
                                <StyledTableCell># Trails Open</StyledTableCell>
                                <StyledTableCell>Acreage Open</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                                <StyledTableCell>Temperature</StyledTableCell>
                                <StyledTableCell>Difficulty</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(item => <StyledTableRow>
                                {item.map(data => <StyledTableCell>{data}</StyledTableCell>)}
                            </StyledTableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}