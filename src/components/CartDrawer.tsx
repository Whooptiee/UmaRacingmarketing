import { useState } from "react";
import { Button, Drawer, Empty, Result, Steps } from "antd";
import type { CartItem } from "../hooks/useCart";
import CartLine from "./CartLine";
import CheckoutForm, { type Fitment } from "./CheckoutForm";

type Props = {
  open: boolean;
  items: CartItem[];
  total: number;
  onClose: () => void;
  onQty: (id: string, qty: number | null) => void;
  onClear: () => void;
};

type Step = 0 | 1 | 2;

export default function CartDrawer({ open, items, total, onClose, onQty, onClear }: Props) {
  const [step, setStep] = useState<Step>(0);
  const [summary, setSummary] = useState<Fitment[]>([]);

  const close = () => {
    onClose();
    setStep(0);
    setSummary([]);
  };

  const placed = (fitments: Fitment[]) => {
    // TODO: send `fitments` (plus customer details) to your backend here
    setSummary(fitments);
    onClear();
    setStep(2);
  };

  return (
    <Drawer title="Your Cart" open={open} onClose={close} width={420}>
      <Steps
        size="small"
        current={step}
        items={[{ title: "Cart" }, { title: "Details" }, { title: "Done" }]}
      />

      <div style={{ marginTop: 24 }}>
        {step === 0 &&
          (items.length ? (
            <>
              {items.map((i) => (
                <CartLine key={i.part.id} item={i} onQty={onQty} />
              ))}
              <div className="total">
                <span>Total</span>
                <b>${total.toFixed(2)}</b>
              </div>
              <Button block size="large" type="primary" onClick={() => setStep(1)}>
                Checkout
              </Button>
            </>
          ) : (
            <Empty description="Cart is empty" />
          ))}

        {step === 1 && (
          <CheckoutForm
            items={items}
            total={total}
            onBack={() => setStep(0)}
            onPlaced={placed}
          />
        )}

        {step === 2 && (
          <Result
            status="success"
            title="Order placed!"
            subTitle="We'll confirm the fitment and email you shortly."
            extra={
              <Button type="primary" onClick={close}>
                Keep shopping
              </Button>
            }
          >
            {summary.length > 0 && (
              <div>
                <h4>Fitment summary</h4>
                {summary.map((f, i) => (
                  <div key={i}>
                    <b>{f.part}</b> × {f.qty} — {f.model}
                  </div>
                ))}
              </div>
            )}
          </Result>
        )}
      </div>
    </Drawer>
  );
}
