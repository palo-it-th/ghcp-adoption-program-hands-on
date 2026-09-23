# Sprint 1 · 10 นาที

เลือกหนึ่งข้อ · [กลับไปหน้ากติกา](./README.md)

---

## Frontend · PM2.5 App

สร้างหน้าเว็บที่ดึงข้อมูลคุณภาพอากาศจาก public API แล้วแสดงผล

**API**

```
https://api.waqi.info/feed/shanghai/?token=demo
```

- เรียกจาก browser ได้ตรง ๆ ไม่ติด CORS
- token `demo` **ส่งข้อมูล Shanghai กลับมาเสมอ** ไม่ว่าจะขอเมืองไหน
- ค่าที่ต้องใช้อยู่ใน `data.city.name` และ `data.iaqi` → `pm25`, `t` (อุณหภูมิ), `w` (ลม), `h` (ความชื้น)
- เอกสาร API: https://aqicn.org/api/

**เสร็จเมื่อ** หน้าเว็บแสดงค่าเหล่านี้จาก API

- [ ] ชื่อเมือง
- [ ] ค่า PM2.5
- [ ] อุณหภูมิ
- [ ] แรงลม
- [ ] ความชื้นในอากาศ
- [ ] ถ้า API ตอบ `"status":"error"` หน้าเว็บบอกผู้ใช้ ไม่ใช่หน้าว่าง

**ถ้าเหลือเวลา**
สมัคร token ของตัวเองที่ https://aqicn.org/data-platform/token/ แล้วเพิ่มช่องค้นหาตามชื่อเมือง

---

## Backend · Todo List REST API

สร้าง REST API สำหรับจัดการ Todo List เก็บข้อมูลใน memory ไม่ต้องใช้ database

**ข้อมูล Todo** · `id`, `title`, `description`, `completed`, `createdAt`

**Endpoints**

| Method | Path | ทำอะไร |
|---|---|---|
| `GET` | `/todos` | แสดง Todo ทั้งหมด |
| `GET` | `/todos/:id` | แสดง Todo ตาม id |
| `POST` | `/todos` | สร้าง Todo ใหม่ |
| `PATCH` | `/todos/:id` | แก้ไข Todo |
| `DELETE` | `/todos/:id` | ลบ Todo |

**เสร็จเมื่อ**

- [ ] ทุก endpoint ทำงานถูกต้อง ลองยิงจริงด้วย curl, REST Client หรือ Postman
- [ ] มี validation ของ request body เช่น `title` ห้ามว่าง
- [ ] ตอบ status code ให้ถูก: `200`, `201`, `400`, `404`

**ถ้าเหลือเวลา**
ให้ Copilot เขียน test ของทุก endpoint แล้วรันให้ผ่าน
