
## API Reference

#### Get all product

```http
  GET /v1/api/products
```

| Token | Description                |
| :-------- | :------------------------- |
| `yes` | Send jwt token in headers |

#### Update product

```http
  GET /v1/api/products/:id
```

| Token | Description                | Body     |
| :-------- | :------------------------- | -------- |
| `yes` | Send jwt token in headers | {name: string}

#### Create product

```http
  POST /v1/api/products
```

| Token | Description                | Body     |
| :-------- | :------------------------- | -------- |
| `yes` | Send jwt token in headers | {name}

#### Delete product

```http
  GET /v1/api/products/:id
```

| Token | Description                |
| :-------- | :-------------------------
| `yes` | Send jwt token in headers

#### Login 

```http
  GET /v1/auth/login
```

| Token | Description                | Body     |
| :-------- | :------------------------- | -------- |
| No | - | {email, password}

#### Register 

```http
  GET /v1/auth/register
```

| Token | Description                | Body     |
| :-------- | :------------------------- | -------- |
| No | - | {email, password, fullname, gender}
