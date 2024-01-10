import { Category } from '../../enums/category';
import { Event } from '../common/Event';

function Events() {
  return (
    <Event.Card
      image="https://images.pexels.com/photos/5609026/pexels-photo-5609026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      title="Peladinha dos Amigos"
      bubble={{ name: 'Vem pro Fut', category: Category.SPORTS }}
      duration={123}
      date={new Date()}
    />
  );
}

export default Events;
