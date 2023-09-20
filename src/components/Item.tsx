import React from 'react';

import { ListContext } from '../App';

type Props = {
    id: number;
    onClick: (id: number) => void;
    label: string;
}

const Item: React.FC<Props> = ({
    id, onClick, label,
}) => {
    const handleClick: React.MouseEventHandler<HTMLDivElement> = (e) => {
        onClick(id);
    };

    const currentId =  React.useContext(ListContext);

    return (
        <div
            style={{ border: id === currentId ? '1px solid red' : 0 }}
            id={`${id}`}
            onClick={handleClick}
        >
            {label}
        </div>
    );
};

export default Item;
