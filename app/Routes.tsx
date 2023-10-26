export function Routes({ current }: { current?: number }) {
  return (
    <>
      <p>Manually append any of the routes to the base URL:</p>
      <ul>
        {[1, 2, 3, 4, 5].map((num) => (
          <li key={num}>
            <a href={`/static-${num}`}>
              <pre>
                {current === num ? <b>{`/static-${num}`}</b> : `/static-${num}`}
              </pre>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
