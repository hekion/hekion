document.addEventListener('DOMContentLoaded', () => {
    // 1. Header Component Injection
    const headerContainer = document.getElementById('header-container');
    if (headerContainer) {
        headerContainer.innerHTML = `
            <div class="menu-overlay" id="menuOverlay"></div>
            <header id="header">
                <div class="header-logo" onclick="location.href='index.html'"><img src="images/logo/gold_hekionlogo.png" alt="HEKION"></div>
                <button class="menu-open-btn" id="openBtn" aria-label="Menu">
                    <span class="btn-line top"></span>
                    <span class="btn-line mid"></span>
                    <span class="btn-line bot"></span>
                    <span class="btn-label">MENU</span>
                </button>
            </header>
            <nav class="side-nav" id="sideNav">
                <ul>
                    <li class="nav-item"><a href="index.html">TOP<small>トップ</small></a></li>
                    <li class="nav-item"><a href="about.html">ABOUT<small>HEKIONについて</small></a></li>
                    <li class="nav-item">
                        <a href="#" id="toggleProjects">PROJECTS<small>事業紹介</small> <i class="fas fa-chevron-down"></i></a>
                        <ul class="side-submenu" id="subMenu">
                            <li><a href="projects/ganar.html">- GANAR</a></li>
                            <!-- <li><a href="projects/goalink.html">- Goalink</a></li> -->
                            <li><a href="projects/travid.html">- TRAVID</a></li>
                            <!-- <li><a href="projects/veresis.html">- VERESIS</a></li> -->
                        </ul>
                    </li>
                    <li class="nav-item"><a href="news.html">NEWS<small>ニュース</small></a></li>
                </ul>
            </nav>
        `;
    }

    // 2. Footer Component Injection
    const footerContainer = document.getElementById('footer-container');
    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer>
                <div class="footer-inner">
                    <div class="footer-projects">
                        <a href="https://hekion.github.io/ganar/index.html" class="footer-project-card card-ganar" target="_blank" rel="noopener noreferrer">
                            <img src="images/logo/ganarlogo.png" alt="GANAR">
                        </a>
                        <!--
                        <a href="https://hekion.github.io/goalinkjp/index.html" class="footer-project-card" target="_blank" rel="noopener noreferrer">
                            <img src="images/logo/goalinklogo.png" alt="Goalink">
                        </a>
                        -->
                        <a href="https://note.com/travid" class="footer-project-card card-travid" target="_blank" rel="noopener noreferrer">
                            <img src="images/logo/travidlogo.png" alt="TRAVID">
                        </a>
                        <!--
                        <a href="https://hekion.github.io/veresis/" class="footer-project-card" target="_blank" rel="noopener noreferrer">
                            <img src="images/logo/veresislogo.png" alt="VERESIS">
                        </a>
                        -->
                    </div>
                    <p class="copyright">&copy; 2026 HEKION. All Rights Reserved.</p>
                </div>
            </footer>
        `;
    }

    // DOM Elements Init
    const openBtn = document.getElementById('openBtn');
    const sideNav = document.getElementById('sideNav');
    const menuOverlay = document.getElementById('menuOverlay');
    const toggleProjects = document.getElementById('toggleProjects');
    const subMenu = document.getElementById('subMenu');
    const pageTop = document.getElementById('pageTop');

    // MV & Body loaded Class Add (Null Safety Check)
    const mv = document.getElementById('mv');
    if (mv) {
        mv.classList.add('loaded');
    }
    document.body.classList.add('loaded');

    fetchNews();
    fetchNewsDetail();
    initScrollReveal();

    // Hamburger Menu Toggle
    function toggleMenu() {
        if (openBtn) openBtn.classList.toggle('active');
        if (sideNav) sideNav.classList.toggle('active');
        if (menuOverlay) menuOverlay.classList.toggle('active');
    }

    if (openBtn) openBtn.addEventListener('click', toggleMenu);
    if (menuOverlay) menuOverlay.addEventListener('click', toggleMenu);

    // Accordion Toggle for PROJECTS in Side Menu
    if (toggleProjects && subMenu) {
        toggleProjects.addEventListener('click', (e) => {
            e.preventDefault();
            subMenu.classList.toggle('open');
            const icon = toggleProjects.querySelector('i');
            if (icon) icon.classList.toggle('rotate');
        });
    }

    // Scroll Reveal Animation
    function initScrollReveal() {
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.15 });

        reveals.forEach(el => observer.observe(el));
    }

    // Fetch News List Data (for TOP / NEWS LIST)
    async function fetchNews() {
        const endpoint = "https://script.google.com/macros/s/AKfycbxsimQpAMn1nBVO2Kp5tqby_KeX-8Tk3Me8WVokGIVbaUmF2EdtmXCXdtXSskSYsAf1/exec";
        const container = document.getElementById('news-container');
        if (!container) return;

        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            
            container.innerHTML = '';
            if (!data || data.length === 0) {
                container.innerHTML = '<p class="news-loading">現在ニュースはありません。</p>';
                return;
            }
            
            const latestThree = data.slice(0, 3);
            
            latestThree.forEach(item => {
                const html = `
                    <div class="news-item" onclick="location.href='newspage.html?id=${item.id}'">
                        <div class="news-meta">
                            <span class="news-date">${item.date}</span>
                            <span class="news-tag">${item.tag}</span>
                        </div>
                        <span class="news-text">${item.title}</span>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', html);
            });
        } catch (error) {
            container.innerHTML = '<p class="news-loading">ニュースの読み込みに失敗しました。</p>';
        }
    }

    // Fetch News Detail Data (for newspage.html)
    async function fetchNewsDetail() {
        const endpoint = "https://script.google.com/macros/s/AKfycbxsimQpAMn1nBVO2Kp5tqby_KeX-8Tk3Me8WVokGIVbaUmF2EdtmXCXdtXSskSYsAf1/exec";
        const container = document.getElementById('news-content');
        if (!container) return;

        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');

        if (!id) {
            container.innerHTML = '<p style="text-align:center;">記事が見つかりませんでした。</p>';
            return;
        }

        try {
            const response = await fetch(endpoint);
            const data = await response.json();
            
            const item = data.find(news => String(news.id) === String(id));

            if (item) {
                container.innerHTML = `
                    <div class="news-detail-meta">
                        <span class="news-detail-date">${item.date}</span>
                        <span class="news-detail-tag">${item.tag}</span>
                    </div>
                    <h1 class="news-detail-title">${item.title}</h1>
                    <div class="news-detail-body">${item.content || '本文はありません'}</div>
                    <div class="back-btn-area">
                        <a href="news.html" class="btn-back"><i class="fas fa-arrow-left"></i> BACK TO LIST</a>
                    </div>
                `;
            } else {
                container.innerHTML = '<p style="text-align:center;">指定された記事は見つかりませんでした。</p>';
            }
        } catch (error) {
            container.innerHTML = '<p style="text-align:center;">読み込みに失敗しました。</p>';
        }
    }

    // Header & PageTop Scroll Events
    window.addEventListener('scroll', () => {
        const header = document.getElementById('header');
        if (header) {
            if (window.pageYOffset > 50) header.classList.add('scrolled');
            else header.classList.remove('scrolled');
        }
        
        if (pageTop) {
            if (window.pageYOffset > 300) pageTop.classList.add('visible');
            else pageTop.classList.remove('visible');
        }
    });

    if (pageTop) {
        pageTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});
