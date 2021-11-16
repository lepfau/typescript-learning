let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Ed";
if (typeof userInput === "string") {
  userName = userInput;
}

//la fonction est censée ne jamais rien retourner avec le type never
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured!", 500);
