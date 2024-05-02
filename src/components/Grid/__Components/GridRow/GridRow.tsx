import './GridRow.scss';
import {CSSProperties} from 'react';
import {GridRowCell} from '@/components/Grid/__Components/GridRow/__Components/GridRowCell/GridRowCell.tsx';


type TGridRowProps = {
    cells: string[];
    rowStyle?: CSSProperties;
    isMultilevel?: boolean;
}

const GridRow = ({cells, rowStyle, isMultilevel = false}: TGridRowProps) => {
    const cellWidth = '200px';
    let cellXPosition = 0;
    let cellYPosition = 0;

    const capitalizeFirstLetter = (text: string) => text.charAt(0).toUpperCase()
        + text.slice(1);

    const getCellStyles = (index: number) => {
        if (isMultilevel && index >= 2) {
            cellYPosition = index < 2 ? cellYPosition : cellYPosition + 42;

            return {
                width: cellWidth,
                top: cellYPosition + 'px',
                left: cellXPosition + 'px'
            };
        }

        cellXPosition = index === 0 ? cellXPosition : cellXPosition + 200;

        return {
            width: cellWidth,
            top: cellYPosition + 'px',
            left: cellXPosition + 'px'
        };
    };

    return (
        <div
            className={'grid-row'}
            style={rowStyle}
        >
            {cells.map((cell, index) => (
                <GridRowCell
                    key={index}
                    cellStyle={getCellStyles(index)}
                >
                    {typeof cell === 'string' ? capitalizeFirstLetter(cell) : cell}
                </GridRowCell>
            ))}
        </div>
    );
};


export {GridRow};
