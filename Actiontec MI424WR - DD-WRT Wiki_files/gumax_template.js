var minimized = false;

window.onscroll = function() {
    if (document.body.scrollTop > 50 && !minimized) {
        minimized = true;
        toggleHeaderElements(minimized);
    } else if (document.body.scrollTop <= 50 && minimized) {
        minimized = false;
        toggleHeaderElements(minimized);
    }
};

toggleHeaderElements = function(minimize) {
    var header  = document.getElementById('gumax-header');
    var login   = document.getElementById('gumax-p-login');
    var search  = document.getElementById('gumax-p-search');
    var menubg  = document.getElementById('menu-bg');
    var menu    = document.getElementById('gumax-p-navigation-wrapper');
    var submenu = document.getElementById('menu_sub');

    if (minimize === true) {
        header.style.height  = '131px';
        //header.style.backgroundPositionY = '-50px';
        login.style.display  = 'none';
        search.style.display = 'none';
        menubg.style.top     = '99px';
        menu.style.display   = 'none';
        submenu.style.top    = '35px';
    } else {
        header.style.height  = '181px';
        //header.style.backgroundPositionY = '0';
        login.style.display  = 'block';
        search.style.display = 'block';
        menubg.style.top     = '149px';
        menu.style.display   = 'block';
        submenu.style.top    = '85px';
    }
}
