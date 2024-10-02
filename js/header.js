"use strict";

// Select all elements with the act_clr class
const dropdown = document.querySelector(".dropdown_link");
const bottomHeader = document.querySelector(".bottom_navbar_btns");
const dropdownMenu = document.querySelector(".dropdown_menu");
const navbarContainer = document.querySelector(".navbar_container");
const navbarLinks = document.querySelectorAll(".act_clr");
const burger = document.querySelector(".burger_menu");
const offScreenMenu = document.querySelector(".off_screen-menu");
const logoNormal = document.querySelector(".navbar-logo");
const logoActive = document.querySelector(".navbar-logo2");

dropdown.addEventListener("mouseenter", () => {
    // Open the dropdown menu and apply styles
    dropdownMenu.classList.add("active");
    dropdownMenu.classList.add("active");
    navbarContainer.classList.add("active");
    navbarContainer.style.backgroundColor = "#fff"; // Change background color to white
    navbarLinks.forEach((e) => {
        e.style.color = "#000"; // Change text color to black
    });

    // Change logos
    logoNormal.style.display = "none"; // Hide normal logo
    logoActive.style.display = "block"; // Show active logo
});

dropdown.addEventListener("mouseleave", () => {
    // Close the dropdown menu and revert styles
    dropdownMenu.classList.remove("active");
    navbarContainer.classList.remove("active");
    navbarContainer.style.backgroundColor = ""; // Reset background color

    navbarLinks.forEach((e) => {
        e.style.color = "#fff"; // Reset text color to white
    });

    // Change logos back
    logoNormal.style.display = "block"; // Show normal logo
    logoActive.style.display = "none"; // Hide active logo
});

dropdownMenu.addEventListener("mouseenter", () => {
    // Keep the dropdown menu and background active
    navbarContainer.classList.add("active");
    navbarContainer.style.backgroundColor = "#fff"; // Keep background white

    navbarLinks.forEach((e) => {
        e.style.color = "#000"; // Keep text color black
    });

    // Ensure logos remain active
    logoNormal.style.display = "none"; // Hide normal logo
    logoActive.style.display = "block"; // Show active logo
});

dropdownMenu.addEventListener("mouseleave", () => {
    // Revert changes when leaving the dropdown
    dropdownMenu.classList.remove("active");
    navbarContainer.classList.remove("active");
    navbarContainer.style.backgroundColor = ""; // Reset background color

    navbarLinks.forEach((e) => {
        e.style.color = "#fff"; // Reset link color to white
    });

    // Change logos back
    logoNormal.style.display = "block"; // Show normal logo
    logoActive.style.display = "none"; // Hide active logo
});

// Burger menu toggle for mobile
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
    bottomHeader.classList.toggle("active");
});






document.addEventListener("DOMContentLoaded", function() {
    // 選ばれる理由のアコーディオン
    const openLinks = document.querySelectorAll(".open-link");
    const closeLinks = document.querySelectorAll(".close-link");
    const nestedOpenLinks = document.querySelectorAll(".open-nested");
    const nestedCloseLinks = document.querySelectorAll(".close-nested");
    const insideLinks = document.querySelectorAll(".inside-links");
    const dropdownItems = document.querySelectorAll(".dropdown_item");
    const nestedLinks = document.querySelectorAll(".nested-links"); // ネストされたリンクを取得

    // 各リンクにイベントリスナーを追加
    openLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // リンクのデフォルト動作を防ぐ

            // 現在のアコーディオンを開く
            link.style.display = "none"; // 開くリンクを隠す
            closeLinks[index].style.display = "flex"; // 閉じるリンクを表示
            if (insideLinks[index]) {
                insideLinks[index].style.display = "block"; // 内側のリンクを表示
            }
        });
    });

    closeLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // リンクのデフォルト動作を防ぐ

            // 現在のアコーディオンを閉じる
            link.style.display = "none"; // 閉じるリンクを隠す
            openLinks[index].style.display = "flex"; // 開くリンクを表示
            if (insideLinks[index]) {
                insideLinks[index].style.display = "none"; // 内側のリンクを隠す
            }
        });
    });

nestedOpenLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // リンクのデフォルト動作を防ぐ

        const nestedList = link.nextElementSibling.nextElementSibling; // 隣接するul要素を取得
        const closeLink = link.nextElementSibling; // 隣接するclose-linkを取得

        if (nestedList && closeLink) {
            // open-nestedを非表示にしてclose-nestedとnested-linksを表示
            link.style.display = "none";
            closeLink.style.display = "flex";
            nestedList.style.display = "block";
        }
    });
});

nestedCloseLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault(); // リンクのデフォルト動作を防ぐ

        const nestedList = link.nextElementSibling; // 隣接するul要素を取得
        const openLink = link.previousElementSibling; // 隣接するopen-linkを取得

        if (nestedList && openLink) {
            // close-nestedを非表示にしてopen-nestedとnested-linksを非表示
            link.style.display = "none";
            openLink.style.display = "flex";
            nestedList.style.display = "none";
        }
    });
});

});








// Change color when scrolling
// すべての .act_clr クラスを持つ要素を取得
const links = document.querySelectorAll('.act_clr');
// .top_navbar クラスを持つ要素を取得
const navbar = document.querySelector('.top_navbar');

// 画面幅が1024px以上の時だけ動作させる
if (window.innerWidth >= 1025) {
// ウィンドウの縦幅を取得
const windowHeight = window.innerHeight;

window.addEventListener('scroll', function() {
// 現在のスクロール位置を取得
const scrollPosition = window.scrollY;

// スクロール位置がウィンドウの高さ以上になったら処理を実行
if (scrollPosition >= windowHeight) {
// 文字色を黒に変更
links.forEach(function(link) {
    link.style.color = 'black';
});
// ナビゲーションバーの背景色を白に変更
navbar.style.backgroundColor = 'white';
} else {
// 文字色を元の赤に戻す
links.forEach(function(link) {
    link.style.color = 'white';
});
// ナビゲーションバーの背景色を透明に戻す
navbar.style.backgroundColor = 'transparent';
}
});
}

window.addEventListener('scroll', function() {
    // 画面幅が1024px以上の場合のみ処理を実行
    if (window.innerWidth >= 1025) {
        // スクロール位置がウィンドウの高さ以上の場合のみ処理を実行
        if (window.scrollY >= window.innerHeight) {
            // navbar-logo と navbar-logo2 を取得
            const logo1 = document.querySelector('.navbar-logo');
            const logo2 = document.querySelector('.navbar-logo2');

            // navbar-logo を非表示、navbar-logo2 を表示
            logo1.style.display = 'none';
            logo2.style.display = 'block';
        } else {
            // navbar-logo を表示、navbar-logo2 を非表示
            const logo1 = document.querySelector('.navbar-logo');
            const logo2 = document.querySelector('.navbar-logo2');

            logo1.style.display = 'block';
            logo2.style.display = 'none';
        }
    }
});