# BaseMiniApp
Base Mini Appを学習するためのサンプルリポジトリです。

## テンプレプロジェクト生成コマンド

```bash
npx create-onchain@latest --mini
```

## ビルド＆ローカルでの起動

- ビルド

  ```bash
  pnpm run build
  ```

- ローカルで起動

  ```bash
  pnpm run dev
  ```

## vercelにデプロイする

```bash
vercel
```

以下の2つの環境変数をVercel上で設定する

```txt
NEXT_PUBLIC_CDP_CLIENT_API_KEY=<CDPで生成したAPIキー>
NEXT_PUBLIC_URL=<vercelでデプロイされた後に決定されるアプリのURL(例えば https://my-minikit-app-delta.vercel.app/ などになる)>
```

![](./docs/7.png)

FarcasterでdeployされたアプリのURLをそのままコピペしてcastする

[castまでのURL](https://farcaster.xyz/mashharuki/0x534f6740)

![](./docs/8.png)

`Launch my-minikit-app` ボタンを押すと確認が求められるのでそのまま承認する

![](./docs/9.png)

![](./docs/10.png)

そうするとMiniAppが起動する

![](./docs/11.png)

`Transact`ボタンを押すとトランザクションが実行される

![](./docs/12.png)

しばらくするとトランザクションが取り込まれ処理が完了する！

![](./docs/13.png)

実際に発火させたトランザクションは以下から確認ができます。

[baseSepolia - 実際に実行したトランザクション](https://sepolia.basescan.org/tx/0x01dea3754d68940b28af20c2c11fb7edba185a6096df2b2dcac28b69ac1eda38)

## Farcaster用のanifestファイル生成コマンド

```bash
npx create-onchain --manifest
```

## ローカルで起動させた時のスクショ

![](./docs/0.png)

![](./docs/1.png)

![](./docs/2.png)

![](./docs/3.png)

## 参考文献
- [Base Docs MiniApp](https://www.base.org/build/mini-apps)
- [MiniApp クイックスタート](https://docs.base.org/mini-apps/quickstart/new-apps/install)