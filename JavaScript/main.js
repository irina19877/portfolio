let btn = document.querySelector("#contacts-btn");
let modal = document.querySelector("#modal");
let closeBtn = document.querySelector(".close_modal_window");
btn.addEventListener('click', function() {    
    modal.style.display = "block"
})
closeBtn.addEventListener('click', function() {    
    modal.style.display = "none"
})