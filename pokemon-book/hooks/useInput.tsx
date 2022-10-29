import { useCallback, useState } from "react";

export const useInput = (initialValue = null) => {
  const [value, setValue] = useState("");
  const handler = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};
