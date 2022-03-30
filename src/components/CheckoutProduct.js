import { StarIcon } from "@heroicons/react/solid"
import Image from "next/image"
import Currency from 'react-currency-formatter'

function CheckoutProduct(props) {
    console.log('props.productInfo :>> ', props.productInfo);
    const { productInfo: { id, title, price, rating, description, category, image, hasPrime }
    } = props
    return (
        <div className="grid grid-cols-5">
            <Image src={image} height={200} width={200} objectFit='contain' />
            <div className="col-span-3 mx-5">
                <p>{title}</p>
                <div className="flex">
                    {Array(rating).fill().map((_, id) => {
                        return (<StarIcon key={id} className='h-5 text-yellow-500' />)
                    })}
                </div>
                <p className="text-xs my-2 line-clamp-2">{description}</p>
                <Currency quantity={price} currency="GBP" />
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" src='https://links.papareact.com/fdw' alt='' loading="lazy" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}
            </div>


            <div className="flex flex-col space-y-2 my-auto justify-self-end">
                <button className="button">Add More</button>
                <button className="button">Remove</button>
            </div>
        </div>
    )
}

export default CheckoutProduct