# 後端工程師實作考題

## 題目描述

請實作一個使用 Express.js 建立的登入 API，完成以下要求的功能並將程式碼上傳至個人 GitHub 公開 repository。

## 技術需求

- 後端框架：Express.js
- 資料庫：MySQL
- ORM：Sequelize
- 資料驗證套件：Joi
- 登入驗證機制：JWT

## 功能要求

### 1. API endpoint：登入 API

### 2. 請求資料驗證

使用 Joi 進行以下欄位驗證：

- email:
    - 必填字串
    - 須符合電子郵件格式
- password:
    - 必填字串
    - 長度限制：8-20 字元

### 3. 資料庫設計

使用 Sequelize 建立 Migration 來產生以下資料表：**users 表格**

### 4. JWT 實作要求

- 登入成功後產生 JWT token
- token 過期時間設定為 24 小時
- 回傳格式須包含 token

### 5. 回應格式

- 成功回應
- 錯誤回應

### 6. 部署到任意 PaaS 平台或 VM

## 繳交要求

1. 將程式碼上傳至個人 GitHub
2. Repository 必須設為 Public
