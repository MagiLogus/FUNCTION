// 10. Faça um programa que receba um número do usuário e continue
// a pedir o número se o numero for diferente de 0.
import PromptSync from "prompt-sync";

export function usernum() {
  const prompt = PromptSync();

  let numero;

  while (numero !== 0) {
    numero = parseInt(prompt("Digite um número ou 0 para sair: "));
  }
}
