import styles from '../../styles/Home.module.scss'

export default function BlogId({blog}) {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{blog.title}</h1>
      <p className={styles.publishedAt}>{blog.publishedAt}</p>
      <p className="category">{blog.category && `${blog.category.name}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
        className={styles.post}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch('https://your-service.microcms.io/api/v1/blog', key);
  const repos = await res.json();

  const paths = repos.contents.map(repo => `/blog/${repo.id}`);
  return {paths, fallback: false};
};

export const getStaticProps = async context => {
  const id = context.params.id;

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(
    'https://your-service.microcms.io/api/v1/blog/' + id,
    key,
  );

  const data = await res.json();

  return {
    props: {
      blog: data,
    },
  };
};
