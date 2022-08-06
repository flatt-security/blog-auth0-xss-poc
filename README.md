# About
これはAuth0 in-memory方式へのXSSのPoCです。
それぞれ以下のバージョンで動作を確認しました

* APIサーバ Ruby 2.7.1
* SPA Node.js v12.20.1

# 起動方法
事前にAuth0上でアプリケーションの設定が完了していることを前提とします。
SPAに関しては、ベースとした https://github.com/auth0-samples/auth0-javascript-samples/tree/master/01-Login も参考にしてください。

1. `front` 直下でSPAを起動します
  1. `auth_config.json.example` を参考に `auth.config.json` を作成します。
  2. `npm i && npm start`
2. `api_server` 直下でAPIサーバを起動します(`run.sh`)

# 免責事項
本リポジトリの内容はセキュリティに関する知見を広く共有する目的で作成されており、脆弱性の悪用などの攻撃行為を推奨するものではありません。許可なくプロダクトに攻撃を加えると犯罪になる可能性があります。当社が記載する情報を参照・模倣して行われた行為に関して当社は一切責任を負いません。
