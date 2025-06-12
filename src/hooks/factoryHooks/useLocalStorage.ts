import { useState } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T[] = []) {
  const [items, setItems] = useState<T[]>(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const save = (data: T[]) => {
    setItems(data);

    localStorage.setItem(key, JSON.stringify(data));
  };

  const add = (item: T) => {
    const updated = [...items, item];

    save(updated);
  };

  const remove = (predicate: (item: T) => boolean) => {
    const updated = items.filter(item => !predicate(item));

    save(updated);
  };

  const clear = () => {
    save([]);
  };

  const getAll = (): T[] => items;

  return {
    items,
    add,
    remove,
    clear,
    getAll,
    set: save,
  };
}
