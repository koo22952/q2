# q1
link8_fontEnd 學習計畫 Q1 21/9/1

[文檔網址](https://hackmd.io/LUZd8aLlRKGfaotpTYFZPA?view)



## 建議優化項目
1. ~~vite 不支持 webpackChunkName 註解，請砍掉~~
2. ~~import 路徑建議一律 alias 處理~~
3. local/sessionStorage 一律建議不要直接 get/set/removeItem 來進行操作，建議由 store 驅動這些資料，不然你要一直 parse 轉來轉去
4. ~~axios 少了全局錯誤捕獲攔截器，這樣每隻身分 api 都要手動 catch 確認是否為權限不足~~
5. 驗證方式錯誤，不是檢測有沒有 token，而是 /api/authentication api 檢驗有沒有通過
6. 註冊表單驗證錯誤，送出前沒再進行較驗
7. login api 都一樣，請復用
8. ~~toast 的 time 變量毫無意義~~
9. ~~success/error toast 除了 icon 不一樣外都一樣，寫一起不香嗎？~~
10. loading 組件實現看來有問題呀，多個 start 不該是疊加，是復用吧？
11. 你的 input 組件有寫 prop 是幹嘛的註解，這種註解一律建議使用 jsdoc 來寫
12. 看你有封裝 input 組件，那建議驗證也在組件內驗證，看要 input 組件驗證，還是 form 驗證皆可
13. 等驗證完在進頁面，不要沒驗證完就進，那驗證的意義就沒了
14. axios 少了全局錯誤捕獲攔截器，這樣每隻身分 api 都要手動 catch 確認是否為權限不足，雖然你沒搓驗證，但還是提醒一下
15. 少了防禦編程，任何可能為空的值都要防呆，如 Input 的 change
16. 建議任何輸入/輸出組件要有組內自制及組外控制的機制，意思為不傳 value 組件能動，傳 value 也能讓傳入方改變組件的值，但如果是開發專案的話不這麼做也沒差，但建議做
