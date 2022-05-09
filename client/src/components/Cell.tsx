import React, { useEffect, useRef, useState } from 'react';
import { Row, TableData } from "../types";

type CellProps = {
    dataStr: string;
    colIdx: number;
    rowIdx: number;
    handleCellChange: (rowIdx: number, colIdx: number, dataStr: string) => void;
}

export function Cell(props: CellProps) {
    // isEditing state
    const [isEditing, setIsEditing] = useState(false);
    const [dataStr, setDataStr] = useState<string>(props.dataStr);
    // variable used to detect first render of componentcd 
    const firstRender = useRef(true);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsEditing(!isEditing);
    }

    useEffect(() => {
        setDataStr(props.dataStr);
    }, [props.dataStr])

    useEffect(() => {
        // detect first render and ignore
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        if (!isEditing) {
            props.handleCellChange(props.rowIdx, props.colIdx, dataStr);
        }
    }, [isEditing]);

    const handleChange = (e: React.FormEvent) => {
        e.preventDefault();
        setDataStr((e.target as HTMLInputElement).value);
    }

    return (
        <td>
        {isEditing || dataStr.length === 0 ? (
            <span>
            <input type="text" value={dataStr} onChange={handleChange}/>
            <button onClick={handleOnClick}>Done</button>
            </span>
        ) : (
            <span onClick={handleOnClick}>{dataStr}</span>
        )}
        </td>
    )
}