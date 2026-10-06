import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import Teams from "./components/Teams";
import CartDrawer from "./components/CartDrawer";
import { useCart } from "./hooks/useCart";

export default function App() {
  const [open, setOpen] = useState(false);
  const { items, count, total, bump, add, setQty, clear } = useCart();
  return (
    <div className="app" id="top">
      <Navbar count={count} bump={bump} onCartClick={() => setOpen(true)} />
      <Hero />
      <ProductGrid onAdd={add} />
      <About />
      <Teams />
      <footer>© 2026 UMA Racing prototype · A global brand of MKA Group</footer>
      <CartDrawer open={open} items={items} total={total} onClose={() => setOpen(false)} onQty={setQty} onClear={clear} />
    </div>
  );
}