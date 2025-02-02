import Consumption from './components/Consumption';
import Header from './components/Header';
import Menu from './components/Menu';
import useOrder from './hooks/useOrder';

export default function App() {
  const { orders, hoverID, tip, addOrder, removeOrder, updateQuantity, setHoverId, setTip, placeOrder } = useOrder();

  return (
    <>
      <Header />

      <main className="max-w-7xl p-6 mx-auto grid grid-cols-1 md:grid-cols-2 w-full gap-6">
        <Menu addOrder={addOrder} setHoverId={setHoverId} />
        <Consumption orders={orders} removeOrder={removeOrder} updateQuantity={updateQuantity} hoverID={hoverID} tip={tip} setTip={setTip} placeOrder={placeOrder} />
      </main>
    </>
  );
}
