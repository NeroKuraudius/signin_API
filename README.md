聯和趨動股份有限公司：後端工程師考題
===

#### 簡易登入API說明

## URL
>https://signin-api-25tn.onrender.com

## Signin
>Endpoints: **/signin**

>Method: **POST**

>Body: 
```javascript
{
  "email": "xxxxxx@test.com",
  "password": "abcd9487"
}
```

## Response
>Success:
- status: 200
```javascript
{
   "message": 'Signin successfully', 
   "token": 'eyJhb...' 
}
```

> Failure:
- status: 400 or 500
```javascript
{
    "Error": "Incorrect Password"
}
```

# 可使用的測試帳號:
```javascript
{ email: yoasobi@example.com, password: yorunikakeru}
{ email: hoshimachi@example.com, password: superstar },
{ email: yagami@example.com, password: wargreymon }
```
