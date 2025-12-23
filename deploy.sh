#!/bin/bash
# Script تلقائي لرفع الموقع على GitHub Pages

cd ~/my_website

# تهيئة Git
git init

# إعداد الاسم والبريد الإلكتروني
git config --global user.name "Haitham"
git config --global user.email "heithaam@gmail.com"

# تخزين بيانات الدخول لتجنب إعادة طلبها
git config --global credential.helper store

# إضافة الملفات
git add .

# عمل Commit جديد
git commit -m "تحديث الموقع" 2>/dev/null || echo "لا يوجد تغييرات جديدة"

# التأكد من الفرع الرئيسي
git branch -M main

# إزالة أي remote سابق وإضافة الجديد
git remote remove origin 2>/dev/null
git remote add origin https://github.com/heithaam-eng/my_website.git

# رفع الملفات على GitHub
git push -u origin main
