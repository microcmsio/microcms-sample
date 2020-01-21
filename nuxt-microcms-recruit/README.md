# Nuxt.js と microCMS で採用ページを作るサンプルです。

記事の URL

.env ファイルをコピー

```
$ cp .env.sample .env
```

.env ファイルに API_KEY をいれる。

```
API_KEY=xxxxx
```

コード内の URL を microCMS で取得した URL に変更

```
https://your.microcms.io/api/v1/
```

インストール

```
$ npm install
```

開発サーバーの起動

```
$ npm run dev
```
