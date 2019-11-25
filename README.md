# chatOne

## 1. REST API

### 1.1. GET /getAllUser
#### Request
- Parameter
#### Respone
```json
Here goes your json object definition
```

### 1.2. GET /getContactsByEmail
#### Request
- email (String)
#### Respone
```json
[
  {
    "email": "phuongdtk@fsoft.com.vn",
    "userName": "PhuongDTK",
    "avatar": "http://fsoft.com.vn"
  },
  {
    "email": "hongltb@fsoft.com.vn",
    "userName": "HongLTB",
    "avatar": "http://fsoft.com.vn"
  },
  {
    "email": "anhtt20@fsoft.com.vn",
    "userName": "AnhTT",
    "avatar": "http://fsoft.com.vn"
  }
]
```
### 1.3. GET /getChanelsByEmail
#### Request
- email (String)
#### Respone
```json
[
  {
    "chanelId": "1",
    "members": [
      {
        "email": "sytd03@fsoft.com.vn",
        "userName": "SyTD",
        "avatar": "http://fsoft.com.vn"
      },
      {
        "email": "anhtt20@fsoft.com.vn",
        "userName": "AnhTT",
        "avatar": "http://fsoft.com.vn"
      }
    ]
  },
  {
    "chanelId": "4",
    "members": [
      {
        "email": "sytd03@fsoft.com.vn",
        "userName": "SyTD",
        "avatar": "http://fsoft.com.vn"
      },
      {
        "email": "anhtt20@fsoft.com.vn",
        "userName": "AnhTT",
        "avatar": "http://fsoft.com.vn"
      },
      {
        "email": "phuongdtk@fsoft.com.vn",
        "userName": "PhuongDTK",
        "avatar": "http://fsoft.com.vn"
      },
      {
        "email": "hongltb@fsoft.com.vn",
        "userName": "HongLTB",
        "avatar": "http://fsoft.com.vn"
      }
    ]
  }
]
```
### 1.4. POST /createChanel
#### Request
- members (List<String>)  
{
  "members": ["sytd03@fsoft.com.vn", "anhtt20@fsoft.com.vn"]
 }
#### Respone
```json
{
  "statusCode": 200
}

200: add ok
```
### 1.5. POST /addContact
#### Request
- email (String) 
- contact (String)
#### Respone
```json
{
  "statusCode": 201
}

200: add ok
201: exist contact
```
### 1.6. GET /getUserInfo

### 1.7. POST /changeAvatar

### 1.8. POST /login

### 1.9. GET/POST /logout

### 1.10. POST /signup


## 2. Websocket

### 2.1. /sendMessage

### 2.2. /getMessage

### 2.3. /getConnection

### 2.4. /alertMessageStatus
