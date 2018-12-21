# node-metadata

[![Build Status](https://travis-ci.org/nodeshift/node-metadata.svg?branch=master)](https://travis-ci.org/nodeshift/node-metadata)

A small client module that shows metadata about Node.js released versions.
This is an dependency of this project: https://github.com/nodeshift/node-image-stream

## Installation

```
npm install node-metadata -g
```

## Usage

```
node-metadata --images 8 10

or

node-metadata -i 8 10
```

## Example

```console
$ node-metadata -i 8 10
[{"version":"v8.14.1","date":"2018-12-18","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-s390x","linux-x64","linux-x86","osx-x64-pkg","osx-x64-tar","src","sunos-x64","sunos-x86","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"6.4.1","v8":"6.2.414.75","uv":"1.23.2","zlib":"1.2.11","openssl":"1.0.2q","modules":"57","lts":"Carbon"},{"version":"v10.14.2","date":"2018-12-10","files":["aix-ppc64","headers","linux-arm64","linux-armv6l","linux-armv7l","linux-ppc64le","linux-s390x","linux-x64","osx-x64-pkg","osx-x64-tar","src","sunos-x64","win-x64-7z","win-x64-exe","win-x64-msi","win-x64-zip","win-x86-7z","win-x86-exe","win-x86-msi","win-x86-zip"],"npm":"6.4.1","v8":"6.8.275.32","uv":"1.23.2","zlib":"1.2.11","openssl":"1.1.0j","modules":"64","lts":"Dubnium"}]
```
