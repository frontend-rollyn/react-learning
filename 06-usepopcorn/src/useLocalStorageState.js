import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, key) {
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem(key) || "";
    return JSON.parse(storedValue);
  });

  useEffect(() => {
    console.log("localStorage.setItem-" + JSON.stringify(watched));

    localStorage.setItem(key, JSON.stringify(watched));
  }, [watched, key]);

  return [watched, setWatched];
}
