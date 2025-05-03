document.addEventListener('focusin', function(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) {
    // Elemen input mendapatkan fokus, kemungkinan keyboard aktif
    // Anda bisa mengirimkan informasi ini ke Kodular menggunakan WebViewString
    window.location.href = 'kodular://keyboard=active';
  }
});

document.addEventListener('focusout', function(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA' || event.target.isContentEditable) {
    // Elemen input kehilangan fokus, kemungkinan keyboard tidak aktif
    // Anda bisa mengirimkan informasi ini ke Kodular menggunakan WebViewString
    window.location.href = 'kodular://keyboard=inactive';
  }
});