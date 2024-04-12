export interface CartItemProps {
  id: string;
  title: string;
  amount: number;
  price: number;
  img: string;
  questionAnswer: string;
  maxPerCustomer?: number;
}
