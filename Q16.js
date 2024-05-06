//Q16.Write a JavaScript function to parse an URL. 
var url = 'https://example.com/path/index.html?message=hello&who=world';
var parser = new URL(url); 
// Protocol used in URL 
console.log(parser.protocol); 
// Host of the URL 
console.log(parser.host); 
// Port in the URL 
console.log(parser.port); 
// Hostname of the URL 
console.log(parser.hostname); 
// Search in the URL 
console.log(parser.search); 
// Search parameter in the URL 
console.log(parser.searchParams);