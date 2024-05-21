let ticking = false;

function getScrollPercentage( elm ){
  var p = document.body.parentNode
  return (document.body.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

const onScroll = (scrollY) => {
  console.log(getScrollPercentage())
}

document.addEventListener('scroll', (event) => {
  if (!ticking) {
    ticking = true;

    window.requestAnimationFrame(() => {
      onScroll(window.scrollY)
      ticking = false;
    })
  }
})