// ==UserScript==
// @name         Total Portal Keys on Startup
// @namespace    https://github.com/Smooklu/total-portal-keys-on-startup
// @version      0.1
// @description  Displays total portal keys on startup.
// @author       Smooklu
// @match        https://intel.ingress.com/
// @grant        none
// ==/UserScript==

(function() {
    setTimeout(function(){
    document.getElementById('inv_button').click()
}, 3000);
    setTimeout(function(){
    var pkeys = Array.from(document.querySelectorAll("br ~ div.inv_container"));pkeys.shift()
        window.totalkeyamount = 0
        function getKeyAmount(item) {
            var keyamount = item.children[1].innerText.replace('x','')
            window.totalkeyamount = window.totalkeyamount + parseInt(keyamount)
        }
        pkeys.forEach(getKeyAmount)
        alert(window.totalkeyamount)
}, 5000);

})();
