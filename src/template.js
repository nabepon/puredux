/**
 * Modified template method from https://github.com/jashkenas/underscore/blob/master/underscore.js
 *
 * Underscore.js 1.8.3
 * http://underscorejs.org
 * (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 */

/**
 * escape
 */
const escapes = ['&','<','>','"',"'",'`'];
const escapeMap = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '`': '&#x60;'
};
const source = '(?:' + escapes.join('|') + ')';
const testRegexp = new RegExp(source);
const replaceRegexp = new RegExp(source, 'g');
function escaper(match) {
  return escapeMap[match];
}
function _escape(string) {
  string = string == null ? '' : '' + string;
  return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
}

/**
 * template
 */
const templateEscapes = {
  "'" : "'",
  '\\': '\\',
  '\r': 'r',
  '\n': 'n',
  '\u2028': 'u2028',
  '\u2029': 'u2029'
};
const templateEscaper = /\\|'|\r|\n|\u2028|\u2029/g;

function templateEscapeChar(match) {
  return '\\' + templateEscapes[match];
}

const noMatch = /(.)^/;

const matcher = new RegExp([
    (/<%-([\s\S]+?)%>/g || noMatch).source,
    ( /<%=([\s\S]+?)%>/g || noMatch).source,
    (/<%([\s\S]+?)%>/g || noMatch).source
  ].join('|') + '|$', 'g');

export default function template(text) {
  let index = 0;
  let source = "__p+='";
  text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
    source += text.slice(index, offset).replace(templateEscaper, templateEscapeChar);

    if (escape) {
      source += "'+\n((__t=(" + escape + "))==null?'':_escape(__t))+\n'";
    } else if (interpolate) {
      source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
    } else if (evaluate) {
      source += "';\n" + evaluate + "\n__p+='";
    }
    index = offset + match.length;
    return match;
  });
  source = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\nwith(obj||{}){\n" + source + "';\n}\nreturn __p;\n";
  return new Function('obj', source);
}
