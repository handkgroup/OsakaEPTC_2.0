"use strict";

const scrollToTopBtn = document.getElementById('scrollTopBtn');

// ボタンクリックで一番上にスクロール
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});