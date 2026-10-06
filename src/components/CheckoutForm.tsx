import { Alert, Button, Form, Input, Select } from "antd";
import type { CartItem } from "../hooks/useCart";

export type Fitment = { part: string; qty: number; model: string };
type Props = { items: CartItem[]; total: number; onBack: () => void; onPlaced: (summary: Fitment[]) => void };

export default function CheckoutForm({ items, total, onBack, onPlaced }: Props) {
  const [form] = Form.useForm();

  const submit = async () => {
    const v = await form.validateFields();
    const summary: Fitment[] = items.map(({ part, qty }) => {
      const m = v[`m_${part.id}`] as string;
      let model = m === "Others" ? `${v[`mk_${part.id}`]} ${v[`md_${part.id}`]}` : m;
      if (v[`yr_${part.id}`]) model += ` (${v[`yr_${part.id}`]})`;
      return { part: part.name, qty, model };
    });
    onPlaced(summary);
  };

  return (
    <Form form={form} layout="vertical">
      <h4>Your motorcycle</h4>
      {items.map(({ part, qty }) => {
        const k = `m_${part.id}`;
        return (
          <div className="fitbox" key={part.id}>
            <b>{part.name} × {qty}</b>
            <Form.Item name={k} label="Make & model" rules={[{ required: true, message: "Select your motorcycle" }]}>
              <Select placeholder="Select the bike this part is for"
                options={[...part.bikes, "Others"].map((b) => ({ value: b, label: b === "Others" ? "Others (type my bike)" : b }))} />
            </Form.Item>
            <Form.Item noStyle shouldUpdate={(p, c) => p[k] !== c[k]}>
              {() => form.getFieldValue(k) === "Others" && (
                <div className="two">
                  <Form.Item name={`mk_${part.id}`} label="Make" rules={[{ required: true }]}><Input placeholder="e.g. Suzuki" /></Form.Item>
                  <Form.Item name={`md_${part.id}`} label="Model" rules={[{ required: true }]}><Input placeholder="e.g. Raider 150" /></Form.Item>
                </div>
              )}
            </Form.Item>
            <Form.Item name={`yr_${part.id}`} label="Model year (optional)"><Input placeholder="e.g. 2022" /></Form.Item>
          </div>
        );
      })}
      <Alert type="info" showIcon style={{ marginBottom: 16 }}
        message="We'll confirm the part fits your motorcycle before shipping." />

      <h4>Delivery details</h4>
      <Form.Item name="name" label="Full name" rules={[{ required: true }]}><Input /></Form.Item>
      <Form.Item name="email" label="Email" rules={[{ required: true, type: "email" }]}><Input /></Form.Item>
      <Form.Item name="addr" label="Shipping address" rules={[{ required: true }]}><Input.TextArea rows={3} /></Form.Item>
      <div className="total"><span>Pay on delivery</span><b>${total.toFixed(2)}</b></div>
      <Button block size="large" type="primary" onClick={submit}>Place order</Button>
      <Button block type="link" onClick={onBack}>Back</Button>
    </Form>
  );
}