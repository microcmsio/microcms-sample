import {
  MicroCMSListResponse,
  MicroCMSImage,
  MicroCMSListContent,
} from 'microcms-js-sdk';

export type Article = {
  title?: string;
  description?: string;
  body?: string;
  thumbnail?: MicroCMSImage;
  private: boolean;
};

export type ArticleList = MicroCMSListResponse<Article>;
export type ArticleListDetail = Article & MicroCMSListContent;
