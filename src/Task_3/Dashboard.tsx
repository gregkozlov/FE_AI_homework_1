import { useEffect, useState } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Create a Web Worker to handle the computation
    const worker = new Worker(new URL("./worker.ts", import.meta.url), { type: "module" });

    worker.postMessage({ iterations: 1e8 });

    worker.onmessage = event => {
      setD(event.data.result);
      worker.terminate();
    };

    return () => {
      worker.terminate();
    };
  }, []);

  return <div>{d}</div>;
}
