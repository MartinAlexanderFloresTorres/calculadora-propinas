import { tipOptions } from '../data';

interface TipPercentagFormProps {
  tip: number;
  setTip: React.Dispatch<React.SetStateAction<number>>;
}

export default function TipPercentagForm({ tip, setTip }: TipPercentagFormProps) {
  return (
    <div>
      <h2 className="py-4 px-8 bg-teal-200 font-black text-xl">Propina</h2>
      <form className="py-4 px-4 space-y-2">
        {tipOptions.map((option) => (
          <div key={option.id} className="flex w-fit items-center text-teal-500 hover:text-teal-600">
            <label className="text-sm font-black w-10" htmlFor={option.label}>
              {option.label}
            </label>

            <label className="relative flex items-center cursor-pointer" htmlFor={option.label}>
              <input
                className="peer h-5 w-5 cursor-pointer appearance-none rounded-full border border-teal-300 checked:border-teal-400 transition-all"
                type="radio"
                name="tip"
                id={option.label}
                value={option.value}
                onChange={({ target: { value } }) => setTip(Number(value))}
                checked={option.value === tip}
              />
              <span className="absolute bg-teal-500 w-3 h-3 rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></span>
            </label>
          </div>
        ))}
      </form>
    </div>
  );
}
