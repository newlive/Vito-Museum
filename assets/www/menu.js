var menu = '<li><a href="#" onclick="home()"><h2>Beranda</h2></a></li> \n\
            <li><a href="#" onclick="vtour()"><h2>V-Tour</h2></a></li> \n\
            <li><a href="#" onclick="maps()"><h2>Peta</h2></a></li> \n\
            <li><a href="#" onclick="about()"><h2>Tentang</h2></a></li>';

function getMenu() {
    $('#menu').html(menu);
    $('#menu:visible').listview('refresh');
    
}
function home() {
    $(location).attr('href', 'home.html');
}

function maps() {
    $(location).attr('href', 'map.html');
}

function vtour() {
    $(location).attr('href', 'index3.html');
}
function about() {
    $(location).attr('href', 'about.html');
}



