import { useQuery } from 'graphql-hooks';
import viteImage from '../../assets/vite.svg';

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
      <img src={viteImage} alt="vite logo" style={{ width: '100px' }} />
      <br />
      <br />
      {!loading && (
        `${data.hello}! Welcome to your Server-side Rendered React/Vite/Fastify Application!`
      )}
      <br />
      <br />
      <a href="/blog">This could be your blog!</a>
    </div>
  );
}
