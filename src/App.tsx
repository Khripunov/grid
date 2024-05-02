import React, {useState, useMemo, useCallback} from 'react';
import {General} from '@/components/General/General.tsx';
import Grid from '@/components/Grid/Grid.tsx';
import type {TOlympicData} from '@/types/olympic-data.ts';
import type {TRows} from '@/components/Grid/types/row.ts';


const App: React.FC = () => {
    const gridStyle = useMemo(() => ({height: '100%'}), []);

    const [rowData, setRowData] = useState<TOlympicData[]>();
    const [columnDefs] = useState<TRows>([
        {field: 'athlete', level: 0},
        {field: 'sport', level: 0},
        {field: 'age', level: 0},
        {field: 'country', level: 0}
    ]);

    const onGridReady = useCallback(() => {
        fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
            .then((resp) => resp.json())
            .then((data) => setRowData(data));
    },[]);

    return (
        <General>
            <Grid<TOlympicData>
                columnDefs={columnDefs}
                rowData={rowData}
                gridStyle={gridStyle}
                onGridReady={onGridReady}
            />
        </General>
    );
};


export {App};
