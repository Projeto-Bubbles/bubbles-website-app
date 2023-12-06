import { zodResolver } from '@hookform/resolvers/zod';
import {
  ArrowRight,
  Calendar,
  Envelope,
  Eye,
  EyeClosed,
  IdentificationBadge,
  IdentificationCard,
  MapPin,
  User,
  X,
} from 'phosphor-react';
import { ReactNode, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { bubbles } from '../../data/bubbles';
import useBubbles from '../../hooks/useBubbles';
import { BubbleProps } from '../../interfaces/bubble';
import { Bubble } from '../common/Bubble';
import Input from '../common/Fields/Input';
import Navbar from './../common/Navbar';

function SignPage() {
  const bubblesList = bubbles(18);

  const userBubbles: BubbleProps[] = JSON.parse(
    localStorage.getItem('bubbles') || '[]'
  );

  const { toggleBubble } = useBubbles(userBubbles);

  const [isClicked, setIsClicked] = useState(false);

  const togglePasswordVisibility = (): ReactNode => {
    return isClicked ? (
      <Eye
        size={16}
        color="#423F46"
        weight="duotone"
        onClick={() => setIsClicked(!isClicked)}
      />
    ) : (
      <EyeClosed
        size={16}
        color="#423F46"
        weight="duotone"
        onClick={() => setIsClicked(!isClicked)}
      />
    );
  };

  const userRegisterSchema = z.object({
    name: z.string().min(3, 'Como você se chama?'),
    username: z.string().min(6, 'Username deve ter mínimo 6 caracteres'),
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

  type UserFormData = z.infer<typeof userRegisterSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<UserFormData>({
    resolver: zodResolver(userRegisterSchema),
  });

  const registerUser = (data: any, e: any) => {
    e.preventDefault();

    const UserBubbles: BubbleProps[] = JSON.parse(
      localStorage.getItem('bubbles') || '[]'
    );

    data.bubbles = UserBubbles;
    console.log('👽 ~ data:', data);
  };

  useEffect(() => {
    console.log('👽 ~ errors:', errors);
    console.log('👽 ~ isValid:', isValid);
  }, [errors, isValid]);

  return (
    <>
      <Navbar />
      <div className="w-screen pt-28 flex flex-col justify-center items-center gap-1 ">
        <div className="w-96 flex flex-col justify-center items-center rounded-md relative">
          <div className="w-96 h-32 bg-zinc-200 flex flex-col justify-center items-start rounded-t-md pl-6">
            <div className="flex flex-col gap-2">
              <div className="w-6 h-6 p-2 grid place-content-center bg-slate-100 rounded-full">
                <ArrowRight size={12} color="#3f3f46" weight="duotone" />
              </div>
              <div className="leading-none">
                <h1 className="text-3xl font-bold text-zinc-700">
                  Vamos furar a bolha!{' '}
                </h1>
                <h2 className="text-lg">
                  Já tem conta?{' '}
                  <a href="" className="underline">
                    Entrar
                  </a>
                </h2>
              </div>
            </div>
          </div>

          <div className="w-96 min-h-fit p-6 mb-20 bg-zinc-300 rounded-b-md flex items-center justify-center transition-all duration-300 ease-in-out">
            <form
              className="flex flex-col items-center justify-between h-full gap-6 w-full"
              onSubmit={handleSubmit(registerUser)}
            >
              <div className="w-full flex flex-col gap-8">
                {/* 1. Select bubbles */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <h2 className="text-zinc-500 text-xl font-semibold">
                    Selecione suas bolhas
                  </h2>

                  <div className="w-full flex flex-wrap gap-2">
                    {bubblesList.map((bubble, index) => (
                      <div key={index} onClick={() => toggleBubble(bubble)}>
                        <Bubble.Tag
                          icon={bubble.icon}
                          name={bubble.name}
                          color={bubble.color}
                          selected={userBubbles.some(
                            (b) => b.name === bubble.name
                          )}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Personal infos */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <h2 className="text-zinc-500 text-xl font-semibold">
                    Informações pessoais
                  </h2>

                  <div className="w-full flex flex-col justify-center items-center gap-8">
                    <Input
                      icon={
                        <IdentificationBadge
                          size={16}
                          color="#71717A"
                          weight="duotone"
                        />
                      }
                      type="text"
                      placeholder="nome"
                      {...register('name', { required: true })}
                      helperText={!isValid ? errors.name?.message : ''}
                    />

                    <div className="w-full flex items-center justify-between gap-4">
                      <Input
                        icon={
                          <Calendar
                            size={16}
                            color="#71717A"
                            weight="duotone"
                          />
                        }
                        type="date"
                        {...register('dateBirthday', { required: true })}
                        helperText={
                          !isValid ? errors.dateBirthday?.message : ''
                        }
                      />

                      <Input
                        icon={
                          <MapPin size={16} color="#71717A" weight="duotone" />
                        }
                        type="text"
                        placeholder="CEP"
                        {...register('address.cep', { required: true })}
                        helperText={
                          !isValid ? errors.address?.cep?.message : ''
                        }
                      />
                    </div>

                    <Input
                      icon={
                        <IdentificationCard
                          size={16}
                          color="#71717A"
                          weight="duotone"
                        />
                      }
                      type="text"
                      placeholder="CPF (opcional)"
                      {...register('cpf')}
                      helperText={!isValid ? errors.cpf?.message : ''}
                    />
                  </div>
                </div>

                {/* 3. Account infos */}
                <div className="w-full flex flex-col justify-center items-start gap-4">
                  <h2 className="text-zinc-500 text-xl font-semibold">
                    Informações da conta
                  </h2>

                  <div className="w-full flex flex-col justify-center items-center gap-8">
                    <Input
                      icon={<User size={16} color="#71717A" weight="duotone" />}
                      type="text"
                      placeholder="username"
                      {...register('username', { required: true })}
                      helperText={!isValid ? errors.username?.message : ''}
                    />

                    <Input
                      icon={
                        <Envelope size={16} color="#71717A" weight="duotone" />
                      }
                      type="email"
                      placeholder="email"
                      {...register('email', { required: true })}
                      helperText={!isValid ? errors.email?.message : ''}
                    />

                    <div className="w-full flex items-center justify-between gap-4">
                      <Input
                        icon={togglePasswordVisibility()}
                        type={isClicked ? 'text' : 'password'}
                        placeholder={'senha'}
                        {...register('password', { required: true })}
                        helperText={!isValid ? errors.password?.message : ''}
                      />

                      <Input
                        icon={togglePasswordVisibility()}
                        type={isClicked ? 'text' : 'password'}
                        placeholder={'repetir senha'}
                      />
                    </div>
                  </div>
                </div>

                <button
                  className="relative w-full bg-zinc-700 text-zinc-200 text-sm font-semibold uppercase flex justify-between items-center h-10 rounded-md cursor-pointer group"
                  type="submit"
                >
                  <div className="w-full px-4 flex justify-between items-center gap-2 z-10">
                    {isValid ? (
                      <>
                        <span>Cadastrar </span>
                        <ArrowRight
                          size={20}
                          color="#F1F5F9"
                          weight="duotone"
                        />
                      </>
                    ) : (
                      <>
                        <span>Complete o cadastro </span>
                        <X size={20} color="#F1F5F9" weight="duotone" />
                      </>
                    )}
                  </div>

                  <div
                    className={`w-1 h-10 absolute justify-self-start rounded-md transition-all duration-700 ease-in-out ${
                      isValid
                        ? 'group-hover:bg-green-600'
                        : 'group-hover:bg-red-600'
                    }  group-hover:w-full`}
                  ></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignPage;
