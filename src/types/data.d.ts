// 記事
export type Article = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  eye_catch: {
    url: string;
    height: number;
    width: number;
  };
  tags: Tag[];
};

export type Tag = {
  id: string;
  tag_name: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
};

// APIコンテキスト
export type ApiContext = {
  apiRootUrl: string;
};
