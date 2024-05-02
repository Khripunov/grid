import './Grid.scss';
import {useEffect, CSSProperties, useMemo} from 'react';
import {Spinner} from '@/components/Spinner/Spinner.tsx';
import {GridHeader} from '@/components/Grid/__Components/GridHeader/GridHeader.tsx';
import {GridRow} from '@/components/Grid/__Components/GridRow/GridRow.tsx';
import type {TRows} from '@/components/Grid/types/row.ts';


type TGridProps<T> = {
    columnDefs: TRows;
    rowData?: T[];
    gridStyle?: CSSProperties;
    onGridReady: () => void;
}

const Grid = <T, >({columnDefs, rowData, gridStyle, onGridReady}: TGridProps<T>) => {
    useEffect(() => {
        onGridReady();
    }, [onGridReady]);

    const gridColumnsDefs: TRows = columnDefs.slice(); // creating a copy of the incoming columnDefs in order to further mutate the order

    const isMultilevel = useMemo(() => {
        for (const column of gridColumnsDefs) {
            if (column.level && column.level > 0) {
                return true;
            }
        }

        return false;
    }, [gridColumnsDefs]);

    const gridRowStyle = useMemo(() => {
        const getRowWidth = () => {
            if (isMultilevel) {
                return '400px';
            }

            return gridColumnsDefs.reduce((accumulator) => accumulator + 200, 0) + 'px';
        };

        const getRowHeight = () => {
            if (isMultilevel) {
                const rowHeight = gridColumnsDefs.reduce((accumulator) => accumulator + 42, 0);

                return rowHeight - 42 + 'px';
            }
        };

        return {
            width: getRowWidth(),
            height: getRowHeight()
        };
    }, [gridColumnsDefs, isMultilevel]);

    const getHeadRowCells = () => {
        if (isMultilevel) {
            return gridColumnsDefs
                .sort((a, b) => {
                    const comparisonA = a.level || 0;
                    const comparisonB = b.level || 0;

                    return comparisonA - comparisonB;
                })
                .map((column) => column.field);
        }

        return gridColumnsDefs.map((column) => column.field);
    };

    const getBodyRowCells = (row: T) => gridColumnsDefs.map((column) => row[column.field]);

    if (!columnDefs.length) {
        return <Spinner/>;
    }

    return (
        <div className={'grid'}>
            <div className={'grid__wrapper'}>
                <GridHeader
                    cells={getHeadRowCells()}
                    isMultilevel={isMultilevel}
                    rowStyle={gridRowStyle}
                />
                <div className={'grid__body'} style={gridStyle}>
                    {rowData?.length ? rowData.map((row, index) => (
                        <GridRow
                            key={index}
                            cells={getBodyRowCells(row)}
                            rowStyle={gridRowStyle}
                            isMultilevel={isMultilevel}
                        />
                    )) : <Spinner/>}
                </div>
            </div>
        </div>
    );
};


export default Grid;
