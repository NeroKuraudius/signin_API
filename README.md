聯和趨動股份有限公司：後端工程師考題
===

#### 簡易登入API說明

## URL
>URL

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
