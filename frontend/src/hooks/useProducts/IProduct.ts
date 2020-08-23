
interface IProductStock {
  onHand: number;
  reserved: number;
}

interface IProduct {
  _id: string;
  sku: string;
  title: string;
  picture: string;
  price: number;
  stock : IProductStock
}

export default IProduct