import React, { useEffect, useState } from 'react';
import { Table } from '../types';
import { TableView } from '../components/TableView';


export default function CompareVenue() {

    const [tables, setTables] = useState<Table[]>([]);
    const [tableNames, setTableNames] = useState<string[]>([]);
    const [currTable, setCurrTable] = useState<Table>();

    // fetch the data from api endpoint
    const fetchTables = async () => {
        const response = await fetch('http://localhost:4567/table');
        const data = await response.json();
        console.log(data);
        setTables(data);
        setCurrTable(data[0]);
    }

    // useEffect with tables dependency to map and set the table names
    useEffect(() => {
        const tableNames = tables.map(table => table.name);
        setTableNames(tableNames);
        handleLoadData();
    }, []);

    // handle changing table from dropdown menu
    const handleTableChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const tableName = event.target.value;
        const table = tables.find(table => table.name === tableName);
        if (table) {
            setCurrTable(table);
        }
    }
  
    // handle updating the table state and current table
    const handleTableUpdate = (updatedTable: Table) => {
        // loop through tables and find the one that matches the table name
        const table = tables.find(table => table.name === updatedTable.name);
        // if table is found, replace it with the updated table
        if (table) {
            const newTables = [...tables];
            newTables[tables.indexOf(table)] = updatedTable;
            setTables(newTables);
            setCurrTable(updatedTable);
        }
    }

    // handle loading the data when button is pressed
    const handleLoadData = () => {
        fetchTables();
    }

    return (
        <div>
            <h1>Compare Venues</h1>
            <div id="body">
                <div>
                    {currTable && (
                        <TableView table={currTable} handleTableUpdate={handleTableUpdate}/>
                    )}
                </div>
            </div>
        </div>
    )
}