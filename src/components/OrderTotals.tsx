import { useMemo } from 'react';
import { formatCurrency } from '../lib';
import { OrderItem } from '../types';

interface OrderTotals {
  orders: OrderItem[];
  tip: number;
  placeOrder: () => void;
}

export default function OrderTotals({ orders, tip, placeOrder }: OrderTotals) {
  const subTotalAmount = useMemo(() => orders.reduce((total, item) => total + item.price * item.quantity, 0), [orders]);
  const tipAmount = useMemo(() => subTotalAmount * tip, [subTotalAmount, tip]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [subTotalAmount, tipAmount]);

  return (
    <div>
      <h2 className="py-4 px-8 bg-teal-200 font-black text-xl">Totales</h2>
      <div className="py-4 px-4 space-y-2">
        <p className="text-sm">
          <span className="font-black">SubTotal:</span> <span>{formatCurrency(subTotalAmount)}</span>
        </p>
        <p className="text-sm">
          <span className="font-black">Propina:</span> <span>{formatCurrency(tipAmount)}</span>
        </p>
        <p className="text-sm">
          <span className="font-black">Total:</span> <span>{formatCurrency(totalAmount)}</span>
        </p>
      </div>
      <button className="hover:cursor-pointer w-full px-3 py-2 bg-teal-600 hover:bg-teal-700 transition-all text-white text-lg font-bold rounded-md uppercase" onClick={placeOrder}>
        Guardar Orden
      </button>
    </div>
  );
}
