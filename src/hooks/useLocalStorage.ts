import { useState } from 'react';

export default function useLocalStorage<KEY extends string, VALUE>(
  key: KEY,
  initialValue: VALUE
): [VALUE, (newValue: VALUE) => void] {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return (item && JSON.parse(item)) || initialValue;
    } catch (error) {
      console.error('Failed to get value from localStorage', error);
    }
    return initialValue;
  });

  const setValue = (newValue: VALUE) => {
    setStoredValue(newValue);
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      console.error('Failed to update localStorage', error);
    }
  };

  return [storedValue, setValue];
}
