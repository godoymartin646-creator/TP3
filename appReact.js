const { useState } = React;

function App() {
    const [personas, setPersonas] = useState([]);

    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState("");
    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");

    const handleAgregarPersona = (e) => {
        e.preventDefault();

        const alt = parseFloat(altura);
        const pes = parseFloat(peso);
        const imcCalculado = (pes / (alt * alt)).toFixed(2);

        const nuevaPersona = {
            id: Date.now(),
            nombre,
            apellido,
            edad,
            altura: alt,
            peso: pes,
            imc: imcCalculado
        };

        setPersonas([...personas, nuevaPersona]);

        setNombre("");
        setApellido("");
        setEdad("");
        setAltura("");
        setPeso("");
    };

    const handleEliminarPersona = (id) => {
    const listaActualizada = personas.filter(persona => persona.id !== id);
    setPersonas(listaActualizada);
};

    return (
        <main style={{ padding: '20px' }}>
            <h1>Registro de Personas (React)</h1>

            <form id="formulario-persona" onSubmit={handleAgregarPersona}>
                <div className="input-group">
                    <label>Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Apellido:</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Edad:</label>
                    <input type="number" min="0" value={edad} onChange={(e) => setEdad(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Altura (en metros, ej: 1.75):</label>
                    <input type="number" step="0.01" min="0" value={altura} onChange={(e) => setAltura(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label>Peso (en kg):</label>
                    <input type="number" step="0.1" min="0" value={peso} onChange={(e) => setPeso(e.target.value)} required />
                </div>
                <button type="submit" id="btn-agregar" className="btn-estilizado">Agregar Persona</button>
            </form>
            <table>
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>Altura (m)</th>
                    <th>Peso (kg)</th>
                    <th>IMC</th>
                    <th>Acciones</th>
                </tr>
            </thead>
                <tbody>
                    {personas.length === 0 ? (
                        <tr>
                            <td colSpan="7" style={{ textAlign: 'center', color: '#888' }}>No hay personas registradas aún.</td>
                        </tr>
                    ) : (
                        personas.map((persona) => (
                            <tr key={persona.id}>
                                <td>{persona.nombre}</td>
                                <td>{persona.apellido}</td>
                                <td>{persona.edad}</td>
                                <td>{persona.altura} m</td>
                                <td>{persona.peso} kg</td>
                                <td><strong>{persona.imc}</strong></td>
                                <td>
                                    <button className="btn-eliminar" onClick={() => handleEliminarPersona(persona.id)}>Quitar</button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
                    </main>
                );
            }
            
            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(<App />);