export const randomGeneratorID = () =>{
    return String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now();
} 