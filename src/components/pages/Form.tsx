import axios from 'axios';
import { StopCircle } from 'phosphor-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../common/Fields/Input';

function Form() {
  const { register, handleSubmit } = useForm();
  const [address, setAddress] = useState<any>(null);
  const [error, setError] = useState<string | null>();

  const onSubmit = (e: any) => {
    console.log(e);
  };

  const checkCEP = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '');

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        setAddress(response.data);
        setError(null);
      })
      .catch((err) => {
        setAddress(null);
        if (cep) setError('🙁 Não foi possível localizar o CEP informado');
        throw new Error(err);
      });
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-zinc-700 text-4xl"> Encontre seu endereço </h1>

      <form
        className="w-1/4 grid gap-4 p-4 bg-zinc-300 rounded-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            type="text"
            icon={<StopCircle size={16} color="#71717" weight="duotone" />}
            placeholder="CEP"
            {...register('cep')}
            onBlur={checkCEP}
          />
          <Input
            type="text"
            icon={<StopCircle size={16} color="#71717" weight="duotone" />}
            placeholder="UF"
            {...register('uf')}
            value={address?.uf ?? ''}
          />
        </div>
        <Input
          type="text"
          icon={<StopCircle size={16} color="#71717" weight="duotone" />}
          placeholder="Logradouro"
          {...register('street')}
          value={address?.logradouro ?? ''}
        />
        <Input
          type="text"
          icon={<StopCircle size={16} color="#71717" weight="duotone" />}
          placeholder="Bairro"
          {...register('neighborhood')}
          value={address?.bairro ?? ''}
        />
      </form>

      {error && (
        <span className="text-red-500 text-lg font-medium">{error}</span>
      )}
    </div>
  );
}

export default Form;
