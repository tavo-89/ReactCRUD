import React from "react";
import Message from "./Message";
import Songlyric from "./SongLyric";
import SongArtist from "./SongArtist";

const Songdetail = ({ search, lyric, bio }) => {
  //si no tienen valor retornan nulo
    if (!lyric || !bio) return null;
    return (
        <div>
            
            {lyric.error || lyric.err || lyric.name === "AbortError" ? (
                <Message
                msg={`ERROR : no existe la cancion ${search.song}`}
                bgColor="#dc3545"
                />
            ) : (
                <Songlyric title={search.song} lyrics={lyric.lyrics} />
            )}
            {bio.artists ? (
                <SongArtist artist={bio.artists[0]} />
            ) : (
                <Message
                msg={`ERROR : no existe el artista ${search.artist}`}
                bgColor="#dc3545"
                />
            )}
            <Message />
        </div>
    );
};

export default Songdetail;
