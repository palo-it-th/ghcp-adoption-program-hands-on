# Hands-on GitHub Copilot Workshop

## ภาพรวมการอบรม

lab ชุดนี้ใช้ในช่วง hands-on ของ Kick-off Day ซึ่งมีเวลา **30 นาที** สำหรับ module 01–05
ส่วน module 06 และ 07 อยู่หลังเบรก ใช้ในช่วง coding challenge

### 📋 โครงร่างช่วง hands-on (30 นาที)

| เวลา | หัวข้อ | โฟลเดอร์ | กิจกรรม |
|------|--------|-----------|----------|
| 5 นาที | Getting Started | `01_getting_started` | ติดตั้งและ sign in ให้ Copilot ตอบได้จริง |
| 5 นาที | Basic Usage | `02_basic_usage` | ghost text, Tab, วนดูตัวเลือกอื่น |
| 5 นาที | Comments to Code | `03_comments_to_code` | เขียน comment ให้ Copilot สร้างโค้ด |
| 5 นาที | Refactoring | `04_refactoring_optimization` | ใช้ Ask เพื่อเข้าใจ แล้วใช้ Agent เพื่อแก้ |
| 10 นาที | Mini Challenge | `05_mini_challenge` | Plan → Agent → อ่าน diff |

> 🖥️ **ภาพประกอบในทุก module ถ่ายจาก VS Code**
> ท่านที่ใช้ IntelliJ จะเห็นหน้าจอไม่เหมือนกัน แต่ขั้นตอนและแนวคิดเดียวกันทั้งหมด
> ติดตรงไหนว่าเมนูอยู่ที่ไหนใน IntelliJ ยกมือถามได้เลย

> ⏱️ **แต่ละไฟล์มีแบบฝึกหัดมากกว่าที่เวลาจะพอ ตั้งใจไว้แบบนั้น**
> ทำ 2–3 ข้อต่อ module แล้วไปต่อ ไม่ต้องทำครบ ที่เหลือเก็บไว้ทำเองหลังคลาสได้
> ถ้าติดเกินสองนาที ยกมือเรียกทีมงาน อย่าเสียเวลาทั้ง module กับปัญหา sign-in

### 🧩 หลังเบรก · ใช้ในช่วง coding challenge

สองอันนี้อยู่บน **github.com** ไม่ใช่ใน editor และ**ต่อกันเป็นลูปเดียว**
ต้อง fork repo นี้ไปบัญชีตัวเองก่อน เพราะต้องมีสิทธิ์เขียนถึงจะ assign Copilot และเปิด PR ได้

| หัวข้อ | โฟลเดอร์ | กิจกรรม |
|--------|-----------|----------|
| Cloud Agent | `06_cloud_agent` | เขียน issue → assign ให้ Copilot → มันเปิด PR กลับมา |
| Review Agent | `07_review_agent` | ขอ Copilot รีวิว PR ใบนั้น แล้วรีวิวโค้ดที่แย่โดยตั้งใจอีกชุด |

> ⚠️ **cloud agent ใช้ไม่ได้ใน repo ของ Enterprise Managed Users (EMU)**
> และต้องมี Copilot แบบเสียเงิน ตรวจสองข้อนี้ก่อนวันอบรม

### 🎯 เป้าหมายการเรียนรู้

- เข้าใจวิธีการใช้งาน GitHub Copilot อย่างมีประสิทธิภาพ
- สามารถใช้ Copilot ช่วยเขียนโค้ดในงานจริง
- เรียนรู้เทคนิคการเขียน comment ที่ทำให้ Copilot ทำงานได้ดี
- ใช้ Copilot ในการ refactor และปรับปรุงโค้ด
- สร้าง unit test ด้วยความช่วยเหลือของ Copilot

### 📂 โครงสร้างโฟลเดอร์

```
ghcp-adoption-program-hands-on/
├── 01_getting_started/           # เริ่มต้นใช้งาน
├── 02_basic_usage/               # การใช้งานพื้นฐาน
├── 03_comments_to_code/          # แปลง comment เป็นโค้ด
├── 04_refactoring_optimization/  # ปรับปรุงโค้ด
├── 05_mini_challenge/            # โจทย์ฝึกหัด
├── 06_cloud_agent/               # assign issue ให้ Copilot บน github.com
└── 07_review_agent/              # ให้ Copilot รีวิว PR
```

### 🚀 การเตรียมตัว

1. **ติดตั้ง IDE**: VS Code หรือ IntelliJ IDEA
2. **GitHub Account**: ที่มี Copilot license
3. **Extensions**: ติดตั้ง GitHub Copilot extension
4. **ไฟล์แบบฝึกหัด**: ดาวน์โหลดไฟล์ในแต่ละโฟลเดอร์

### 💡 เทคนิคสำคัญ

- **เขียน comment ที่ชัดเจน**: อธิบายสิ่งที่ต้องการอย่างเฉพาะเจาะจง
- **ใช้ชื่อที่สื่อความหมาย**: ชื่อฟังก์ชันและตัวแปรที่ดีช่วยให้ Copilot เข้าใจ
- **ทดสอบโค้ดเสมอ**: ตรวจสอบโค้ดที่ Copilot สร้างให้
- **เรียนรู้จากข้อเสนอแนะ**: สังเกตวิธีที่ Copilot เขียนโค้ด

### 📖 แหล่งข้อมูลเพิ่มเติม

- [GitHub Copilot Documentation](https://docs.github.com/en/copilot)
- [VS Code Copilot Guide](https://code.visualstudio.com/docs/editor/github-copilot)
- [Best Practices](https://github.blog/2023-06-20-how-to-write-better-prompts-for-github-copilot/)

### 🤝 การแชร์ประสบการณ์

ในตอนท้ายของแต่ละหัวข้อ จะมีการแชร์ประสบการณ์:
- Copilot ช่วยตรงไหนได้บ้าง?
- มีจุดไหนที่ต้องปรับแต่งเพิ่มเติม?
- เทคนิคไหนที่ทำให้ Copilot ทำงานได้ดีขึ้น?

---

**เริ่มต้นได้จากโฟลเดอร์ `01_getting_started`** 🎉
