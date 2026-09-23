# 08 · Coding Challenge — สี่ sprint, Copilot เปิดตลอด

> ใช้ในช่วง **coding challenge หลังเบรก** ประมาณ 75 นาที
> brief 5 นาที · sprint 60 นาที · debrief 10 นาที

## เป้าหมาย

ดูว่าในเวลาที่จำกัด ท่านกับ Copilot ทำงานได้เร็วแค่ไหน ถูกแค่ไหน และได้งานเท่าไร
Copilot เปิดตลอดทุก sprint ใช้ได้ทุกโหมด ทั้ง autocomplete, Ask, Plan และ Agent

ทำคนเดียวใน editor ของตัวเอง ตอน debrief จะมีคนมาเปิดจอให้ทั้งห้องดู

## กติกา

1. **แต่ละ sprint มีสองโจทย์ เลือกทำหนึ่งโจทย์** ฝั่ง Frontend หรือฝั่ง Backend จะอยู่ฝั่งเดิมทั้งสี่ sprint หรือสลับก็ได้
2. **หมดเวลาแล้วหยุด** ทำไม่เสร็จไม่เป็นไร ไป sprint ถัดไปพร้อมทุกคน
3. **เริ่มโฟลเดอร์ใหม่ทุก sprint** เช่น `sprint-1/` `sprint-2/`
4. **ใช้ภาษาอะไรก็ได้** โจทย์ Backend เขียนตามแบบ Node.js + Express แต่จะใช้ Java, Python หรือ .NET ก็ได้ ขอแค่ทำงานตาม "เสร็จเมื่อ" ได้ครบ
5. **เสร็จก่อนเวลา ทำข้อ "ถ้าเหลือเวลา"** อย่านั่งรอ

## สี่ sprint

| Sprint | เวลา | Frontend | Backend |
|---|---|---|---|
| [1](./sprint-1.md) | 10 นาที | PM2.5 App | Todo List REST API |
| [2](./sprint-2.md) | 15 นาที | Matching Game | JWT Auth |
| [3](./sprint-3.md) | 15 นาที | Snake Game | CSV → JSON API |
| [4](./sprint-4.md) | 20 นาที | Product Dashboard | Search API |

## เช็คเครื่องก่อนเริ่ม ⚠️

ปัญหาที่เสียเวลามากที่สุดในช่วงนี้ไม่ใช่โจทย์ แต่เป็นเครื่อง เช็คสามข้อนี้ระหว่างที่ trainer กำลัง brief

| เช็คอะไร | คำสั่ง |
|---|---|
| มี runtime (ถ้าเขียน JavaScript ใช้ Node.js LTS) | `node --version` |
| ติดตั้ง package ผ่าน proxy ของบริษัทได้ | `npm view express version` |
| Copilot ยังตอบอยู่ | พิมพ์อะไรก็ได้ในไฟล์ แล้วรอ ghost text |

ข้อไหนไม่ผ่าน ยกมือเลย อย่าเริ่ม sprint ทั้งที่ install package ไม่ได้

โจทย์ Frontend ของ sprint 1–3 เป็นไฟล์ HTML เปิดใน browser ได้เลยไม่ต้องติดตั้งอะไร
ถ้า install package ไม่ได้จริง ๆ ให้อยู่ฝั่ง Frontend ไปก่อน

## วิธีทำงาน

ใช้ลำดับเดียวกับ module 05 — **Plan → Agent → review**

1. **Plan** — วางโจทย์ทั้งข้อลงใน Plan mode แล้วอ่านแผนก่อนให้ลงมือ
2. **Agent** — ให้ Agent mode เขียนตามแผน
3. **Review** — อ่าน diff แล้วไล่เช็คทีละข้อใน "เสร็จเมื่อ" ด้วยการรันจริง ไม่ใช่ด้วยการเชื่อ Copilot

จดไว้ระหว่างทำ เอาไปเล่าตอน debrief

- ตรงไหนที่ Copilot ทำเสร็จเร็วกว่าที่คิด
- ตรงไหนที่มันผิด แล้วท่านจับได้ยังไง
- prompt ไหนที่ได้ผลดีที่สุด
- ประโยคไหนที่ท่านต้องพิมพ์ซ้ำทุก sprint

> ข้อสุดท้ายสำคัญ เก็บไว้ให้ดี สไลด์หลัง debrief จะพูดถึงมัน
