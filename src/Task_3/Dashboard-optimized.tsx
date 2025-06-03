import { useEffect, useState } from "react";

export default function Dashboard() {
  const [d, setD] = useState<number | null>(null);

  useEffect(() => {
    // Use mathematical formula: sum = n * (n - 1) / 2
    const n = 1e8;
    const result = (n * (n - 1)) / 2;
    setD(result);
  }, []);

  return <div>{d}</div>;
}
