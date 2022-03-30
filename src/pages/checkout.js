import Image from "next/image";
import { useSelector } from "react-redux";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import Product from "../components/Product";
import { selectItems } from "../slices/basketSlice";

function checkout() {
  const items = useSelector(selectItems);

  return <div className="bg-gray-100">
    <Header />

    <main className="lg:flex max-w-screen-xl mx-auto">
      {/* left */}
      <div className="flex-grow m-5 shadow-sm">
        <Image
          src='https://links.papareact.com/ikj'
          width={1020}
          height={250}
          objectFit='contain'
        />

        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h1 className="text-3xl border-b pb-4">{items.length ? `There are ${items.length} item(s) in your basket` : 'Your Shopping Basket Is Empty'}</h1>
          {items.map((element, id) => (<CheckoutProduct key={id} />))}
        </div>

      </div>

      {/* right */}
      <div></div>
    </main>
  </div>;
}

export default checkout;
