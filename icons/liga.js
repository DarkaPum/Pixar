/* A polyfill for browsers that don't support ligatures. */
/* The script tag referring to this file must be placed before the ending body tag. */

/* To provide support for elements dynamically added, this script adds
   method 'icomoonLiga' to the window object. You can pass element references to this method.
*/
(function () {
    'use strict';
    function supportsProperty(p) {
        var prefixes = ['Webkit', 'Moz', 'O', 'ms'],
            i,
            div = document.createElement('div'),
            ret = p in div.style;
        if (!ret) {
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (i = 0; i < prefixes.length; i += 1) {
                ret = prefixes[i] + p in div.style;
                if (ret) {
                    break;
                }
            }
        }
        return ret;
    }
    var icons;
    if (!supportsProperty('fontFeatureSettings')) {
        icons = {
            'home': '&#xe904;',
            'house': '&#xe904;',
            'feed': '&#xe91d;',
            'wave': '&#xe91d;',
            'user': '&#xe971;',
            'profile2': '&#xe971;',
            'search': '&#xe986;',
            'magnifier': '&#xe986;',
            'cog': '&#xe994;',
            'gear': '&#xe994;',
            'brightness-contrast': '&#xe9d6;',
            'star-full': '&#xe9d9;',
            'rate3': '&#xe9d9;',
            'plus': '&#xea0a;',
            'add': '&#xea0a;',
            'exit': '&#xea14;',
            'signout': '&#xea14;',
            'play3': '&#xea1c;',
            'player8': '&#xea1c;',
            'google-plus2': '&#xea8c;',
            'brand6': '&#xea8c;',
            'facebook': '&#xea90;',
            'brand10': '&#xea90;',
            'facebook2': '&#xea91;',
            'brand11': '&#xea91;',
            'instagram': '&#xea92;',
            'brand12': '&#xea92;',
            'twitter': '&#xea96;',
            'brand16': '&#xea96;',
            'youtube': '&#xea9d;',
            'brand21': '&#xea9d;',
            'apple': '&#xeabe;',
            'brand53': '&#xeabe;',
          '0': 0
        };
        delete icons['0'];
        window.icomoonLiga = function (els) {
            var classes,
                el,
                i,
                innerHTML,
                key;
            els = els || document.getElementsByTagName('*');
            if (!els.length) {
                els = [els];
            }
            for (i = 0; ; i += 1) {
                el = els[i];
                if (!el) {
                    break;
                }
                classes = el.className;
                if (/icon-/.test(classes)) {
                    innerHTML = el.innerHTML;
                    if (innerHTML && innerHTML.length > 1) {
                        for (key in icons) {
                            if (icons.hasOwnProperty(key)) {
                                innerHTML = innerHTML.replace(new RegExp(key, 'g'), icons[key]);
                            }
                        }
                        el.innerHTML = innerHTML;
                    }
                }
            }
        };
        window.icomoonLiga();
    }
}());
