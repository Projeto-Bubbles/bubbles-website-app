import { z } from 'zod';

export const userRegisterSchema = z.object({
  username: z.string().min(3, 'Como você se chama?'),
  nickname: z.string().min(6, 'Nickname deve ter mínimo 6 caracteres'),
  email: z
    .string()
    .email('Formato de e-mail inválido')
    .min(1, 'E-mail não pode ficar vazio'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  cpf: z.string().refine(
    (cpf) => isValidCPF(cpf), // Substitua isValidCPF pela sua lógica de validação de CPF
    { message: 'CPF inválido' }
  ),
  dateBirthday: z.string().refine(
    (date) => isValidDate(date), // Substitua isValidDate pela sua lógica de validação de data de nascimento
    { message: 'Data de nascimento inválida' }
  ),
  address: z.object({
    cep: z.string().length(8, 'CEP deve ter 8 caracteres'),
  }),
});

// Função de exemplo para validar CPF (substitua pela sua implementação real)
function isValidCPF(cpf: string): boolean {
  // Lógica de validação do CPF aqui
  return true;
}

// Função de exemplo para validar data de nascimento (substitua pela sua implementação real)
function isValidDate(date: string): boolean {
  // Lógica de validação da data de nascimento aqui
  return true;
}
