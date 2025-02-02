import { useState } from 'react';
import { MenuItem, OrderItem } from '../types';

export default function useOrder() {
  const [orders, setOrders] = useState<OrderItem[]>([]);
  const [hoverID, setHoverId] = useState<OrderItem['id'] | null>(null);
  const [tip, setTip] = useState(0);

  const addOrder = (order: MenuItem) => {
    const orderIndex = orders.findIndex((item) => item.id === order.id);
    if (orderIndex === -1) return setOrders([...orders, { ...order, quantity: 1 }]);
    setOrders(orders.map((item) => (item.id === order.id ? { ...item, quantity: item.quantity + 1 } : item)));
  };

  const removeOrder = (id: OrderItem['id']) => {
    setOrders(orders.filter((item) => item.id != id));
  };

  const updateQuantity = (id: OrderItem['id'], quantity: OrderItem['quantity']) => {
    const orderIndex = orders.findIndex((item) => item.id === id);
    if (orderIndex === -1 || quantity <= 0 || quantity > 10) return;
    setOrders(orders.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };

  const placeOrder = () => {
    setHoverId(null);
    setOrders([]);
    setTip(0);
  };

  return {
    orders,
    hoverID,
    tip,
    addOrder,
    removeOrder,
    updateQuantity,
    setHoverId,
    setTip,
    placeOrder,
  };
}
