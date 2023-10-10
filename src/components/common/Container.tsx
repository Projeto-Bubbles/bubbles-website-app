import { ContainerProps } from '../../interfaces/ComponentsInterfaces';
import Button from './Button';
import { ArrowRight } from 'phosphor-react';

function Container(props: ContainerProps) {
  return (
    <div className="w-full flex justify-center items-center z-50">
      <div className="w-3/4 flex justify-center items-center">
        <div>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <Button
            text="Furar a Bolha"
            color="bg-blue-200"
            icon={<ArrowRight size={16} color="#182b3e" weight="duotone" />}
          />
        </div>
      </div>
    </div>
  );
}

export default Container;
