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

    //functions used to set the row and header values from the data
    const [rows, setRows] = useState<string[][]>([[]]);
    const [headers, setHeaders] = useState<string[]>([]);
    const [sortCol, setSortCol] = useState<string>('');

    // fetch the data from api endpoint
    const fetchTables = async () => {
        console.log("getting here");
        const response = await fetch('http://localhost:4567/table');
        const data = await response.json();
        console.log(data);
        setHeaders(data.headers);
        setRows(data.rows);
        console.log("got the data")
    }

    // useEffect with tables dependency to map and set the table names
    useEffect(() => {
        handleLoadData();
    }, []);

    // handle loading the data when button is pressed
    const handleLoadData = () => {
        fetchTables();
    }

    // table styling
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: '#5A9B85',
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
    }));
    
    // styling per each new row w/ special row for headers
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    }));

    // function used in the sortTable function
    function isNumeric(value: string) {
        return /^-?\d+$/.test(value);
    }

    const sortTable = () => {
        console.log("tryna sort")
        var ro: number = 0
        switch(sortCol) {
            case "Ski Area": default:
                ro = 0;
                break;
            case "# Trails Open":
                ro = 1;
                break;
            case "Acreage Open":
                ro = 2;
                break;
            case "Price":
                ro = 3;
                break;
            case "Temperature":
                ro = 4;
                break;
            case "Difficulty":
                ro = 5;
                break;
        }
        for(var i=0; i<rows.length; i+=1) {
            for(var j=i; j<rows.length; j+=1) {
                if(isNumeric(rows[j][ro])){
                    if (parseFloat(rows[j][ro]) < parseFloat(rows[i][ro])) {
                        var temp = rows[j];
                        rows[j] = rows[i];
                        rows[i] = temp;
                    };
                } else {
                    if (rows[j][ro] < rows[i][ro]) {
                        var temp = rows[j];
                        rows[j] = rows[i];
                        rows[i] = temp;
                    };
                }
            };
        };
    };

    // useEffect(sortTable, [sortCol]);

    return (
        <div>
            {/* Page Title */}
            <h1>Compare Venues</h1>
            <div id="body">
                <select name='colselect' id='col-select' onChange={e => setSortCol(e.target.value)}>
                    <option>Ski Area</option>
                    <option># Trails Open</option>
                    <option>Acreage Open</option>
                    <option>Price</option>
                    <option>Temperature</option>
                    <option>Difficulty</option>
                </select>
                <TableContainer component={Paper}> {/* Styling component for table */}
                    <Table aria-label="table with ski venue data">
                        <TableHead>
                            <StyledTableRow> {/* Styled Table Row for Headers */}
                                <StyledTableCell>Ski Area</StyledTableCell>
                                <StyledTableCell># Trails Open</StyledTableCell>
                                <StyledTableCell>Acreage Open</StyledTableCell>
                                <StyledTableCell>Price</StyledTableCell>
                                <StyledTableCell>Temperature</StyledTableCell>
                                <StyledTableCell>Difficulty</StyledTableCell>
                            </StyledTableRow>
                        </TableHead>
                        <TableBody>
                            {/* map function loops through all data elements out in rows sequentially */}
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