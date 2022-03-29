import React from "react";
import TableCell from '@northstar/core/TableCell';
import TableHead from '@northstar/core/TableHead';
import TableRow from '@northstar/core/TableRow';

const Mealsheader = () => {
    
    const columns = [
        { id: 'name', label: 'Name'},
        { id: 'description', label: 'Description', minWidth: 200 },
        { id: 'price', label: 'Price', },
        { id: 'edit' },
        { id: 'delete' },
    ];

    return (
        <TableHead>
            <TableRow>
                {columns.map((column) => (
                    <TableCell key={column.id} style= { {minWidth: column.minWidth}} >
                        {column.label}
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
};

export default Mealsheader;

