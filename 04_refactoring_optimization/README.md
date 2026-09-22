# Code Refactoring & Optimization

## เป้าหมาย
- ใช้ Copilot ในการปรับปรุงโค้ดที่มีอยู่
- **ฝึกนิสัย Ask ก่อน แล้วค่อย Agent**
- ลดโค้ดซ้ำซ้อน (Code Duplication)
- ปรับปรุง Performance
- ทำให้โค้ดอ่านง่ายขึ้น

## ลำดับที่ใช้ใน module นี้ 🔁

เปิด `bad-code.js` แล้วทำสองจังหวะนี้กับแต่ละเคส

| จังหวะ | mode | ทำอะไร |
|---|---|---|
| 1 | **Ask** | เลือกโค้ด แล้วถามว่า "ฟังก์ชันนี้มีปัญหาอะไร" — Ask ไม่แตะไฟล์ ใช้ทำความเข้าใจก่อน |
| 2 | **Agent** | พอเห็นภาพแล้วค่อยสั่ง Agent ให้ลงมือแก้ แล้ว**อ่าน diff ทุกบรรทัดก่อนรับ** |

> ⚠️ ข้ามจังหวะ Ask ไปสั่ง Agent เลยก็ได้ผล แต่ท่านจะไม่รู้ว่ามันแก้ถูกหรือเปล่า
> ในคลาสมีเวลา 5 นาที ทำสัก 2 เคสพอ ที่เหลือมีห้าเคสให้ทำต่อเองได้

## วิธีการใช้ Copilot สำหรับ Refactoring

### 1. การลดโค้ดซ้ำซ้อน
- เลือกโค้ดที่ซ้ำซ้อน
- เขียน comment ว่าต้องการแยกเป็นฟังก์ชัน
- ให้ Copilot แนะนำการปรับปรุง

### 2. การปรับปรุง Performance
- เขียน comment อธิบายปัญหา performance
- ให้ Copilot แนะนำวิธีการปรับปรุง
- เปรียบเทียบ Big O notation

### 3. การทำให้โค้ดอ่านง่าย
- แยกฟังก์ชันใหญ่เป็นฟังก์ชันเล็กๆ
- ตั้งชื่อตัวแปรให้สื่อความหมาย
- เพิ่ม comments ที่เหมาะสม

## เทคนิคการ Refactoring
- อ่านโค้ดเดิมก่อนปรับปรุง
- ทำทีละขั้นตอนเล็กๆ
- เขียน comment อธิบายสิ่งที่ต้องการปรับปรุง
- ทดสอบโค้ดหลัง refactor

## ตัวอย่างการใช้ Comment สำหรับ Refactoring
```javascript
// Refactor this function to reduce code duplication
// Extract common logic into separate functions
// Improve performance by using more efficient algorithms
```
