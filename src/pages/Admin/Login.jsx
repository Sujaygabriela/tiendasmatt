import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (user === "admin" && pass === "super123") {
      sessionStorage.setItem("logged", "true");
      navigate("/admin/panel");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-4 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold text-naranja mb-4">Login Admin</h2>
      <input
        className="border p-2 w-full mb-2"
        placeholder="Usuario"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        required
      />
      <input
        className="border p-2 w-full mb-4"
        type="password"
        placeholder="Contraseña"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        required
      />
      <button className="bg-naranja text-white px-4 py-2 rounded">Entrar</button>
    </form>
  );
}
