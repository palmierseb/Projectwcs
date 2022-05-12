// function myFunction() {
//     var x = document.getElementById("links");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   };

const btn = document.querySelector('.btn-burger')
btn.addEventListener('click', (e)=> {
    console.log('click moi!');
    const clickEl = document.querySelector('.mobileblockmenu')
    if (clickEl.style.marginTop === "330px") {
        clickEl.style.marginTop = "-220px";
            } else {
                clickEl.style.marginTop = "330px";
            }
    
})

const btndesktop = document.querySelector('.btn-burger')
btndesktop.addEventListener('click', (e)=> {
    console.log('click moi!');
    const clickEl = document.querySelector('.desktopmenu')
    if (clickEl.style.marginTop === "25rem") {
        clickEl.style.marginTop = "-220px";
            } else {
                clickEl.style.marginTop = "25rem";
            }
    
})

