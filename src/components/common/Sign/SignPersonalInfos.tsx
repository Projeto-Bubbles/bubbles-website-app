import {
  Calendar,
  IdentificationBadge,
  IdentificationCard,
  MapPin,
} from 'phosphor-react';
import { FormProps } from '../../../interfaces/form';
import Input from '../Input';

function SignPersonalInfos({ data, updateFieldHandler }: FormProps) {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <h2 className="text-zinc-500 text-xl font-semibold">
        Informações pessoais
      </h2>

      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Input
          icon={
            <IdentificationBadge size={16} color="#71717A" weight="duotone" />
          }
          type="text"
          placeholder="nome"
          value={data?.name ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFieldHandler('name', e.target.value)
          }
        />

        <div className="w-full flex items-center justify-between gap-4">
          <Input
            icon={<Calendar size={16} color="#71717A" weight="duotone" />}
            type="date"
            value={data?.dateBirthday ?? ''}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              updateFieldHandler('dateBirthday', e.target.value)
            }
          />
          <Input
            icon={<MapPin size={16} color="#71717A" weight="duotone" />}
            type="text"
            placeholder="CEP"
            // value={data?.address?.cep ?? ''}
            // onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            //   updateFieldHandler('name', e.target.value)
            // }
          />
        </div>

        <Input
          icon={
            <IdentificationCard size={16} color="#71717A" weight="duotone" />
          }
          type="text"
          placeholder="CPF (opcional)"
          value={data?.cpf ?? ''}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            updateFieldHandler('cpf', e.target.value)
          }
        />
      </div>
    </div>
  );
}

export default SignPersonalInfos;
