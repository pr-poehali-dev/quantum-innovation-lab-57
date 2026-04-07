import { useState } from "react";
import { Link } from "react-router-dom";

export default function Career() {
  const [form, setForm] = useState({ name: "", phone: "", position: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col">
      <header className="p-6 flex justify-between items-center">
        <Link to="/" className="text-white text-sm uppercase tracking-widest font-light hover:text-neutral-400 transition-colors duration-300">
          Flying Carpet
        </Link>
        <a
          href="tel:+79022006777"
          className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
        >
          Запросить рейс
        </a>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between px-6 py-16 lg:py-0">
        <div className="flex-1 lg:mr-16 mb-12 lg:mb-0">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-400">Карьера</h3>
          <p className="text-3xl lg:text-5xl text-white leading-tight">
            Работа в&nbsp;компании
          </p>
          <p className="mt-6 text-neutral-400 text-base leading-relaxed max-w-md">
            Мы ищем профессионалов, которые разделяют наши ценности — точность, сервис и внимание к деталям. Оставьте заявку, и мы свяжемся с вами.
          </p>
        </div>

        <div className="flex-1 max-w-lg w-full">
          {sent ? (
            <div className="border border-neutral-700 p-10 text-center">
              <p className="text-white text-xl uppercase tracking-wide mb-3">Заявка отправлена</p>
              <p className="text-neutral-400 text-sm">Мы рассмотрим её и свяжемся с вами в ближайшее время.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Имя и фамилия"
                className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm outline-none focus:border-white transition-colors duration-300"
              />
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                required
                placeholder="Телефон"
                type="tel"
                className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm outline-none focus:border-white transition-colors duration-300"
              />
              <select
                name="position"
                value={form.position}
                onChange={handleChange}
                required
                className="bg-neutral-950 border border-neutral-700 text-white px-4 py-3 text-sm outline-none focus:border-white transition-colors duration-300 appearance-none"
              >
                <option value="" disabled>Желаемая должность</option>
                <option value="Пилот">Пилот</option>
                <option value="Бортпроводник">Бортпроводник</option>
                <option value="Другое">Другое</option>
              </select>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Несколько слов о себе"
                rows={4}
                className="bg-transparent border border-neutral-700 text-white placeholder-neutral-500 px-4 py-3 text-sm outline-none focus:border-white transition-colors duration-300 resize-none"
              />
              <button
                type="submit"
                className="bg-white text-black border border-white px-4 py-3 text-sm uppercase tracking-wide transition-all duration-300 hover:bg-transparent hover:text-white w-full"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
