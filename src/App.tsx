
import React, { useState, useCallback, SetStateAction } from 'react';

import List from './components/List';
import './index.type';
import './App.css';

const items = Array(18)
    .fill(undefined)
    .map((_, i) => ({
        id: i,
        label: `Item #${i}`
    }));

export const ListContext = React.createContext<number | undefined>(undefined);   

export default function App() {
    const [currentSelected, setCurrent] = useState<undefined | number>(undefined);

    const [count, setCount] = useState(0);
    const [founded, setFounded] = useState('');

    const callBckValue = useCallback(() => {
        setCount((count) => count + 1);
    }, []);

    const handleChange = (e: { preventDefault: () => void; target: { value: SetStateAction<string>; }; }) => {
        e.preventDefault();
        setFounded(e.target.value);
    };

    const setNewItemData = useCallback((id: number) => setCurrent(id), [setCurrent])

    return (
        <div className='App'>
            <div>
                <h2>Count: {count}</h2>
                <button type='button' onClick={callBckValue}>
                    Click Me
                </button>
            </div>
            <h1>Re-Render optimization</h1>
            <p>
                При клике по элементу происходит перерендер всех элементов, нужно свести
                количесвто рендеров к минимуму. (2 ререндера)
            </p>
            <fieldset>
                <legend>Find item</legend>
                <input type='text' defaultValue='' onChange={handleChange} />
            </fieldset>
            <ListContext.Provider value={currentSelected}>
                <List
                    items={items}
                    target={founded}
                    onClick={setNewItemData}
                />
            </ListContext.Provider>
        </div>
    );
}