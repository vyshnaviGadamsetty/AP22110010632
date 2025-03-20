import React, { useState } from 'react';
import axios from 'axios';

const AverageCalculator = () => {
    const [windowState, setWindowState] = useState([]); 
    const [average, setAverage] = useState(0);          
    const windowSize = 10;                           


    const apiMap = {
        'p': 'http://20.244.56.144/test/primes',
        'f': 'http://20.244.56.144/test/fibo',
        'e': 'http://20.244.56.144/test/even',
        'r': 'http://20.244.56.144/test/rand'
    };

    const fetchNumber = async (type) => {
        try {
            const response = await axios.get(apiMap[type], {
                headers: {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNDc3NjY4LCJpYXQiOjE3NDI0NzczNjgsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjgyZmI5ZjU1LTIzNzAtNDk4Yi1iODFhLTliYjBmYjhkZWZiMSIsInN1YiI6InNyaXZ5c2huYXZpX2dhZGFtc2V0dHlAc3JtYXAuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZG1hcnQiLCJjbGllbnRJRCI6IjgyZmI5ZjU1LTIzNzAtNDk4Yi1iODFhLTliYjBmYjhkZWZiMSIsImNsaWVudFNlY3JldCI6InJOQWVmUkhLY3RUQmRnSGciLCJvd25lck5hbWUiOiJTcmkgVnlzaG5hdmkgR2FkYW1zZXR0eSIsIm93bmVyRW1haWwiOiJzcml2eXNobmF2aV9nYWRhbXNldHR5QHNybWFwLmVkdS5pbiIsInJvbGxObyI6IkFQMjIxMTAwMTA2MzIifQ.0_4w1486wxT20tv9Na8PH1kyCu_0fM1Ue4TJS1g-zSA' 
                },
                timeout: 500
            });
            const numberData = response.data.numbers;
            updateWindow(numberData);
        } catch (error) {
            console.error("Error fetching numbers:", error);
        }
    };

   
    const updateWindow = (numbers) => {
        let newWindowState = [...windowState, ...numbers];
        if (newWindowState.length > windowSize) {
            newWindowState = newWindowState.slice(newWindowState.length - windowSize);
        }
        setWindowState(newWindowState);
        calculateAverage(newWindowState);
    };

    const calculateAverage = (numbers) => {
        const sum = numbers.reduce((acc, num) => acc + num, 0);
        const avg = (sum / numbers.length).toFixed(2);
        setAverage(avg);
    };

    return (
        <div>
            <h1>Vyshnavi's Number Caluculator</h1>
            <div>
                <button onClick={() => fetchNumber('p')}>Fetch Prime Numbers</button>
                <button onClick={() => fetchNumber('f')}>Fetch Fibonacci Numbers</button>
                <button onClick={() => fetchNumber('e')}>Fetch Even Numbers</button>
                <button onClick={() => fetchNumber('r')}>Fetch Random Numbers</button>
            </div>
            <h2>Window State: {JSON.stringify(windowState)}</h2>
            <h2>Average: {average}</h2>
        </div>
    );
};

export default AverageCalculator;