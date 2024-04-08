import { z } from 'zod';

export const userRegisterSchema = z.object({
  username: z.string().min(3, 'Como você se chama?'),
  nickname: z.string().min(6, 'Nickname deve ter mínimo 6 caracteres'),
  email: z
    .string()
    .email('Formato de e-mail inválido')
    .min(1, 'E-mail não pode ficar vazio'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres'),
  cpf: z.string(),
  dateBirthday: z.string(),
  address: z.object({
    cep: z.string().length(8, 'CEP deve ter 8 caracteres'),
  }),
});
