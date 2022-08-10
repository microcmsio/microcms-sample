import { getSession, Claims, getServerSidePropsWrapper } from '@auth0/nextjs-auth0';
import type { NextPage, GetServerSideProps } from 'next';
import Article from '../../components/Article';
import { client } from '../../libs/client';
import { Article as ArticleType, ArticleListDetail } from '../../types';
import styles from '../../styles/Home.module.css';

export const getServerSideProps: GetServerSideProps = getServerSidePropsWrapper(async (context) => {
  const { req, res } = context;
  const id = context?.params?.id as string;
  const session = await getSession(req, res);

  const data = await client.getListDetail<ArticleType>({
    endpoint: 'articles',
    contentId: id,
  });

  if (!session) {
    return {
      props: {
        data: {
          title: data.title,
          description: data.description,
          thumbnail: data.thumbnail,
        }
      }
    };
  }

  return {
    props: {
      data,
      user: session.user,
    },
  };
});

type Props = {
  data?: ArticleListDetail;
  user?: Claims;
};

const PrivateId: NextPage<Props> = ({ data, user }) => {
  if (!data) {
    return null;
  }
  if (!user) {
    return (
      <main className={styles.wrapper}>
        <Article data={data} />
        <div className={styles.appeal}>
          <p className={styles.count}>残り2200文字</p>
          <p>続きを読むには会員登録が必要です</p>
          <button className={styles.button}>無料会員に登録する</button><br />
          <button className={styles.textButton}>ログインする</button>
        </div>
      </main>
    );
  }
  return <Article data={data} />;
};

export default PrivateId;
