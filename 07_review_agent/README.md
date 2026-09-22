# 07 · Review Agent — ให้ Copilot รีวิว pull request

> ใช้ในช่วง **coding challenge หลังเบรก**
> ส่วนที่ 1 ต่อจาก [module 06](../06_cloud_agent/) โดยตรง ส่วนที่ 2 ทำแยกได้

## เป้าหมาย

- ขอรีวิวจาก Copilot บน PR จริง แล้วอ่านผลให้เป็น
- แยกให้ออกว่าคอมเมนต์ไหนควรแก้ ไหนควรปัด
- รู้ว่า**จะสั่งให้มันแก้ยังไง** ซึ่งไม่ใช่การพิมพ์ตอบใต้คอมเมนต์อย่างที่หลายคนเดา

## ก่อนเริ่ม

ต้องมี Copilot แบบเสียเงิน (แผนไหนก็ได้) และมี PR สักใบบน fork ของท่าน
Copilot code review กิน Actions minutes **เฉพาะ private repo** — fork ของ repo นี้เป็น public เลยไม่โดน

---

## ส่วนที่ 1 · รีวิว PR ที่ agent เพิ่งเขียนให้

ใช้ PR ที่ได้จาก module 06

### ขอรีวิว

1. เปิด PR นั้น
2. แถบขวามือ หัวข้อ **Reviewers** ตรงชื่อ **Copilot** กด **Request**
3. รอ — ปกติ **ไม่ถึง 30 วินาที**
4. เลื่อนลงไปอ่านคอมเมนต์

### อ่านผลให้เป็น

คอมเมนต์ทุกอันมีป้ายระดับความสำคัญ **High / Medium / Low** ให้ไล่จาก High ก่อน

คำถามที่ต้องถามตัวเองกับทุกคอมเมนต์ — **มันถูกมั้ย** ไม่ใช่ **มันดูฉลาดมั้ย**
รีวิวจาก AI ผิดได้ และผิดแบบมั่นใจด้วย นี่คือเหตุผลที่คนยังต้องอ่าน

ในภาพรวมของรีวิวจะมีการประเมินด้วยว่า Copilot คิดว่า PR นี้พร้อม approve มั้ย
**การประเมินนั้นไม่นับเป็น approval จริงในกฎการ merge**

### สั่งให้มันแก้

ตรงนี้คือจุดที่คนพลาดกันเยอะ มีสามอย่างที่หน้าตาคล้ายกันแต่ทำงานคนละแบบ

| ท่านอยากทำอะไร | ต้องใช้อะไร |
|---|---|
| แก้ตามคอมเมนต์ใบนั้น | กด **Fix with Copilot** ที่คอมเมนต์นั้น แล้วบอกว่าจะให้แก้ยังไง |
| ขอให้แก้อะไรที่กว้างกว่านั้น | พิมพ์ `@copilot` ใน**คอมเมนต์ใหม่ของ PR** (คนละที่กับ review comment) |
| พิมพ์ตอบใต้ review comment ของมัน | ❌ **คนเห็น แต่ Copilot ไม่เห็น และจะไม่ตอบ** |

บางคอมเมนต์จะมี suggested change มาให้เลย กดรับได้ในสองคลิก

แก้เสร็จแล้วขอรีวิวใหม่ได้ที่ปุ่ม 🔄 ข้างชื่อ Copilot ในเมนู **Reviewers**

---

## ส่วนที่ 2 · รีวิวโค้ดที่แย่โดยตั้งใจ

ส่วนที่ 1 รีวิวงานที่ agent เขียน ซึ่งมักจะค่อนข้างเรียบร้อย — ดีต่องาน แต่ไม่ค่อยได้เห็นว่ารีวิวมันจับอะไรได้บ้าง

ส่วนนี้เลยมี fixture ที่**จงใจเขียนให้แย่**ไว้ให้ เพื่อให้เห็นเพดานของมัน

### เปิด PR ที่มีช่องโหว่

บน fork ของท่าน รันสี่คำสั่งนี้

```bash
git checkout -b insecure-user-service
mkdir -p src && cp 07_review_agent/fixtures/user-service.js 07_review_agent/fixtures/UserDashboard.jsx src/
git add src && git commit -m "Add user service and dashboard"
git push -u origin insecure-user-service
```

แล้วเปิด PR จาก branch นี้เข้า `main` ของ fork ท่านเอง จากนั้นขอรีวิวแบบเดิม

### เทียบกับเฉลย

ในไฟล์ฝังช่องโหว่ไว้แบบนี้ — **อ่านหลังจากที่ Copilot รีวิวเสร็จแล้วเท่านั้น**

<details>
<summary>รายการช่องโหว่ที่ฝังไว้ (สปอยล์)</summary>

**`user-service.js`**

1. SQL injection — เอา input ต่อสตริงเข้า query ตรง ๆ
2. Hardcoded credentials — host/user/password ของ database อยู่ในซอร์ส
3. Weak JWT secret — `'12345'`
4. ไม่ validate input เลยสักจุด
5. Information disclosure — คืน `err.stack` และตัว query กลับไปให้ผู้เรียก
6. ไม่มี authentication/authorization — ใครก็เรียก `/users` และ `/users/:id` ได้
7. เก็บรหัสผ่านเป็น plain text แถม log ออก console
8. ไม่มี rate limiting — brute force `/login` ได้
9. `is_admin` มาจาก request body ตรง ๆ — privilege escalation
10. `/me` ใช้ `jwt.decode` ไม่ใช่ `jwt.verify` — token ปลอมก็ผ่าน

**`UserDashboard.jsx`**

1. XSS — `innerHTML` และ `dangerouslySetInnerHTML` กับ bio ที่ผู้ใช้กรอกเอง
2. เอา password, SSN, เลขบัตรมาแสดงบนหน้าจอ
3. เก็บ token ใน `localStorage`
4. ไม่มี CSRF protection
5. `console.log` ข้อมูลผู้ใช้ทั้งก้อน
6. ไม่มี error handling — request พังแล้วตารางว่างเงียบ ๆ
7. `innerHTML` ใน React ทั้งที่ควรใช้ state
8. ปุ่ม Delete ไม่มีการยืนยัน
9. `<tr>` ไม่มี `key`

</details>

### สิ่งที่ต้องสังเกต

- มันจับได้กี่ข้อจากรายการข้างบน
- ข้อไหนที่มันจัดเป็น High และท่านเห็นด้วยมั้ย
- **มันจับอะไรที่รายการนี้ไม่มีบ้าง** — ข้อนี้สนุกที่สุด
- มีคอมเมนต์ไหนที่มันผิดหรือไม่เกี่ยวมั้ย

ใน `fixtures/` ยังมี [`sql-injection-example.js`](./fixtures/sql-injection-example.js)
กับ [`sql-injection-test.js`](./fixtures/sql-injection-test.js) ซึ่งเป็น**ตัวอย่างวิธีแก้ที่ถูกต้อง**
ด้วย parameterized query ใช้เทียบกับข้อที่ Copilot จับได้ในเรื่อง SQL injection

> 🔒 `user-service.js` กับ `UserDashboard.jsx` ใน `fixtures/` เขียนให้แย่โดยเจตนา เป็นโจทย์ฝึกอย่างเดียว
> ห้ามคัดลอกส่วนไหนไปใช้ในงานจริง

## คำถามสำหรับแชร์

- รีวิวจาก Copilot แทนรีวิวจากคนได้แค่ไหน แทนไม่ได้ตรงไหน
- ถ้าจะเปิดรีวิวอัตโนมัติทุก PR ในทีมท่าน จะเปิดกับ repo ไหนก่อน
- อะไรที่ท่านอยากให้มันรู้เกี่ยวกับ codebase ของท่าน แล้วมันยังไม่รู้
