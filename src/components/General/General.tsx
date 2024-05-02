import {PropsWithChildren} from 'react';
import './styles/General.scss';


const General = ({children}: PropsWithChildren) => (
    <div className={'general'}>
        {children}
    </div>
);


export {General};
