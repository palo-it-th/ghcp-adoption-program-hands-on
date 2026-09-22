# E-commerce Cart System 🛒

> 📋 **นี่คือสเปกของสิ่งที่ต้องสร้าง ไม่ใช่โค้ดสำเร็จรูป**
> ในโฟลเดอร์นี้มีแค่เอกสารใบนี้ — ไฟล์ข้างล่างคือสิ่งที่ท่านจะให้ Copilot สร้างขึ้นมา
> ส่ง API Reference ท้ายเอกสารให้ Copilot เป็น requirement ได้เลย

ระบบตะกร้าสินค้าที่มีฟีเจอร์ครบครันสำหรับ E-commerce

## ฟีเจอร์ที่รองรับ ✨

- ✅ **เพิ่มสินค้าลงตะกร้า** - เพิ่มสินค้าพร้อม id, name, price, quantity
- ✅ **ลบสินค้าออกจากตะกร้า** - ลบสินค้าทั้งหมดออกจากตะกร้า
- ✅ **อัพเดทจำนวนสินค้า** - เปลี่ยนจำนวนสินค้าในตะกร้า
- ✅ **คำนวณราคารวม** - คำนวณราคารวมของสินค้าทั้งหมด
- ✅ **คำนวณส่วนลด** - ส่วนลด 10% เมื่อซื้อครบ 1,000 บาท
- ✅ **แสดงสรุปคำสั่งซื้อ** - แสดงรายการสินค้าและราคารวม

## ไฟล์ที่ต้องสร้าง 📁

```
ecommerce-cart/
├── cart-system.js    # คลาสหลักของระบบตะกร้า  ← ให้ Copilot สร้าง
├── cart-demo.html    # หน้าเว็บสำหรับทดสอบ     ← ให้ Copilot สร้าง
└── README.md         # เอกสารนี้ (สเปก)
```

## เป้าหมายการใช้งาน 🚀

โค้ดที่สร้างเสร็จต้องเรียกใช้ได้แบบนี้

### 1. การใช้งานใน Web Browser

เปิดไฟล์ `cart-demo.html` ในเบราว์เซอร์แล้วต้องใช้งานได้แบบ interactive

### 2. การใช้งานใน JavaScript

```javascript
// สร้าง instance ใหม่
const cart = new ShoppingCart();

// เพิ่มสินค้าลงตะกร้า
cart.addItem('phone', 'โทรศัพท์มือถือ', 15000, 1);
cart.addItem('case', 'เคสโทรศัพท์', 350, 2);

// อัพเดทจำนวนสินค้า
cart.updateQuantity('phone', 2);

// ลบสินค้า
cart.removeItem('case');

// ดูสรุปคำสั่งซื้อ
cart.displayOrderSummary();

// ได้ข้อมูลสรุปในรูปแบบ object
const summary = cart.getOrderSummary();
console.log(summary);
```

### 3. การใช้งานใน Node.js

```javascript
const ShoppingCart = require('./cart-system.js');

const cart = new ShoppingCart();
cart.addItem('item1', 'สินค้าตัวอย่าง', 500, 1);
cart.displayOrderSummary();
```

## API Reference 📚

### constructor()
สร้าง instance ใหม่ของตะกร้าสินค้า

### addItem(id, name, price, quantity = 1)
เพิ่มสินค้าลงตะกร้า หรือเพิ่มจำนวนถ้ามีอยู่แล้ว

**Parameters:**
- `id` (string) - รหัสเฉพาะของสินค้า
- `name` (string) - ชื่อสินค้า
- `price` (number) - ราคาต่อหน่วย
- `quantity` (number) - จำนวน (default: 1)

### removeItem(id)
ลบสินค้าออกจากตะกร้าทั้งหมด

**Parameters:**
- `id` (string) - รหัสสินค้าที่ต้องการลบ

**Returns:** boolean - true ถ้าลบสำเร็จ

### updateQuantity(id, quantity)
อัพเดทจำนวนสินค้า (ถ้าจำนวนเป็น 0 หรือติดลบจะลบสินค้าออก)

**Parameters:**
- `id` (string) - รหัสสินค้า
- `quantity` (number) - จำนวนใหม่

**Returns:** boolean - true ถ้าอัพเดทสำเร็จ

### calculateSubtotal()
คำนวณราคารวมก่อนหักส่วนลด

**Returns:** number - ราคารวมก่อนส่วนลด

### calculateDiscount()
คำนวณจำนวนเงินส่วนลด

**Returns:** number - จำนวนเงินส่วนลด

### calculateTotal()
คำนวณราคารวมหลังหักส่วนลด

**Returns:** number - ราคารวมสุทธิ

### getOrderSummary()
ได้ข้อมูลสรุปคำสั่งซื้อในรูปแบบ object

**Returns:** object - ข้อมูลสรุปคำสั่งซื้อ

### displayOrderSummary()
แสดงสรุปคำสั่งซื้อใน console

### clearCart()
ล้างสินค้าทั้งหมดออกจากตะกร้า

### getTotalItems()
นับจำนวนสินค้าทั้งหมดในตะกร้า

**Returns:** number - จำนวนสินค้าทั้งหมด

## ตัวอย่างการใช้งาน 💡

```javascript
const cart = new ShoppingCart();

// เพิ่มสินค้าหลายชิ้น
cart.addItem('laptop', 'โน๊ตบุ๊ค', 25000, 1)
    .addItem('mouse', 'เม้าส์', 500, 2)
    .addItem('keyboard', 'คีย์บอร์ด', 1500, 1);

// ตรวจสอบข้อมูล
console.log(`จำนวนสินค้าทั้งหมด: ${cart.getTotalItems()} ชิ้น`);
console.log(`ราคารวม: ฿${cart.calculateTotal()}`);

// แสดงสรุปคำสั่งซื้อ
cart.displayOrderSummary();
```

## การทดสอบ 🧪

เปิดไฟล์ `cart-demo.html` ในเบราว์เซอร์และทดสอบฟีเจอร์ต่างๆ:

1. **เพิ่มสินค้า** - คลิกปุ่ม "เพิ่มลงตะกร้า" ที่สินค้าต่างๆ
2. **ปรับจำนวน** - ใช้ปุ่ม +/- หรือกรอกจำนวนโดยตรง
3. **ลบสินค้า** - คลิกปุ่ม "ลบ" ที่สินค้าในตะกร้า
4. **ดูส่วนลด** - เพิ่มสินค้าให้ครบ 1,000 บาทเพื่อดูส่วนลด 10%
5. **ล้างตะกร้า** - คลิกปุ่ม "ล้างตะกร้า"

## ข้อกำหนดระบบส่วนลด 🎯

- **เงื่อนไข**: ซื้อสินค้ารวมมากกว่า 1,000 บาท
- **ส่วนลด**: 10% ของราคารวม
- **การคำนวณ**: หักส่วนลดจากราคารวมก่อนส่วนลด

## เทคโนโลยีที่ใช้ 🛠️

- **Vanilla JavaScript** - สำหรับโลจิกหลัก
- **HTML5 + CSS3** - สำหรับส่วน UI
- **ES6 Classes** - สำหรับโครงสร้าง OOP
- **Responsive Design** - รองรับหน้าจอทุกขนาด

---

**หมายเหตุ**: ระบบนี้เหมาะสำหรับการเรียนรู้และต้นแบบ สำหรับการใช้งานจริงควรเพิ่มการตรวจสอบความปลอดภัยและการจัดการข้อผิดพลาดเพิ่มเติม