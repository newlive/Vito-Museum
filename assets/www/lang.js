var lang = '<li><a href="#" onclick="indo()"><h2>Indonesia</h2></a></li> \n\
            <li><a href="#" onclick="english()"><h2>English</h2></a></li>';

function getLang() {
    $('#langr').html(lang);
    $('#langr:visible').listview('refresh');
    
}
function indo() {
    $(location).attr('href', 'home.html');
}

function english() {
    $(location).attr('href', 'home_english.html');
}





