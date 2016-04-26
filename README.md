# pngquant-lamda

> pngquant is a command-line utility for converting 24/32-bit PNG images to paletted (8-bit) PNGs. The conversion reduces file sizes significantly (often as much as 70%) and preserves full alpha transparency.
> you can use it for optimizing png files on aws lamda uploaded on an s3 bucket. 


## Install

```
$ npm install --save pngquant-lamda
```

## local developement

Keep in mind that this module requires the folder structure of an aws lamda instance.
Please mount the nodejs base folder to /var/task/

```
$ libpng-1.6.21 # ./configure --prefix=/var/task/node_modules/pngquant-lamda/vendor
$ ngquant-2.5.2 # ./configure --with-libpng=/var/task/node_modules/pngquant-lamda/vendor
```


## Usage

```js
var execFile = require('child_process').execFile;
var pngquant = require('pngquant-lamda');

execFile(pngquant, ['-o', 'output.png', 'input.png'], function (err) {
	console.log('Image minified!');
});
```

## License

MIT © [smart-devs](https://github.com/smart-devs/pngquant-lamda)
