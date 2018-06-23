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

module.exports = rgbtohex = (red, green, blue) => {
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
          
          return (red.toString(16).length < 2 ?  '0' + red.toString(16) : red.toString(16)) +
                 (green.toString(16).length < 2 ? '0' + green.toString(16) : green.toString(16)) +
                 (blue.toString(16).length < 2 ? '0' + blue.toString(16) : blue.toString(16));
        }
   }
 };
