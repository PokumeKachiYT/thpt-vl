let ticking = false;

const settings = [
  {
    'id': 'header',
    'start': -15,
    'stop': 20,
  },
  {
    'id': 'intro',
    'start': 25,
    'stop': 55,
  },
  {
    'id': 'body1',
    'start': 45,
    'stop': 75,
  },
  {
    'id': 'donation',
    'start': 70,
    'stop': 90,
  },
  {
    'id': 'outro',
    'start': 85,
    'stop': 115,
  },
  {
    'id': 'signature',
    'start': 90,
    'stop': 110,
  },
];

function getScrollPercentage( elm ){
  var p = document.body.parentNode;
  return (document.body.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100;
}

const onScroll = () => {
  const scrollPercentage = getScrollPercentage();

  for (const info of settings) {
    const element = document.getElementById(info.id);

    if (element != null) {  
      if (scrollPercentage < info.start || scrollPercentage > info.stop) {
        element.style.opacity = 0;
      } else {
        const mid = (info.stop + info.start) / 2;

        element.style.opacity = 1 - Math.abs(mid - scrollPercentage) / (info.stop - info.start) * 2;
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