import { twMerge } from 'tailwind-merge';
import { OrderItem } from '../types/index';
import { formatCurrency } from '../lib/index';
import OrderTotals from './OrderTotals';
import TipPercentagForm from './TipPercentagForm';
interface ConsumptionProps {
  orders: OrderItem[];
  hoverID: OrderItem['id'] | null;
  tip: number;
  removeOrder: (id: OrderItem['id']) => void;
  updateQuantity: (id: OrderItem['id'], quantity: OrderItem['quantity']) => void;
  setTip: React.Dispatch<React.SetStateAction<number>>;
  placeOrder: () => void;
}

export default function Consumption({ orders, hoverID, tip, removeOrder, updateQuantity, setTip, placeOrder }: ConsumptionProps) {
  if (orders.length === 0)
    return (
      <section className="flex flex-col gap-2">
        <h2 className="py-4 px-8 bg-teal-200 font-black text-xl">Resumen</h2>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4 bg-teal-50 px-6 py-5 border border-teal-200 rounded-md">
            <p className="text-lg text-center">Escoge tu orden para ver tu resumen</p>
            <svg
              className="text-teal-400 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              width={100}
              height={100}
              strokeWidth={0.75}
            >
              <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"></path> <path d="M9 10l.01 0"></path> <path d="M15 10l.01 0"></path> <path d="M9 15l6 0"></path>
            </svg>
          </div>
        </div>
      </section>
    );

  return (
    <section className="flex flex-col gap-2">
      <h2 className="py-4 px-8 bg-teal-200 font-black text-xl">Resumen</h2>
      <div className="flex flex-col gap-2">
        {orders.map((order) => (
          <div key={order.id} className={twMerge('flex gap-2 justify-between px-3 py-1 text-sm text-teal-600 bg-teal-100/30 rounded', hoverID === order.id && 'bg-teal-100')}>
            <p>
              {order.name} - <span className="font-medium">{formatCurrency(order.price * order.quantity)}</span>
            </p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <button className="w-6 h-6 flex items-center justify-center rounded-md border border-teal-400 hover:cursor-pointer" onClick={() => updateQuantity(order.id, order.quantity - 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} strokeWidth={2}>
                    <path d="M5 12l14 0"></path>
                  </svg>
                </button>
                <p className="min-w-6 text-center">{order.quantity}</p>
                <button className="w-6 h-6 flex items-center justify-center rounded-md border border-teal-400 hover:cursor-pointer" onClick={() => updateQuantity(order.id, order.quantity + 1)}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} strokeWidth={2}>
                    <path d="M12 5l0 14"></path> <path d="M5 12l14 0"></path>
                  </svg>
                </button>
              </div>
              <button className="w-6 h-6 flex items-center justify-center rounded-full bg-red-50 text-red-600 font-black hover:cursor-pointer" onClick={() => removeOrder(order.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" width={18} height={18} strokeWidth={2}>
                  <path d="M18 6l-12 12"></path> <path d="M6 6l12 12"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      <TipPercentagForm tip={tip} setTip={setTip} />
      <OrderTotals tip={tip} orders={orders} placeOrder={placeOrder} />
    </section>
  );
}
