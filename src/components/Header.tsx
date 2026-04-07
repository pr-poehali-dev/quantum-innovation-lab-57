import { Link } from "react-router-dom";

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  return (
    <header className={`absolute top-0 left-0 right-0 z-10 p-6 ${className ?? ""}`}>
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-widest font-light">Flying Carpet</div>
        <nav className="flex gap-8 items-center">
          <Link
            to="/career"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Карьера
          </Link>
          <a
            href="tel:+79022006777"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Запросить рейс
          </a>
        </nav>
      </div>
    </header>
  );
}