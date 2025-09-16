/* ========= 全站交互脚本 ========= */

// 1) 移动端菜单切换（如果以后加上汉堡菜单按钮）
function toggleMenu() {
  const nav = document.querySelector(".nav__menu");
  nav.classList.toggle("open");
}

// 2) Dark Mode 手动切换（系统暗色已支持，下面是用户点击按钮时的强制切换）
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark-mode");
}

// 3) Newsletter 表单提交提示（模拟，无后台）
const newsletterForm = document.querySelector(".newsletter__form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = newsletterForm.querySelector("input[type='email']").value;
    if (email) {
      alert(`感谢订阅！确认邮件会发送到：${email}`);
      newsletterForm.reset();
    } else {
      alert("请输入有效的邮箱地址。");
    }
  });
}

// 4) YouTube 视频 ID 清理器
function extractVideoId(url) {
  try {
    let videoId = "";
    if (url.includes("youtube.com/watch?v=")) {
      const params = new URL(url).searchParams;
      videoId = params.get("v");
    } else if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }
    return videoId;
  } catch (e) {
    console.error("解析失败:", e);
    return "";
  }
}

// 5) Featured Video 更新
function updateVideo() {
  const input = document.getElementById("youtubeLink");
  if (!input) return;

  const videoId = extractVideoId(input.value.trim());
  if (!videoId) {
    alert("无法识别这个 YouTube 链接，请检查一下。");
    return;
  }

  const iframe = document.getElementById("youtubePlayer");
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
}