# membership-media
microCMS + Next.js + Auth0 で作成する会員制メディア  
参考：https://blog.microcms.io/membership-media-01/

## microCMSのAPIスキーマ設定
### 記事
endpoint: articles  
type: リスト形式

| フィールド ID | 表示名     | 種類                        |
| ------------- | ---------- | --------------------------- |
| title         | タイトル   | テキストフィールド          |
| body          | 本文       | リッチエディタ              |
| description   | 概要       | テキストフィールド          |
| thumbnail     | サムネイル  | 画像                        |
| private       | 会員向け    | 真偽値      |

## 環境変数
プロジェクトルートに`.env`ファイルを作成し、以下の項目を設定してください。
- API_KEY（microCMSのAPIキー）
- SERVICE_ID（microCMSのサービスID）
- AUTH0_SECRET
- AUTH0_BASE_URL
- AUTH0_ISSUER_BASE_URL
- AUTH0_CLIENT_ID
- AUTH0_CLIENT_SECRET

## 開発方法

```bash
# パッケージをインストール
$ npm install

# 開発サーバーを起動（localhost:3000）
$ npm run dev
```

## ライセンス
Apache License 2.0
