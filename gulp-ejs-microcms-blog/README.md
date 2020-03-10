# Gulp + EJS + microCMSによって静的HTML生成を行うサンプル

GulpからmicroCMSのAPIを呼び出し、そのレスポンスをEJSに渡してHTMLを生成します。  
microCMSからNetlify等とWebhookで連携すればJamstack構成も実現できます。

参考記事： https://microcms.io/blog/gulp-ejs-microcms/

# How to use

httpサーバー、sassコンパイル、ejsコンパイルの起動
```
$ npm i
$ npm start
```

sassコンパイル、ejsコンパイルのみ
```
$ npm run build
```
