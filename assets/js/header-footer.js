document.addEventListener('DOMContentLoaded', () => {
    // ヘッダー＆サイドナビの描画
    const headerElement = document.getElementById('global-header');
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="fixed top-0 left-0 w-full z-50 bg-[#060b14]/80 backdrop-blur-md border-b border-[#4bb8e0]/20 h-20 md:h-24 transition-all duration-300">
                <div class="max-w-[1600px] mx-auto h-full px-6 flex items-center justify-between">
                    <div class="h-10 md:h-12 transition-transform hover:scale-105">
                        <a href="index.html" class="block h-full">
                            <img src="assets/images/logo/ganar-logo.png" alt="GANAR" class="h-full w-auto object-contain">
                        </a>
                    </div>
                    <nav class="hidden md:block">
                        <ul class="flex items-center gap-8 font-oswald font-bold italic uppercase tracking-wider text-lg">
                            <li><a href="news.html" class="text-white hover:text-[#4bb8e0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4bb8e0] hover:after:w-full after:transition-all">News</a></li>
                            <li><a href="about.html" class="text-white hover:text-[#4bb8e0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4bb8e0] hover:after:w-full after:transition-all">About</a></li>
                            <li><a href="members.html" class="text-white hover:text-[#4bb8e0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4bb8e0] hover:after:w-full after:transition-all">Members</a></li>
                            <li><a href="recruit.html" class="text-[#ffeb3b] hover:text-white transition-colors relative py-1">Recruit</a></li>
                            <li><a href="fanclub.html" class="text-white hover:text-[#4bb8e0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4bb8e0] hover:after:w-full after:transition-all">Fanclub</a></li>
                            <li><a href="contact.html" class="text-white hover:text-[#4bb8e0] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#4bb8e0] hover:after:w-full after:transition-all">Contact</a></li>
                        </ul>
                    </nav>
                    <button id="menu-btn" class="md:hidden focus:outline-none p-2 group" aria-label="Toggle Menu">
                        <div class="space-y-1.5">
                            <span class="block w-8 h-0.5 bg-white group-hover:bg-[#4bb8e0] transition-colors"></span>
                            <span class="block w-5 h-0.5 bg-[#4bb8e0] ml-auto"></span>
                            <span class="block w-8 h-0.5 bg-white group-hover:bg-[#4bb8e0] transition-colors"></span>
                        </div>
                    </button>
                </div>
            </header>

            <div id="overlay" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[55] opacity-0 pointer-events-none transition-opacity duration-300"></div>

            <nav id="side-nav" class="fixed top-0 right-0 w-[280px] md:w-[350px] h-full bg-[#060b14] border-l border-[#4bb8e0]/20 z-[60] shadow-2xl translate-x-full text-white overflow-y-auto font-oswald transition-transform duration-300">
                <div class="p-8 flex flex-col h-full">
                    <button id="close-btn" class="self-end text-3xl font-light mb-8 hover:text-[#4bb8e0] transition-colors">✕</button>
                    <ul class="space-y-6 uppercase">
                        <li><a href="index.html" class="block"><span class="text-2xl font-bold italic tracking-wider text-[#4bb8e0]">Home</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">ホーム</span></a></li>
                        <li><a href="news.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">News</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">ニュース</span></a></li>
                        <li><a href="about.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">About</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">チームについて</span></a></li>
                        <li><a href="members.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">Members</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">メンバー紹介</span></a></li>
                        <li><a href="recruit.html" class="block"><span class="text-2xl font-bold italic tracking-wider text-[#ffeb3b]">Recruit</span><span class="text-[10px] font-normal tracking-widest block text-[#ffeb3b] font-sans">メンバー募集</span></a></li>
                        <li><a href="fanclub.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">Fanclub</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">ファンクラブ</span></a></li>
                        <li><a href="operation.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">Operation</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">運営情報</span></a></li>
                        <li><a href="contact.html" class="block group"><span class="text-2xl font-bold italic tracking-wider group-hover:text-[#4bb8e0] transition-colors">Contact</span><span class="text-[10px] font-normal tracking-widest block text-gray-400 font-sans">お問い合わせ</span></a></li>
                    </ul>
                </div>
            </nav>
        `;
    }

    // フッターの描画
    const footerElement = document.getElementById('global-footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="bg-[#030712] text-white py-16 px-6 border-t border-[#4bb8e0]/20 font-sans relative overflow-hidden">
                <div class="max-w-[1200px] mx-auto flex flex-col items-center relative z-10">
                    <div class="h-14 mb-8 transition-transform hover:scale-105">
                        <img src="assets/images/logo/ganar-logo.png" alt="GANAR" class="h-full w-auto object-contain">
                    </div>
                    <nav class="mb-10">
                        <ul class="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 font-oswald font-bold italic uppercase tracking-wider text-base text-gray-300">
                            <li><a href="about.html" class="hover:text-[#4bb8e0] transition-colors">About</a></li>
                            <li><a href="news.html" class="hover:text-[#4bb8e0] transition-colors">News</a></li>
                            <li><a href="members.html" class="hover:text-[#4bb8e0] transition-colors">Members</a></li>
                            <li><a href="fanclub.html" class="hover:text-[#4bb8e0] transition-colors">Fanclub</a></li>
                            <li><a href="recruit.html" class="hover:text-[#ffeb3b] transition-colors">Recruit</a></li>
                            <li><a href="operation.html" class="hover:text-[#4bb8e0] transition-colors">Operation</a></li>
                            <li><a href="contact.html" class="hover:text-[#4bb8e0] transition-colors">Contact</a></li>
                        </ul>
                    </nav>
                    <div class="flex items-center gap-6 mb-10">
                        <a href="https://x.com/GANAR_games" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4bb8e0] hover:border-[#4bb8e0] hover:text-black transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                        </a>
                        <a href="https://www.instagram.com/ganar_games" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4bb8e0] hover:border-[#4bb8e0] hover:text-black transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                        <a href="https://youtube.com/@ganar_esports" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#4bb8e0] hover:border-[#4bb8e0] hover:text-black transition-all">
                            <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                        </a>
                    </div>
                    <div class="flex flex-wrap justify-center items-center gap-6 text-xs text-gray-500 mb-8">
                        <a href="term.html" class="hover:text-gray-300 transition-colors">利用規約</a>
                        <span>|</span>
                        <a href="policy.html" class="hover:text-gray-300 transition-colors">プライバシーポリシー</a>
                    </div>
                    <div class="pt-6 border-t border-white/10 flex items-center justify-center gap-3 text-gray-400 text-xs tracking-wider">
                        <span>©</span>
                        <a href="https://hekion.github.io/hekion/" target="_blank" rel="noopener noreferrer" class="transition-transform hover:scale-105">
                            <img src="assets/images/logo/hekion-logo.png" alt="HEKION" class="h-6 w-auto opacity-80 hover:opacity-100">
                        </a>
                        <span>All Rights Reserved.</span>
                    </div>
                </div>
            </footer>
        `;
    }

    // サイドナビゲーションの開閉イベント設定
    setTimeout(() => {
        const menuBtn = document.getElementById('menu-btn');
        const closeBtn = document.getElementById('close-btn');
        const overlay = document.getElementById('overlay');
        const sideNav = document.getElementById('side-nav');

        function toggleMenu() {
            if (!sideNav || !overlay) return;
            const isOpen = !sideNav.classList.contains('translate-x-full');
            if (isOpen) {
                sideNav.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            } else {
                sideNav.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            }
        }

        if (menuBtn) menuBtn.addEventListener('click', toggleMenu);
        if (closeBtn) closeBtn.addEventListener('click', toggleMenu);
        if (overlay) overlay.addEventListener('click', toggleMenu);
    }, 50);
});
