/* Иконки разделов: три знака 100×100 в цветах Fast Money. Двигаются только при
   наведении или фокусе на плитку (правила в css/style.css), петля 3 с, ничего
   не мигает чаще трёх раз в секунду. id совпадают с CAT_ICON в js/app.js. */
(function () {
  'use strict';
  var O = '#FC4C02', INK = '#0B0B0C', W = '#FFFFFF', CHIP = '#F6E7BE';

  window.FM_ICONS = {
    /* дебетовая: две карты, верхняя выезжает и по ней пробегает блик */
    cards:
      '<defs><clipPath id="fm-ic-clip"><rect x="14" y="30" width="76" height="50" rx="10"/></clipPath></defs>' +
      '<g class="ic-back"><rect x="8" y="18" width="76" height="50" rx="10" fill="' + INK + '" transform="rotate(-10 46 43)"/></g>' +
      '<g class="ic-front">' +
        '<rect x="14" y="30" width="76" height="50" rx="10" fill="' + O + '"/>' +
        '<rect x="24" y="44" width="16" height="12" rx="3" fill="' + CHIP + '"/>' +
        '<rect x="24" y="64" width="30" height="5" rx="2.5" fill="' + INK + '" opacity=".85"/>' +
        '<path d="M74 40 l-6 9 h6 l-6 9" fill="none" stroke="' + INK + '" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<g clip-path="url(#fm-ic-clip)"><rect class="ic-shine" x="-20" y="20" width="14" height="70" fill="' + W + '" opacity=".4" transform="rotate(20 50 50)"/></g>' +
      '</g>',

    /* кредитная: «0%» на белой плитке и круговая стрелка — льготный период */
    grace:
      '<rect x="5" y="5" width="90" height="90" rx="26" fill="' + W + '" stroke="' + INK + '" stroke-width="5"/>' +
      '<g class="ic-zero">' +
        '<ellipse cx="34" cy="50" rx="10" ry="14" fill="none" stroke="' + INK + '" stroke-width="6"/>' +
        '<circle cx="56" cy="40" r="5" fill="none" stroke="' + INK + '" stroke-width="4.5"/>' +
        '<circle cx="70" cy="60" r="5" fill="none" stroke="' + INK + '" stroke-width="4.5"/>' +
        '<path d="M74 36 L52 64" stroke="' + INK + '" stroke-width="5" stroke-linecap="round"/>' +
      '</g>' +
      '<g class="ic-loop"><path d="M22 78 A30 30 0 0 0 78 78" fill="none" stroke="' + O + '" stroke-width="6" stroke-linecap="round"/>' +
        '<path d="M70 70 L79 79 L84 67" fill="none" stroke="' + O + '" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/></g>',

    /* займы: оранжевая плитка, монета с рублём и молния — деньги быстро */
    coin:
      '<rect x="5" y="5" width="90" height="90" rx="26" fill="' + O + '"/>' +
      '<g class="ic-coin">' +
        '<circle cx="44" cy="56" r="24" fill="' + W + '"/>' +
        '<path d="M38 68 V44 H48 C54 44 57 48 57 52 C57 56 54 60 48 60 H34 M34 64 H50" fill="none" stroke="' + INK + '" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>' +
      '</g>' +
      '<g class="ic-bolt"><path d="M80 12 L68 34 H78 L70 52 L88 26 H78 Z" fill="' + INK + '" stroke="' + INK + '" stroke-width="2" stroke-linejoin="round"/></g>'
  };

  window.fmIcon = function (id) {
    var body = window.FM_ICONS[id];
    return body ? '<svg class="ic ic--' + id + '" viewBox="0 0 100 100" aria-hidden="true" focusable="false">' + body + '</svg>' : '';
  };
})();
