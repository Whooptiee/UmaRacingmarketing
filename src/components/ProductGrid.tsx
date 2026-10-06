import { useMemo, useState } from "react";
import { Empty, Select } from "antd";
import { CATEGORIES, PARTS, type Part } from "../data";
import BikeFilter from "./BikeFilter";
import ProductCard from "./ProductCard";
import PartModal from "./PartModal";

type Props = { onAdd: (p: Part) => void };

export default function ProductGrid({ onAdd }: Props) {
  const [bike, setBike] = useState("All");
  const [cat, setCat] = useState("All");
  const [sel, setSel] = useState<Part | null>(null);
  const parts = useMemo(() => PARTS.filter((p) =>
    (bike === "All" || bike === "Others" || p.bikes.includes(bike)) && (cat === "All" || p.category === cat)), [bike, cat]);

  return (
    <section id="shop" className="shop">
      <h2>Find parts for your bike</h2>
      <BikeFilter value={bike} onChange={setBike} />
      <Select value={cat} onChange={setCat} style={{ width: 260, marginBottom: 28 }}
        options={["All", ...CATEGORIES].map((c) => ({ value: c, label: c === "All" ? "All categories" : c }))} />
      <div className="grid" key={bike + cat}>
        {parts.map((p, i) => <ProductCard key={p.id} part={p} index={i} onAdd={onAdd} onOpen={setSel} />)}
        {!parts.length && <Empty description="No parts found" />}
      </div>
      <PartModal part={sel} onClose={() => setSel(null)} onAdd={onAdd} />
    </section>
  );
}