import { useEffect, useState } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    let t = 0;
    let i = 0;
    const chunkSize = 1e6; // Process 1 million iterations at a time
    const totalIterations = 1e8;

    function processChunk() {
      const endI = Math.min(i + chunkSize, totalIterations);

      for (; i < endI; i++) {
        t += i;
      }

      if (i < totalIterations) {
        // Yield control back to the main thread
        setTimeout(processChunk, 0);
      } else {
        setD(t);
      }
    }

    processChunk();
  }, []);

  return <div>{d}</div>;
}
