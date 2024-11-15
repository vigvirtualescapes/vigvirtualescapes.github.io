// Toggle Theme
function toggleTheme(sheet, name1, name2) {
    var themeSwitch = document.getElementById('theme-switch');
    var themeSheet = document.getElementById('secondary-theme-sheet');
    var themeText = document.getElementById('theme-text');
    var cover = document.getElementById('cover');

    if (themeSwitch.checked == true) {
        // cover.classList.remove('cover-open');
        // cover.classList.add('cover-close');
        // setTimeout(function() {
            themeText.textContent = name2;
            themeSheet.href = sheet; 
        //     cover.classList.remove('cover-close');
        //     cover.classList.add('cover-open');
        // }, 1500);
    } else {
        // cover.classList.remove('cover-open');
        // cover.classList.add('cover-close');
        // setTimeout(function() {
            themeText.textContent = name1;
            themeSheet.href = null; 
        //     cover.classList.remove('cover-close');
        //     cover.classList.add('cover-open');
        // }, 1500);
    }

}

// Loader
// var timeOut;

// function loadFunc() {
//     timeOut = setTimeout(revealBody, 5000);
// }

// function revealBody() {
//     document.getElementById("loading-page").style.display = "none";
//     document.getElementById("main-wrapper").style.display = "block";
// }

// Close window
function closeWindow (buttonID, windowID) {
    var closeButton = document.getElementById(buttonID);
    var fullscreenWindow = document.getElementById(windowID);

    fullscreenWindow.style.display = "none";
}

// Open window
function openWindow (windowID) {
    var fullscreenWindow = document.getElementById(windowID);
    fullscreenWindow.style.display = "block";
}


// Ask about autoplay
