# 設定
1. `docker-compose run --rm app npm install create-next-app`<br/>
// `docker-compose run` は `npm install` の実行をappに指示している。<br/>
// `--rm` オプションは実行終了時にコンテナを削除する命令となっている。
2. `docker-compose run --rm app npx create-next-app open-next --ts`<br/>
// nextアプリを作成
3. `dpcker-compose up -d`<br/>
dockerをバックグラウンドで起動