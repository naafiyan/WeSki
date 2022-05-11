import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


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
        // setRows(data.rows);
        // const rows: Area[] = [{name: 'name', weather: 'weather', trails: 1, acreage: 2, base: 3, snowfall: 4, price: 5}];
        
        // setTables(data);
        // setCurrTable(data[0]);
    }

    // useEffect with tables dependency to map and set the table names
    useEffect(() => {
        handleLoadData();
    }, []);

    // handle loading the data when button is pressed
    const handleLoadData = () => {
        fetchTables();
    }

    return (
        <div>
            <h1>Compare Venues</h1>
            <div id="body">
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {headers.map(item => <TableCell>{item}</TableCell>)}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map(item => <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                {item.map(data => <TableCell>{data}</TableCell>)}
                            </TableRow>)}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}