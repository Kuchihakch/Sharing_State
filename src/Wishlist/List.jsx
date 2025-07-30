import { useState } from "react";
import WishListForm from "./WishListForm";
import WishListStats from "./WishListStats";

export default function List(){
    const [items, setItems] = useState([]);

    function handleOnSubmit(item){
        setItems(i => ([...i, item]))
    }
    return(
        <main className="bg-base-200 min-h-screen flex justify-center">
            <section className="flex justify-center">
            <div className="container grid grid-cols-2 gap-2 place-content-center h-screen">
                <div className="left flex flex-col gap-2">
                <div>
                    <p className="font-bold text-xl flex justify-center border border-accent p-10 rounded-md shadow-accent shadow-sm">WishList App</p>
                </div>
                <WishListForm onSubmit={handleOnSubmit}/>    
                </div>
                <WishListStats item={items}/>
            </div>
        </section>  
        </main>
    )
}