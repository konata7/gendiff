### Hexlet tests and linter status:
[![Actions Status](https://github.com/konata7/qa-auto-engineer-javascript-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/konata7/qa-auto-engineer-javascript-project-87/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/5cf7e2fb1c5807999348/maintainability)](https://codeclimate.com/github/konata7/qa-auto-engineer-javascript-project-87/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5cf7e2fb1c5807999348/test_coverage)](https://codeclimate.com/github/konata7/qa-auto-engineer-javascript-project-87/test_coverage)

# GenDiff
GenDiff is console app capable of comparing flat config files in JSON and YAML formats.

## Requirements
Project require latest version of [Node.js](https://nodejs.org/en) to be installed.

## Installation

Clone project using [Git](https://git-scm.com/downloads) or download and unzip

```bash
git clone https://github.com/konata7/qa-auto-engineer-javascript-project-87.git gendiff
```

Go to the project folder and run installation script:

```bash
cd gendiff
make install
```

## Usage

```bash
gendiff -h
Usage: gendiff [options] <filepath1> <filepath2>

Compares two configuration files and shows a difference.

Options:
  -V, --version        output the version number
  -f, --format <type>  output format
  -h, --help           display help for command
```

Package also can be used as a library:
```js
import genDiff from 'gendiff';

const obj1 = { a: 10, b: 15 };
const obj2 = { a: 15 };

// format parameter (optional) sets output format. Allowed values: 
// 'plain', 'json', undefined
const format = 'plain';

const diff = genDiff(obj1, obj2, format);
console.log(diff);
```

### demo
[![asciicast](https://asciinema.org/a/Hw4QUrxifiKT2iwxJcpA03Mfw.svg)](https://asciinema.org/a/Hw4QUrxifiKT2iwxJcpA03Mfw)
[![asciicast](https://asciinema.org/a/OKK31Sptwl9ClaHnx2HaIGLpf.svg)](https://asciinema.org/a/OKK31Sptwl9ClaHnx2HaIGLpf)
[![asciicast](https://asciinema.org/a/1vevPhoJnXdJt73uoHqYZwI7N.svg)](https://asciinema.org/a/1vevPhoJnXdJt73uoHqYZwI7N)
[![asciicast](https://asciinema.org/a/zvaqVit6mjgXBYPD5jQSGzuAd.svg)](https://asciinema.org/a/zvaqVit6mjgXBYPD5jQSGzuAd)
