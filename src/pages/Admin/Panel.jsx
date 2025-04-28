import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../supabaseClient";

export default function Panel() {
  const navigate = useNavigate();
  const [productos, setProductos] = useState([]);
  const [form, setForm] = useState({ name: "", price: "", image: "", active: true });

  useEffect(() => {
    if (sessionStorage.getItem("logged") !== "true") {
      navigate("/admin/login");
    } else {
      fetchProductos();
    }
  }, []);

  const fetchProductos = async () => {
    const { data } = await supabase.from("productos").select();
    setProductos(data);
  };

  const saveProducto = async (e) => {
    e.preventDefault();
    await supabase.from("productos").insert([form]);
    setForm({ name: "", price: "", image: "", active: true });
    fetchProductos();
  };

  const toggleProducto = async (id, active) => {
    await supabase.from("productos").update({ active: !active }).eq("id", id);
    fetchProductos();
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl text-naranja mb-4">Panel Admin</h1>
      <form onSubmit={saveProducto} className="mb-6 flex gap-2">
        <input
          placeholder="Nombre"
          className="border p-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          placeholder="Precio"
          type="number"
          className="border p-2"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <input
          placeholder="Imagen URL"
          className="border p-2"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          required
        />
        <button className="bg-naranja text-white px-4">Agregar</button>
      </form>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td>
              <td>${p.price}</td>
              <td>
                <button onClick={() => toggleProducto(p.id, p.active)} className="px-2">
                  {p.active ? "Activo" : "Inactivo"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
