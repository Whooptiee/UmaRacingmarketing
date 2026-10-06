import { Button, Descriptions, Modal, Tag } from "antd";
import type { Part } from "../data";

type Props = { part: Part | null; onClose: () => void; onAdd: (p: Part) => void };

export default function PartModal({ part, onClose, onAdd }: Props) {
  return (
    <Modal open={!!part} onCancel={onClose} footer={null} width={720} centered destroyOnClose>
      {part && (
        <div className="detail">
          <div className="imgwrap big"><img src={part.img} alt={part.name} /></div>
          <div>
            <small>{part.category}</small>
            <h2>{part.name} {part.tag && <Tag color="red">{part.tag}</Tag>}</h2>
            <p>{part.desc}</p>
            <Descriptions column={1} size="small" bordered items={part.info.map(([k, v]) => ({ key: k, label: k, children: v }))} />
            <h4>Fits these models</h4>
            <div>{part.bikes.map((b) => <Tag key={b} style={{ marginBottom: 6 }}>{b}</Tag>)}</div>
            <div className="row">
              <strong>${part.price}</strong>
              <span className={part.stock ? "ok" : "oos"}>{part.stock ? `${part.stock} in stock` : "Out of stock"}</span>
            </div>
            <Button block size="large" type="primary" disabled={!part.stock} onClick={() => onAdd(part)}>
              {part.stock ? "Add to cart" : "Unavailable"}
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
}