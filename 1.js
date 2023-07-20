import PromptSync from "prompt-sync";
import { onetoteen } from "./ex1.js";
import { par } from "./ex2.js";
import { impar } from "./ex3.js";
import { tabuada } from "./ex4.js";
import { fibonacci } from "./ex5.js";
import { pares20 } from "./ex6.js";
import { soma } from "./ex7.js";
import { maioridade } from "./ex8.js";
import { contagem } from "./ex9.js";
import { usernum } from "./ex10.js";

const prompt = PromptSync();

let exe;
let continuar;

do {
    exe = parseInt(prompt("Digite um número que represente um exercício de 1 a 10: "));

    switch (exe) {
        case 1:
            onetoteen();
            break;

        case 2:
            par();
            break;

        case 3:
            impar();
            break;

        case 4:
            tabuada();
            break;

        case 5:
            fibonacci();
            break;

        case 6:
            pares20();
            break;

        case 7:
            soma();
            break;

        case 8:
            maioridade();
            break;

        case 9:
            contagem();
            break;

        case 10:
            usernum();
            break;

        default:
            console.log("Digite uma opção valida!");
            break;
    }

    continuar = prompt("Deseja Continuar ver outros exercícios? Digite (S) para sim e (N) para não: ")

} while (continuar.toLocaleUpperCase() === "S");

