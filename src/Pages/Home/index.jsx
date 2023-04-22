import { useQuery } from 'graphql-hooks';

const HELLO_QUERY = `
  query Hello($name: String!) {
    hello(name: $name)
  }
`;

export default function Home() {
  const { loading, data } = useQuery(HELLO_QUERY, {
    variables: {
      name: 'My Friend',
    },
  });

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      {!loading && (
        `${data.hello}! Welcome to your Server-side Rendered React/Vite/Fastify Application!`
      )}
    </div>
  );
}
