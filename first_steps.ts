// 1. We make a request o the 'https://deno.land', await the response and store it in the 'res' constant.

// 2. We parse the response body as a text and store in the 'body' constant.

// We write the contents of te 'body' constant to the console.

const res = await fetch("https://deno.land");
const body = await res.text();
console.log(body);


