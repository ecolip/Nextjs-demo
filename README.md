# next.js demo
### Steps
- `npx create-next-app@latest`
  -  What is your project named? › my-app
  - 直接執行 `npm run dev` 就可以在 localhost:3000 啟動 Next.js 專案
  - `npm run start` 是給 Production 發佈用, 執行前先跑 `npm run build`
- add static router in page
  - Next.js 為約定目錄所以開發時起始位置是在 pages 的這個目錄
  - 在page file 建一個js檔, router就是檔案名稱
- router
  - default router
    - 在page建一個資料夾 profile, 裡面建index.js當作default檔案, default就是index.js
  - add dynamic router: [username].js
    - 在資料夾 profile 裡面建[username].js檔案, 實作動態路由
- layout(nav, footer)
  - 剛開始在Home page放component:nav & footer
- fetch: `getServerSideProps` v.s `getStaticProps`
  - 建utils file, 裡面建api.js檔, 寫預設 api, 
  - getServerSideProps是在client發送request的時候執行拿資料 ex: 高SEO的電商
  - getStaticProps是在npm run build時拿資料 ex: 靜態網頁如需要高SEO的官網
- aip: server side
    - 點擊users page在server端打api, console出 '123'
    - 輸入about page input 更新畫面, 假裝打api的console也會是在client side
- npm run dev
- ref: https://nextjs.org/docs/getting-started
- HackMD: https://hackmd.io/mVR81Dn3TGWkCNRBGYfsIQ?view

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
