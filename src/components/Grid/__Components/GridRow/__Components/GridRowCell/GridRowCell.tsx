import './GridRowCell.scss';
import {ReactNode, CSSProperties} from 'react';


type TGridRowCellProps = {
    children: ReactNode;
    cellStyle: CSSProperties;
}

const GridRowCell = ({children, cellStyle}: TGridRowCellProps) => {
    return (
        <div
            className={'grid-row-cell'}
            style={cellStyle}
        >
            {children}
        </div>
    );
};


export {GridRowCell};
