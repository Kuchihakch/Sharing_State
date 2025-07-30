export default function WishListStats({item = []}){
    return(
    <div className="detail flex  flex-col gap-3 border border-accent p-10 rounded-md shadow-accent shadow-sm w-full">
        <p className="font-bold text-center underline underline-offset-5">Daftar Barang</p>
        {(item.length == 0) ? <p className="text-center">Item Kosong</p> :
        <ul>
           {item.map((i, index) => (<li key={index} className="flex gap-2">
            {index+1 + "."}
            <div className="content flex flex-col gap-2">
            <p>Nama Barang: {i.name}</p>
            <p>Tipe Barang: {i.type}</p>
            <p>Status Barang: {i.status}</p>    
            </div>
           </li>))}
        </ul>}
    </div>  
    )
}