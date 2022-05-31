import { useEffect, useRef, useState } from 'react';
import axios from 'axios';

interface Repository {
  id: number;
  name: string;
  url: string;
}

export function NormalUsage() {
  const valueRef = useRef(1);
  const [repos, setRepos] = useState<Repository[]>([]);

  useEffect(() => {
    console.log(`mounted ${valueRef.current}`);

    // most common usage of consuming API
    axios
      .get('https://api.github.com/users/andreseichi/repos')
      .then(({ data }) => {
        console.log(data);
        setRepos(data);
      });

    valueRef.current++;
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
