import Item from './Item';

type Props = {
    items: {
        id: number;
        label: string;
    }[];
    target: string;
    onClick(id: number): void
};

function List({ items, target, onClick: handleClick }: Props) {
    return (
        <ul>
            {items.filter((item) => item.label.includes(target)).map((item) => (
                <Item
                    key={item.id}
                    id={item.id}
                    onClick={handleClick}
                    label={item.label}
                />
            ))}
        </ul>
    );
}

export default List;
