/* Delay visual feedback for invalid form items
 until initial submit or blur event */
 Array.from(document.querySelectorAll('.Form input')).forEach(i => {
  i.addEventListener('invalid', () => {
    i.dataset.touched = true
  })
  i.addEventListener('blur', () => {
    if (i.value !== '') i.dataset.touched = true
  })
})
