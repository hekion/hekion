document.addEventListener('DOMContentLoaded', () => {
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
