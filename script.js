const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');
const sideNav = document.getElementById('sideNav');
const toggleProjects = document.getElementById('toggleProjects');
const subMenu = document.getElementById('subMenu');
const pageTop = document.getElementById('pageTop');

window.onload = () => {
    document.getElementById('mv').classList.add('loaded');
    fetchNews();
};

async function fetchNews() {
    const endpoint = "https://script.google.com/macros/s/AKfycbxsimQpAMn1nBVO2Kp5tqby_KeX-8Tk3Me8WVokGIVbaUmF2EdtmXCXdtXSskSYsAf1/exec";
    const container = document.getElementById('news-container');
    
    try {
        const response = await fetch(endpoint);
        const data = await response.json();
        
        container.innerHTML = '';
        if (!data || data.length === 0) {
            container.innerHTML = '<p>現在ニュースはありません。</p>';
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
        container.innerHTML = '<p>ニュースの読み込みに失敗しました。</p>';
    }
}

openBtn.onclick = () => sideNav.classList.add('active');
closeBtn.onclick = () => sideNav.classList.remove('active');
toggleProjects.onclick = (e) => { e.preventDefault(); subMenu.classList.toggle('open'); };

window.onscroll = () => {
    const header = document.getElementById('header');
    if (window.pageYOffset > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
    
    if (window.pageYOffset > 300) pageTop.classList.add('visible');
    else pageTop.classList.remove('visible');
};

pageTop.onclick = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
