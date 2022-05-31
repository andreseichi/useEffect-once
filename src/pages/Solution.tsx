import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  url: string;
}

export function Solution() {
  const valueRef = useRef(1);
  const executedRef = useRef(false);
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    // an awkward way to fetch an api (without a state management library)
    // running the useEffect only once
    if (executedRef.current) return;
    console.log(`mounted ${valueRef.current}`);

    axios
      .get('https://api.github.com/users/andreseichi/repos')
      .then(({ data }) => {
        console.log(data);
        setRepos(data);
      });

    valueRef.current++;

    return () => {
      executedRef.current = true;
    };
  }, []);

  return (
    <>
      <h1>Check console log</h1>

      {repos?.map((repo) => (
        <div key={repo.id}>
          <span>{repo.name}</span>
          <span>{repo.url}</span>
        </div>
      ))}
    </>
  );
}
