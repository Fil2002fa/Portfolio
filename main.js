
document.addEventListener('DOMContentLoaded', () => {
  const dots = document.getElementById('dots')
  if (dots) {
    let count = 1
    setInterval(() => {
      count = (count + 1) % 4
      dots.textContent = '.'.repeat(count)
    }, 500)
  }
  if (window.AOS) window.AOS.init()
})
