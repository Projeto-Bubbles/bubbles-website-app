import { Users, Balloon, MagnifyingGlass, Share, ShareNetwork, UserSwitch} from 'phosphor-react';


export const cardBenefitsInfo: any[] = [
  {
    icon: <Share size={24} color="#8b5cf6" weight="duotone" />,
    title: 'Compartilhe',
    description:
      'Protegemos sua privacidade e mantemos suas informações pessoais seguras.',
    color: 'purple',
  },
  {
    icon: <ShareNetwork size={24} color="#f59e0b" weight="duotone" />,
    title: 'Conexões',
    description:
      'Crie relacionamentos significativos com pessoas que compartilham seus interesses.',
    color: 'yellow',
  },
  {
    icon: <UserSwitch size={24} color="#ef4444" weight="duotone" />,
    title: 'Personalização',
    description:
      'Ajuste sua experiência para refletir seu estilo, interesses e necessidades.',
    color: 'red',
  },
];

export const cardHeroInfos: any[] = [
  {
    icon: <Users size={24} color="#3b9b58" weight="duotone" />,
    title: 'GRUPOS',
    description:
      'Explore interesses compartilhados e faça parte de grupos que adoram o que você adora.',
    color: 'slate',
  },
  {
    icon: <Balloon size={24} color="#c66271" weight="duotone" />,
    title: 'EVENTOS',
    description:
      'Mantenha-se atualizado sobre eventos locais e globais que são relevantes para você.',
    color: 'slate',
  },
  {
    icon: <MagnifyingGlass size={24} color="#9962c6" weight="duotone" />,
    title: 'DESCUBRA',
    description:
      'Descubra novas paixões, amigos e tendências enquanto navega pela rede social Bubbles.',
    color: 'slate',
  },
];
