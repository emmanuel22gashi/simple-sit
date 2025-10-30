// ======= Market Prices Simulation =======
function randomPrice(base, variance=0.05) {
  let change = (Math.random() * 2 - 1) * variance;
  return (base * (1 + change)).toFixed(2);
}

function updateMarkets() {
  const btcPrice = randomPrice(64320);
  const ethPrice = randomPrice(3125);
  const goldPrice = randomPrice(2370);
  const nasdaqPrice = randomPrice(12000);

  document.getElementById('btc-price').textContent = `$${btcPrice}`;
  document.getElementById('eth-price').textContent = `$${ethPrice}`;
  document.getElementById('gold-price').textContent = `$${goldPrice}`;
  document.getElementById('nasdaq-price').textContent = `$${nasdaqPrice}`;
}

// تحديث كل 3 ثواني
setInterval(updateMarkets, 3000);
updateMarkets();

// ======= Login Simulation =======
function checkLogin() {
  const loggedIn = localStorage.getItem('loggedIn');
  const logoutBtn = document.getElementById('logout-btn');

  if(loggedIn) {
    logoutBtn.style.display = 'block';
  } else {
    logoutBtn.style.display = 'none';
  }
}

document.getElementById('logout-btn').addEventListener('click', () => {
  localStorage.removeItem('loggedIn');
  checkLogin();
});

// تسجيل دخول تلقائي لأغراض العرض
if(!localStorage.getItem('loggedIn')) {
  localStorage.setItem('loggedIn', 'true');
}
checkLogin();


// ======= Dark Mode Toggle =======
const darkToggle = document.getElementById('dark-mode-toggle');

// تفعيل الوضع المخزن مسبقًا
if(localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if(document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// نسخ كل span داخل الشريط ليكون حلقة مستمرة
const ticker = document.getElementById('news-ticker');

// تكرار المحتوى لجعل الحركة مستمرة
ticker.innerHTML += ticker.innerHTML;

let offset = 0;
function animateTicker() {
  offset -= 1; // سرعة الحركة، زود الرقم لتزيد السرعة
  if (Math.abs(offset) >= ticker.scrollWidth / 2) {
    offset = 0; // إعادة التدوير
  }
  ticker.style.transform = `translateX(${offset}px)`;
  requestAnimationFrame(animateTicker);
}

animateTicker();
