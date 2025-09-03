
# 🛒 Products REST API

A REST API built with **Node.js + Express + MongoDB** and deployed on **Render**.  
This API provides products data with support for **search, filtering, sorting, field selection, and pagination**.

---

## 🌐 Live API URL
👉 [https://rest-api-12c0.onrender.com](https://rest-api-12c0.onrender.com)

Custom Route:  
```
/api/products
```

---

## ⚙️ Features
- ✅ **Filter** products by company, name, or featured  
- ✅ **Search** products by partial name (case-insensitive)  
- ✅ **Sort** products by multiple fields  
- ✅ **Select** specific fields to return  
- ✅ **Pagination** with page & limit  

---

## 📌 Query Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| `company` | Filter by company | `/api/products?company=Apple` |
| `name` | Search by product name (case-insensitive, regex) | `/api/products?name=iphone` |
| `featured` | Filter by featured status (`true`/`false`) | `/api/products?featured=true` |
| `sort` | Sort by one or more fields (comma-separated) | `/api/products?sort=price` <br> `/api/products?sort=company,price` |
| `select` | Select specific fields to return (comma-separated) | `/api/products?select=name,price` |
| `page` | Pagination - page number (default: 1) | `/api/products?page=2` |
| `limit` | Pagination - items per page (default: 10) | `/api/products?limit=5` |

---

## 🚀 Example Requests

1. **Get all products**
   ```http
   GET /api/products
   ```

2. **Filter by company**
   ```http
   GET /api/products?company=Apple
   ```

3. **Search by name**
   ```http
   GET /api/products?name=iphone
   ```

4. **Sort by price (ascending)**
   ```http
   GET /api/products?sort=price
   ```

5. **Sort by company and price (descending)**
   ```http
   GET /api/products?sort=company,-price
   ```

6. **Select only name and price fields**
   ```http
   GET /api/products?select=name,price
   ```

7. **Pagination (page 2, 5 results per page)**
   ```http
   GET /api/products?page=2&limit=5
   ```

---

## 🛠 Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB + Mongoose**
- **Deployed on Render**

---

## 📌 Setup Locally
```bash
# Clone repo
git clone https://github.com/yadavsantu/REST-api.git

# Install dependencies
npm install

# Create .env file and add your MongoDB URI
MONGO_URI=your_mongodb_url
PORT=5000

# Start server
npm run dev
```

---


