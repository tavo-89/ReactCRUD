import React from 'react';
import { useParams } from 'react-router-dom';
import Songdetail from '../components/SongDetail';

const Songpage = ({mySongs}) => {
    let {id} = useParams()

    let currentSong = mySongs[id]
    let {search, lyric, bio} = currentSong

    return (
        
        <Songdetail search={search} lyric={lyric} bio={bio}/>
    );
}

export default Songpage;
