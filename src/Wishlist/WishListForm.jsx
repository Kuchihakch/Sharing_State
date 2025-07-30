import { useState } from "react"

const data = {
        name: "",
        type: "",
        status: ""
    }
export default function WishListForm({onSubmit}){

    const [item, setItem] = useState(data);

    function handleOnNameChange(e){
        setItem({
            ...item,
            name: e.target.value
        })    
    }
    function handleOnTypeChange(e){
        setItem({
            ...item,
            type: e.target.value || "elektronik"
        })    
    }
    function handleOnStatusChange(e){
        setItem({
            ...item,
            status: e.target.value || false
        })
    }
   function handleSubmit(e){
        e.preventDefault();
        if((item.name.length == 0) || (item.type == '') || (item.status == '')){
            alert('Masukkan Data Dengan Benar!')
            return;
        }
        onSubmit(item)
        setItem({name:"", type: "", status:""})
   }
    return(
        <section className="grid grid-cols-2 gap-3">
        <form id="formInput" onSubmit={handleSubmit} className="flex flex-col gap-3 border border-accent p-10 rounded-md shadow-accent shadow-sm">
                <p className="font-bold text-center underline-offset-5 underline">Nama Barang:</p>
                <input type="text" placeholder="Masukkan Nama Barang" className="input input-accent w-full" onChange={handleOnNameChange}/>
                <p className="font-bold">Kategori:</p>
                <select name="Barang" id="namaBarang" className="select select-accent w-full" onChange={handleOnTypeChange}>
                <option value="" selected disabled hidden>Tipe Barang</option>
                <option value="elektronik">Elektronik</option>
                <option value="fashion">Fashion</option>
                <option value="perabotan">Perabotan</option>    
                </select>
                <div className="flex justify-center gap-10 items-center" onChange={handleOnStatusChange}>
                    <div className="value1 flex gap-2 items-center">
                     <input type="radio" name="status" value="Penting"/>Penting   
                    </div>
                    <div className="value2 flex gap-2 items-center">
                      <input type="radio" name="status" value="Tidak"/>Tidak  
                    </div>
                </div>
                <button type="submit" className="btn btn-success text-white">Simpan</button>
            </form>

            <div className="flex flex-col gap-3 border border-accent p-10 rounded-md shadow-accent shadow-sm">
                <h className="font-bold text-center underline-offset-5 underline">Draft Wishlist</h>
                <p>Nama Barang: {item.name}</p>
                <p>Jenis Barang: {item.type}</p>
                <p>Status Barang: {item.status}</p>
            </div>
        </section>
    )
}