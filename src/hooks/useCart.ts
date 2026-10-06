import { useMemo, useState } from "react";
import { message } from "antd";
import { PARTS, type Part } from "../data";

export type CartItem = { part: Part; qty: number };

export function useCart() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [bump, setBump] = useState(0);

  const items: CartItem[] = useMemo(
    () => Object.entries(cart).map(([id, qty]) => ({ part: PARTS.find((p) => p.id === id)!, qty })),
    [cart]
  );
  const count = items.reduce((s, i) => s + i.qty, 0);
  const total = items.reduce((s, i) => s + i.part.price * i.qty, 0);

  const add = (p: Part) => {
    if ((cart[p.id] ?? 0) >= p.stock) return message.warning("Max stock reached");
    setCart((c) => ({ ...c, [p.id]: (c[p.id] ?? 0) + 1 }));
    setBump((b) => b + 1);
    message.success(`${p.name} added`);
  };

  const setQty = (id: string, qty: number | null) =>
    setCart((c) => {
      const next = { ...c };
      if (!qty) delete next[id];
      else next[id] = qty;
      return next;
    });

  const clear = () => setCart({});

  return { items, count, total, bump, add, setQty, clear };
}