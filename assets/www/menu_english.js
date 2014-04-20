var menu = '<li><a href="#" onclick="home()"><h2>Home</h2></a></li> \n\
            <li><a href="#" onclick="vtour()"><h2>V-Tour</h2></a></li> \n\
            <li><a href="#" onclick="maps()"><h2>Map</h2></a></li> \n\
            <li><a href="#" onclick="about()"><h2>About</h2></a></li>';

function getMenu() {
    $('#menu').html(menu);
    $('#menu:visible').listview('refresh');
    
}
function home() {
    $(location).attr('href', 'home_english.html');
}

function maps() {
    $(location).attr('href', 'map_english.html');
}

function vtour() {
    $(location).attr('href', 'index3.html');
}
function about() {
    $(location).attr('href', 'about_english.html');
}



