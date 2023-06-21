import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounce, setDebounece] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebounece(value), delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounce;
}

export default useDebounce;
