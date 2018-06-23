/*
 * rgbtohex
 * https://github.com/damianpolak/rgbtohex
 *
 * Copyright 2018, Damian Polak
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 */

module.exports = rgbtohex = (red, green, blue, short) => {
   'use strict';

   if(red === undefined || green === undefined || blue === undefined) {
     throw new TypeError('Arguments are undefined');
   } else {
     if(red === 'string' ||
        green === 'string' ||
        blue === 'string' ||
        red > 255 ||
        green > 255 ||
        blue > 255) {
          throw new TypeError('Please put three numbers 0-255');
        } else {

          red = Math.abs(red);
          green = Math.abs(green);
          blue = Math.abs(blue);

          let result = (red.toString(16).length < 2 ?  '0' + red.toString(16) : red.toString(16)) +
                 (green.toString(16).length < 2 ? '0' + green.toString(16) : green.toString(16)) +
                 (blue.toString(16).length < 2 ? '0' + blue.toString(16) : blue.toString(16));

          if(short === undefined) {
            return result.toUpperCase();
          }

          if(typeof short !== 'boolean') {
            throw new TypeError('Short argument must be boolean');
          } else {
            if(short) {
              return Math.round(red/17).toString(16).toUpperCase() +
                     Math.round(green/17).toString(16).toUpperCase() +
                     Math.round(blue/17).toString(16).toUpperCase();
            } else {
              return result;
            }
          }
        }
   }
 };
