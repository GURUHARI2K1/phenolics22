export const toggleHide = ()=>{
    const body = document.querySelector('body')
    // body.style.position = body.style.position === 'fixed'?'relative':'fixed'
    body.classList.toggle('no-interact')
}