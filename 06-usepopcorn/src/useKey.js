import { useEffect } from "react";

export function useKey(key, callback) {
  useEffect(() => {
    function callEvent(e) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        callback();
      }
    }
    document.addEventListener("keydown", callEvent);
    return function () {
      document.removeEventListener("keydown", callEvent);
    };
  }, [callback, key]);
}
