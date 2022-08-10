import type { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { client } from '../libs/client';
import type { Article, ArticleList } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Article>({
    endpoint: 'articles',
    queries: {
      fields: ['id', 'private', 'title'],
    },
  });

  return {
    props: {
      data,
    },
    revalidate: 60,
  };
};

type Props = {
  data: ArticleList;
};

const Index: NextPage<Props> = ({ data }) => {
  const { contents } = data;
  return (
    <div>
      <ul>
        {contents.map((content) => (
          <li key={content.id}>
            <Link href={`/${content.private ? 'private' : 'public'}/${content.id}`}>
              <a>{content.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
