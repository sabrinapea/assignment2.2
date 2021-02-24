/* esline-env browser */

let langCode = prompt("Enter your preferred language code: Spanish - ES, German - GE, English - EN, French - FR");
if (langCode.toUpperCase() === "ES") {
    window.document.write("Hello World translated in Spanish is: Hola Mundo");
} else if (langCode.toUpperCase() === "EN") {
    window.document.write("Hello World!");
} else if (langCode.toUpperCase() === "DE") {
    window.document.write("Hello World translated in German is: Hallo Welt!");
} else if (langCode.toUpperCase() === "FR") {
    window.document.write("Hello World translated in French is: Bonjour le monde!");
} else {
    window.document.write("Hello World!");
} 