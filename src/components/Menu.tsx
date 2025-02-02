import { menuItems } from '../data';
import { type MenuItem as IMenuItem } from '../types';
import MenuItem from './MenuItem';

interface MenuProps {
  addOrder: (order: IMenuItem) => void;
  setHoverId: (hoverID: IMenuItem['id'] | null) => void;
}

export default function Menu({ addOrder, setHoverId }: MenuProps) {
  return (
    <section className="flex flex-col gap-2">
      <h2 className="p-4 px-8 bg-teal-200 font-black text-xl">Menu</h2>
      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} addOrder={addOrder} setHoverId={setHoverId} />
      ))}
    </section>
  );
}
