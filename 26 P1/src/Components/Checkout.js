import { useSelector } from "react-redux"

export default function Checkout(){
     
    const items = useSelector(state=>state.cartslice.items);

    return(
        <div>
          {
            items.map(value=> <div className="text-5xl">{value.name}</div>)
          }
        </div>
    )
}


// import { useSelector } from "react-redux";

// export default function Checkout() {
//   const items = useSelector((state) => state.cartslice.items);

//   const totalAmount = items.reduce(
//     (total, item) => total + (item.price || 0) / 100,
//     0
//   );

//   return (
//     <div className="w-[80%] mx-auto mt-10">
//       <h1 className="text-4xl font-bold mb-6">Your Cart</h1>

//       {items.length === 0 ? (
//         <h2 className="text-2xl text-gray-500">Cart is Empty</h2>
//       ) : (
//         <>
//           {items.map((item, index) => (
//             <div
//               key={index}
//               className="flex justify-between items-center border-b py-4"
//             >
//               <div>
//                 <h2 className="text-xl font-semibold">
//                   {item.name}
//                 </h2>

//                 <p className="text-gray-600">
//                   ₹{(item.price || item.defaultPrice || 0) / 100}
//                 </p>

//                 <p className="text-sm text-gray-500">
//                   Quantity: {item.quantity || 1}
//                 </p>
//               </div>

//               <button className="bg-red-500 text-white px-4 py-2 rounded">
//                 Remove
//               </button>
//             </div>
//           ))}

//           <div className="mt-8 p-5 border rounded-lg shadow">
//             <h2 className="text-2xl font-bold">
//               Total Items: {items.length}
//             </h2>

//             <h2 className="text-2xl font-bold mt-2">
//               Total Amount: ₹{totalAmount}
//             </h2>

//             <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg">
//               Proceed to Checkout
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }