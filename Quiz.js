"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import inquirer from "inquirer";
function Quizesgame() {
    return __awaiter(this, void 0, void 0, function () {
        var score, question1, question2, question3, question4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('General Knowledge Quizes Game');
                    score = 0;
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'question1',
                                type: "list",
                                message: 'Q:No:1 Which is the capital city of Pakistan?',
                                choices: ["A. Karachi", "B. Lahore", "C. Islamabad"]
                            }])];
                case 1:
                    question1 = _a.sent();
                    switch (question1.question1) {
                        case "C. Islamabad":
                            console.log('Correct');
                            score++;
                            break;
                        default:
                            console.log('Option C is correct.');
                            break;
                    }
                    ;
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'question2',
                                type: "list",
                                message: "Q:No:2 What is the tallest mountain in the world?",
                                choices: ["A. K2", "B. Mount Everest", "C. Denali"]
                            }])];
                case 2:
                    question2 = _a.sent();
                    switch (question2.question2) {
                        case "B. Mount Everest":
                            console.log('Correct');
                            score++;
                            break;
                        default:
                            console.log('Option B Mount Everest is correct. ');
                            break;
                    }
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'question3',
                                type: "list",
                                message: "Q:No:3 What is the world's largest ocean?",
                                choices: ["A. Atlantic Ocean", "B. Indian Ocean", "C. Pacific Ocean"]
                            }])];
                case 3:
                    question3 = _a.sent();
                    switch (question3.question3) {
                        case "C. Pacific Ocean":
                            console.log('Correct');
                            score++;
                            break;
                        default:
                            console.log('Option C Pacific Ocean is correct. ');
                            break;
                    }
                    return [4 /*yield*/, inquirer.prompt([{
                                name: 'question4',
                                type: "list",
                                message: "Q:No:4 What is the hottest planet in the solar system?",
                                choices: ["A. Mars", "B. Venus", "C. Jupiter"]
                            }])];
                case 4:
                    question4 = _a.sent();
                    switch (question4.question4) {
                        case "B. Venus":
                            console.log('Correct');
                            score++;
                            break;
                        default:
                            console.log('Option B Venus is correct. ');
                            break;
                    }
                    console.log('Thanks for Playing');
                    if (score === 1) {
                        console.log(" You got 1 out of 4 questions correct. Keep practicing!");
                    }
                    if (score === 2) {
                        console.log('Well done! You got 2 out of 4 questions correct!');
                    }
                    if (score === 3) {
                        console.log('Well done! You got 3 out of 4 questions correct!');
                    }
                    if (score === 4) {
                        console.log('Congratulations! You got all 4 questions correct!');
                    }
                    return [2 /*return*/];
            }
        });
    });
}
Quizesgame();
