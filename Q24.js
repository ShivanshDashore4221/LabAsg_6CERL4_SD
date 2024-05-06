//Q24.Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

const invalidJsonString = '{ "name": "John", "age": 30, "city": "New York"'; //end bracket not there so invalid

try {
    const parsedObject = JSON.parse(invalidJsonString);
    console.log("Parsed JSON object:", parsedObject);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON string. SyntaxError:", error.message);
        
    } else {
    
        console.error("An error occurred:", error.message);
    }
}
