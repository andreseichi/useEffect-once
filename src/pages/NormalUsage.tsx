import { useEffect, useRef } from 'react';

export function NormalUsage() {
  const valueRef = useRef(1);

  useEffect(() => {
    console.log(`mounted ${valueRef.current}`);

    valueRef.current++;
  }, []);

  return (
    <>
      <h1>Check console log</h1>
    </>
  );
}
