import { Calendar, IdentificationBadge, IdentificationCard, MapPin } from "phosphor-react";
import Input from "../Input";

function SignPersonalInfos() {
  return (
    <div className="w-full flex flex-col justify-center items-start gap-4">
      <h2 className="text-zinc-500 text-xl font-semibold">Informações pessoais</h2>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <Input icon={<IdentificationBadge size={16} color="#71717A" weight="duotone" />} type="text" placeholder="nome"/>
        <div className="w-full flex items-center justify-between gap-4">        
        <Input icon={<Calendar size={16} color="#71717A" weight="duotone" />} type="date" />
        <Input icon={<MapPin size={16} color="#71717A" weight="duotone" />} type="text" placeholder="CEP"/>
        </div>
        <Input icon={<IdentificationCard  size={16} color="#71717A" weight="duotone" />} type="text" placeholder="CPF (opcional)"/>
      </div>
    </div>
  );
}

export default SignPersonalInfos;
