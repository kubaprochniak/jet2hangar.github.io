window.addEventListener('online', ()=> {
  const offlineMessage = document.querySelector('#offline')
  const offlinePage= document.querySelector('#offline-page')
  if(offlinePage) {
    window.location.reload()
  }

  offlineMessage.classList.remove('appear')
})

window.addEventListener('offline', ()=> {
  const offlineMessage = document.querySelector('#offline')
  offlineMessage.classList.add('appear')
})