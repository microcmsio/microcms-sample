# Gulp + ejs + microCMSによって静的HTML生成を行うサンプル

GulpからmicroCMSのAPIを呼び出し、そのレスポンスをejsに渡してHTMLを生成します。  
microCMSからNetlify等とWebhookで連携すればJamstack構成も実現できます。

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
