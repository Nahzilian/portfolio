(function(url){
    if(/(?:Chrome\/26\.0\.1410\.63 Safari\/537\.31|WordfenceTestMonBot)/.test(navigator.userAgent)){ return; }
    var addEvent = function(evt, handler) {
        if (window.addEventListener) {
            document.addEventListener(evt, handler, false);
        } else if (window.attachEvent) {
            document.attachEvent('on' + evt, handler);
        }
    };
    var removeEvent = function(evt, handler) {
        if (window.removeEventListener) {
            document.removeEventListener(evt, handler, false);
        } else if (window.detachEvent) {
            document.detachEvent('on' + evt, handler);
        }
    };
    var evts = 'contextmenu dblclick drag dragend dragenter dragleave dragover dragstart drop keydown keypress keyup mousedown mousemove mouseout mouseover mouseup mousewheel scroll'.split(' ');
    var logHuman = function() {
        if (window.wfLogHumanRan) { return; }
        window.wfLogHumanRan = true;
        var wfscr = document.createElement('script');
        wfscr.type = 'text/javascript';
        wfscr.async = true;
        wfscr.src = url + '&r=' + Math.random();
        (document.getElementsByTagName('head')[0]||document.getElementsByTagName('body')[0]).appendChild(wfscr);
        for (var i = 0; i < evts.length; i++) {
            removeEvent(evts[i], logHuman);
        }
    };
    for (var i = 0; i < evts.length; i++) {
        addEvent(evts[i], logHuman);
    }
})('indexe7ff.html?wordfence_lh=1&amp;hid=BD02E577392ABA715DB54B95E684C309');