/// <reference path="../node_modules/@types/node/index.d.ts" />

function urlSafeBase64Encode(data:string): string{
    return new Buffer(data).toString('base64')
    .replace(/\+/g, '-') // Convert '+' to '-'
    .replace(/\//g, '_') // Convert '/' to '_'
    .replace(/=+$/, ''); // Remove ending '='
}

function urlSafeBase64Decode(base64:string): string{
    // Add removed at end '='
    if(!base64.endsWith("=")){
        base64 += Array(5 - base64.length % 4).join('=');
    }

    base64 = base64.replace(/\-/g, '+') // Convert '-' to '+'
    .replace(/\_/g, '/'); // Convert '_' to '/'

  return new Buffer(base64, 'base64').toString();
}

function etag(){

}

function crc32(){

}

