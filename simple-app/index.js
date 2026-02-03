function greet(name) {
  return `Hello ${name}!`;
}

// مثال على تشغيل التطبيق
if (require.main === module) {
  console.log(greet("Ali"));
}

// تصدير للـ test
module.exports = greet;
