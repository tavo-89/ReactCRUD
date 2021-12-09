import React from "react";

const Songartist = ({ artist }) => {
    return (
        <section>
        <h3>{artist.strArtist}</h3>
        <img src={artist.strArtistThumb} alt={artist.strArtist} />
        <h4>Periodo de Actividad</h4>
        <p>
            {artist.intBornYear} - {artist.intDiedYear || "Actualidad"}
        </p>
        <h4>Pais de origen</h4>
        <p>{artist.strCountry}</p>
        <h4>Genero musical</h4>
        <p>
            {artist.strGenere} - {artist.strStyle}
        </p>
        <h3>Biografia</h3>
        {artist.strBiographyES ? (<p>{artist.strBiographyES}</p>) : ('no hay biografia en español')}
        
        <h3>Biography</h3>
        <p>{artist.strBiographyEN}</p>
        <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
            Sitio Web
        </a>
        </section>
    );
};

export default Songartist;
