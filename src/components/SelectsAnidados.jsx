import React, { useState } from "react";
import Selectlist from "./SelectList";
import SelectlistLocal from "./SelectListLocal";

const Selectsanidados = () => {
    const [provincia, setProvincia] = useState("");
    const [localidad, setLocalidad] = useState("");
    return (
        <div>
        <h2>Selects Anidado</h2>
        <h3>Argentina</h3>
        <Selectlist
            titulo="provincias"
            title="provincias"
            url="https://apis.datos.gob.ar/georef/api/provincias"
            handleChange={(e) => {
            setProvincia(e.target.value);
            }}
        />
        {provincia && (
            <SelectlistLocal
            titulo="localidades"
            title="localidades"
            url={`https://apis.datos.gob.ar/georef/api/localidades?max=1000&provincia=${provincia}`}
            handleChange={(e) => {
                setLocalidad(e.target.value);
            }}
            />
        )}

        <pre>
            <code>
            {provincia} - {localidad}
            </code>
        </pre>
        </div>
    );
};

export default Selectsanidados;
