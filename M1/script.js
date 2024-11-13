var togbut = document.getElementById('tog');
var skills = document.getElementById('skill');
togbut.addEventListener('click', function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
