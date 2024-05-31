let ticking = false;

const settings = [
  {
    'id': 'header',
    'start': -15,
    'stop': 20,
  },
  {
    'id': 'intro',
    'start': 30,
    'stop': 60,
  },
  {
    'id': 'body1',
    'start': 40,
    'stop': 70,
  },
  {
    'id': 'donation',
    'start': 55,
    'stop': 80,
  },
  {
    'id': 'outro',
    'start': 75,
    'stop': 125,
  },
  {
    'id': 'signature',
    'start': 85,
    'stop': 115,
  },
];

function getScrollPercentage( elm ){
  var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
  
    return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

const onScroll = () => {
  const scrollPercentage = getScrollPercentage();

  for (const info of settings) {
    const element = document.getElementById(info.id);

    if (element != null) {
      if (info.id == 'outro' || info.id == 'signature') {
        element.style.opacity = 1;
      } else {
        if (scrollPercentage < info.start || scrollPercentage > info.stop) {
          element.style.opacity = 0;
        } else {
          const mid = (info.stop + info.start) / 2;

          element.style.opacity = 1 - Math.abs(mid - scrollPercentage) / (info.stop - info.start) * 2;
        }
      }
    }
  }
}

onScroll()

document.addEventListener('scroll', (event) => {
  if (!ticking) {
    ticking = true;

    window.requestAnimationFrame(() => {
      onScroll();
      ticking = false;
    })
  }
})