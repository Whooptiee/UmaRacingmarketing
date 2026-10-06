import { Button, InputNumber } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import type{ CartItem } from "../hooks/useCart";

type Props = { item: CartItem; onQty: (id: string, qty: number | null) => void };

export default function CartLine({ item: { part, qty }, onQty }: Props) {
  return (
    <div className="line">
      <img src={part.img} alt="" />
      <div style={{ flex: 1 }}>
        <b>{part.name}</b>
        <div>${part.price}</div>
      </div>
      <InputNumber min={0} max={part.stock} value={qty} onChange={(q) => onQty(part.id, q)} />
      <Button type="text" danger icon={<DeleteOutlined />} onClick={() => onQty(part.id, 0)} />
    </div>
  );
}