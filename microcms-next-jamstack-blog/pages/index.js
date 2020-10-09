import Link from 'next/link';

export default function Home({blog}) {
  return (
    <div>
      {blog.map(blog => (
        <ul key={blog.id}>
          <li >
            <Link href={`blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}


export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch('https://your-service.microcms.io/api/v1/blog', key);

  const data = await res.json();

  return {
    props: {
      blog: data.contents,
    },
  };
};
