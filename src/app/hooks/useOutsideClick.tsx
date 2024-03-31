// useOutsideClick.ts
"use client"
import { useEffect } from "react";

const useOutsideClick = (
    ref: React.RefObject<HTMLElement>,
    callback: () => void,
    excludeRef?: React.RefObject<HTMLElement>
  ) => {
    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          ref.current &&
          !ref.current.contains(event.target as Node) &&
          (!excludeRef || !excludeRef.current?.contains(event.target as Node))
        ) {
          callback();
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref, callback, excludeRef]);
  };
  
  export default useOutsideClick;
  