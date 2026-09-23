# Sprint 4 · 20 นาที

เลือกหนึ่งข้อ · [กลับไปหน้ากติกา](./README.md)

---

## Frontend · Product Dashboard

สร้างหน้าจัดการสินค้า มีทั้งหน้าเว็บและ API ของตัวเอง

**Frontend (React)**

- ดูรายการสินค้าแบบแบ่งหน้า แสดงชื่อสินค้า ราคา และหมวดหมู่
- เพิ่มสินค้าใหม่ผ่านฟอร์ม

**Backend (Node.js + Express)**

| Method | Path | ทำอะไร |
|---|---|---|
| `GET` | `/products` | ดึงรายการสินค้าทั้งหมด |
| `POST` | `/products` | เพิ่มสินค้าใหม่ |

เก็บข้อมูลใน memory หรือ SQLite ก็ได้ ไม่ต้องตั้ง database แยก

**เสร็จเมื่อ**

- [ ] หน้าเว็บดึงรายการจาก API ของท่านเอง ไม่ใช่ข้อมูลที่ฝังในหน้าเว็บ
- [ ] pagination ทำงาน
- [ ] เพิ่มสินค้าจากฟอร์มแล้ว เห็นในรายการทันที
- [ ] ฟอร์มไม่ยอมให้ส่งเมื่อชื่อว่างหรือราคาไม่ใช่ตัวเลข

> 20 นาทีรวมเวลาขึ้นโครง React และ `npm install` แล้ว
> ให้ Plan mode วางโครงทั้งสองฝั่งก่อน แล้วค่อยให้ Agent ลงมือ

**ถ้าเหลือเวลา**
เพิ่มจำนวนสต็อกของสินค้า แล้วให้หน้าเว็บอัปเดตเองทันทีที่สต็อกเปลี่ยน โดยไม่ต้องรีเฟรช ใช้ WebSocket หรือ Server-Sent Events

---

## Backend · Search API

สร้าง API ค้นหาสินค้า พร้อมแบ่งหน้า เรียงลำดับ และกรอง

**ข้อมูล** · สร้างข้อมูล mock อัตโนมัติอย่างน้อย 50 รายการ มี `id`, `name`, `description`, `price`, `category`

**Endpoints**

| Method | Path | ทำอะไร |
|---|---|---|
| `GET` | `/products` | แสดงสินค้าทั้งหมด |
| `GET` | `/products?search=keyword` | ค้นหาจาก `name` และ `description` |
| `GET` | `/products?page=1&limit=10` | แบ่งหน้า |
| `GET` | `/products?sort=price&order=asc` | เรียงลำดับ |
| `GET` | `/products?category=electronics&minPrice=100&maxPrice=500` | กรอง |

**เสร็จเมื่อ**

- [ ] search ไม่สนตัวพิมพ์เล็กพิมพ์ใหญ่
- [ ] pagination คืน `totalItems`, `totalPages`, `currentPage`
- [ ] search, sort และ filter ใช้พร้อมกันใน request เดียวได้
- [ ] ใช้หลาย filter พร้อมกันได้
- [ ] ส่ง `page=abc` หรือ `limit=-1` แล้วได้ `400` ไม่ใช่ server พัง

**ถ้าเหลือเวลา**
ให้ Copilot เขียน test ที่ใช้ search, sort และ filter พร้อมกัน แล้วรันให้ผ่าน
