import React, { FC } from 'react';
import { Cell } from '../models/Cell';
import { Figure } from '../models/figures/Figure';

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div className={['cell', cell.color, selected ? "selected" : ""].join(' ')}
            onClick={() => click(cell)}
            style={{ background: cell.avaibale && cell.figure? 'green': '' }}
        >
            {cell.avaibale && !cell.figure && < div className={'available'} />}
            {cell.figure?.logo && <img src={cell.figure.logo} alt="" />}
        </div >
    );
}
export default CellComponent;