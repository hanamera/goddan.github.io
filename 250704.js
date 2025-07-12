
  // YouTube iframe APIを読み込む
const tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  // 動画IDのリスト
const movieList1 = ['7d2iWaj2ByU', '1qKikU6G8gg', 'x-WVrBCgRUA', '8vcIRnn22lo', '0gGx1et6R2M'];
  const movieList2 = ['7XAabs1V4z8', 'snbXZorphIk', 'gOFqCt3FkFw', 'zhL_hGgf0nY','CI3wxRnEyU4'];


  function onYouTubeIframeAPIReady() {
    // プレイヤー1
    const rand1 = Math.floor(Math.random() * movieList1.length);
    new YT.Player('js-player-1', {
      height: '100%',
      width: '100%',
      videoId: movieList1[rand1],
      playerVars: {
        autoplay: 0,
        rel: 0,
        playsinline: 1
      }
    });

    // プレイヤー2
    const rand2 = Math.floor(Math.random() * movieList2.length);
    new YT.Player('js-player-2', {
      height: '100%',
      width: '100%',
      videoId: movieList2[rand2],
      playerVars: {
        autoplay: 0,
        rel: 0,
        playsinline: 1
      }
    });
  }

  // スクロールアニメーション
  const targets = document.querySelectorAll('.fade-in, .faq, h2');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.5
  });

  targets.forEach(target => observer.observe(target));



  //今日何年か
  document.getElementById("year").textContent = new Date().getFullYear();


// メアド表示
 const user = "dance.god.dan";
  const domain = "gmail.com";
  document.getElementById("mail").innerText = user + "@" + domain;