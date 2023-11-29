import { Envelope, Eye, EyeClosed, User } from 'phosphor-react';
import { ReactNode, useState } from 'react';
import { FormProps } from '../../../interfaces/form';
import Input from '../Fields/Input';

function SignAccountInfos({ data, updateFieldHandler }: FormProps) {
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

  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <h2 className="text-zinc-500 text-xl font-semibold">
        Informações da conta
      </h2>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Input
          icon={<User size={16} color="#71717A" weight="duotone" />}
          type="text"
          placeholder="apelido"
          value={data?.username ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFieldHandler('username', e.target.value)
          }
        />

        <Input
          icon={<Envelope size={16} color="#71717A" weight="duotone" />}
          type="email"
          placeholder="email"
          value={data?.email ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFieldHandler('email', e.target.value)
          }
        />

        <div className="w-full flex items-center justify-between gap-4">
          <Input
            icon={togglePasswordVisibility()}
            type={isClicked ? 'text' : 'password'}
            placeholder={'senha'}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateFieldHandler('password', e.target.value)
            }
          />

          <Input
            icon={togglePasswordVisibility()}
            type={isClicked ? 'text' : 'password'}
            placeholder={'repertir senha'}
          />
        </div>
      </div>
    </div>
  );
}

export default SignAccountInfos;
