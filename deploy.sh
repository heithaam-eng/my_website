#!/bin/bash
# Script تلقائي لرفع الموقع على GitHub Pages

# الذهاب لمجلد المشروع
cd ~/my_website

# تهيئة Git (إذا لم يكن موجود)
git init

# إعداد الاسم والبريد الإلكتروني
git config --global user.name "Haitham"
git config --global user.email "heithaam@gmail.com"

# إضافة كل الملفات
git add .

# عمل Commit جديد
git commit -m "تحديث الموقع" 2>/dev/null || echo "لا يوجد تغييرات جديدة"

# التأكد من الفرع الرئيسي
git branch -M main

# إزالة أي remote سابق
git remote remove origin 2>/dev/null

# إضافة remote جديد
git remote add origin https://github.com/heithaam-eng/my_website.git

# رفع الملفات إلى GitHub
git push -u origin main
