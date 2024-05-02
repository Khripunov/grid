import './GridHeader.scss';
import {CSSProperties} from 'react';
import {GridRow} from '@/components/Grid/__Components/GridRow/GridRow.tsx';


type TGridHeaderProps = {
    cells: string[];
    rowStyle?: CSSProperties;
    isMultilevel?: boolean;
}

const GridHeader = ({cells, rowStyle, isMultilevel = false}: TGridHeaderProps) => (
    <div className={'grid-header'}>
        <GridRow
            cells={cells}
            rowStyle={rowStyle}
            isMultilevel={isMultilevel}
        />
    </div>
);


export {GridHeader};
