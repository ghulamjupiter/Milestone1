const togbut = document.getElementById('tog') as HTMLButtonElement
const skills = document.getElementById('skill') as HTMLElement
togbut.addEventListener('click', ()=> {
if (skills.style.display === "none") {
    skills.style.display = "block"
} else {
    skills.style.display = "none"
}

});