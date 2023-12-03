const rnd = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const colors = ["#BF547B", "#AC79F2", "#9196F2", "#B6C5F2", "#F2D0BD"];
const rndBorderRadius = () =>
  [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ") +
  " / " +
  [...Array(4).keys()].map((x) => rnd(30, 85) + "%").join(" ");

const createBlob = ({ id, x, y, color }) => {
  const card = document.querySelector(".card");
  const blob = document.createElement("div");
  blob.id = `blob-${id}`;
  blob.classList.add("blob");
  blob.style.top = `${y}%`;
  blob.style.left = `${x}%`;
  blob.style.backgroundColor = color;
  blob.style.scale = rnd(1.25, 2);
//   blob.style.borderRadius = rndBorderRadius();
  card.appendChild(blob);
  animateBlob(id);
};

const animateBlob = (id) => {
  anime({
    targets: `#blob-${id}`,
    translateX: () => `+=${rnd(-25, 25)}`,
    translateY: () => `+=${rnd(-25, 25)}`,
    borderRadius: () => rndBorderRadius(),
    rotate: () => rnd(-25, 25),
    opacity: () => rnd(0.4, 0.8),
    delay: () => rnd(0, 1000),
    scale: () => rnd(1.25, 2),
    // direction: 'alternate',
    // loop: 1,
    duration: 4000,
    easing: "linear",
    complete: (anim) => animateBlob(id)
    // complete: anim => { anim.restart(); },
  }).play();
};

const genBlobs = () => {
  const card = document.querySelector(".card");
  card.innerHTML = "";
  [...Array(3).keys()].map((id) => {
    const x = rnd(25, 75);
    const y = rnd(25, 75);
    const color = colors[rnd(0, colors.length)];
    createBlob({ x, y, color, id });
  });
};

const init = () => {
  const resume = document.querySelector("img#resume");
  const linkedin = document.querySelector("img#linkedin");
  const github = document.querySelector("img#github");
  const body = document.querySelector('body');
  const title = document.querySelector('.header>h2');
  const theme = document.querySelector('.header>h4');
  const title1 = document.querySelector('div.left-content > h2:nth-child(1)');
  const title2 = document.querySelector('div.left-content > h2:nth-child(2)');
  const title3 = document.querySelector('div.left-content > p:nth-child(3)');
  const blog = document.querySelector('div.app#idea2');

  let fonts = ["Lato", "Merriweather", "Montserrat", "Noto Sans JP", "Noto Sans KR", "Poppins", "Raleway", "Roboto", `system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`]
  
  title.onclick = () => {
    let selectedFont = fonts[(Math.random()*10 | 0) % fonts.length] ;
    console.log(selectedFont);
    if(selectedFont === "Noto Sans JP") {
      title.innerHTML = `ローハンコード <span>pro</span>`;
      title1.textContent = "こんにちは、ロハンです ✌️";
      title2.innerHTML = `私は <span id="green">{ バックエンド開発者 }</span>`
      title3.textContent = "私はバックエンド開発に強い経験を持つ開発者です。私は、企業やユーザーのニーズを満たす効率的で安全な Web アプリケーションの作成を専門としています。"
    }else if(selectedFont === "Noto Sans KR") {
      title.innerHTML = `로한.코드 <span>pro</span>`;
      title1.textContent = "안녕하세요 로한입니다 ✌️";
      title2.innerHTML = `나는 <span id="green">{ 백엔드 개발자다 }</span>`
      title3.textContent = "저는 백엔드 개발에 대한 강력한 배경을 가진 개발자입니다. 저는 기업과 사용자의 요구를 충족하는 효율적이고 안전한 웹 애플리케이션을 만드는 것을 전문으로 합니다."
    } else {
      title.innerHTML = `rohan.codes <span>pro</span>`;
      title1.textContent = "Hello there, I'm Rohan ✌️";
      title2.innerHTML = `I'm a <span id="green">{ backend developer }</span>`
      title3.textContent = "I'm a developer with a strong background in backend development. I specialize in creating efficient and secure web applications that meet the needs of businesses and users."
    }
    body.style.fontFamily = selectedFont;
  }

  theme.onclick = () => {
    if(theme.textContent === "dark") {
      body.style.backgroundColor = "#111";
      body.style.color = "#fff";
      theme.textContent = "light";
    } else {
      body.style.backgroundColor = "#fff";
      body.style.color = "#111";
      theme.textContent = "dark";
    }
  }

  resume.onclick = () => {
    window.open('https://resume.io/r/kNdMztRL4', '_blank').focus();
  }

  linkedin.onclick = () => {
    window.open('https://www.linkedin.com/in/rohancodes', '_blank').focus();
  }

  github.onclick = () => {
    window.open('https://github.com/r0hnx', '_blank').focus();
  }

  blog.onclick = () => {
    window.open('blog.html', '_self').focus();
  }
}

init()
genBlobs();