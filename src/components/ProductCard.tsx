import { Button, Tag } from "antd";
import type { Part } from "../data";

type Props = { part: Part; index: number; onAdd: (p: Part) => void; onOpen: (p: Part) => void };

export default function ProductCard({ part, index, onAdd, onOpen }: Props) {
  const out = part.stock === 0;
  const status = out ? "Out of stock" : part.stock < 6 ? `Only ${part.stock} left` : "In stock";
  const cls = out ? "oos" : part.stock < 6 ? "low" : "ok";
  return (
    <article className="card" style={{ animationDelay: `${(index % 12) * 60}ms` }} onClick={() => onOpen(part)}>
      {part.tag && <span className="ribbon">{part.tag}</span>}
      <div className="imgwrap"><img src={part.img} alt={part.name} loading="lazy"
        onError={(e) => { e.currentTarget.src = "https://placehold.co/300x200/16161a/e10600?text=UMA"; }} /></div>
      <small>{part.category}</small>
      <h3>{part.name}</h3>
      <div className="fits">{part.bikes.slice(0, 1).map((b) => <Tag key={b}>{b}</Tag>)}
        {part.bikes.length > 1 && <Tag>+{part.bikes.length - 1}</Tag>}</div>
      <div className="row"><strong>${part.price}</strong><span className={cls}>{status}</span></div>
      <Button block type="primary" disabled={out} onClick={(e) => { e.stopPropagation(); onAdd(part); }}>
        {out ? "Unavailable" : "Add to cart"}
      </Button>
    </article>
  );
}