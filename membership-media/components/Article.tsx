import { FC } from 'react';
import Image from 'next/image';
import type { ArticleListDetail } from '../types';

type Props = {
  data: ArticleListDetail;
};

const Article: FC<Props> = ({ data }) => {
  const { thumbnail, title, description, body, publishedAt } = data;
  return (
    <main>
      {thumbnail !== undefined && <Image src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt="" />}
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: body || '',
        }}
      />
    </main>
  );
};

export default Article;
