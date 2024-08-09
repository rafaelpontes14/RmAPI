'use client'

import { useEffect, useState } from "react";
import axios from "axios";
import Rmcard from "./Rmcard";
import { Character } from "@/types/character"

export default function Rmlist() {
    const [character, setCharacter] = useState<Character[]>([]);

    useEffect(() => {
        getCharacter();
    }, []);

    const getCharacter = async () => {
       await axios({
            method: 'get',
            url: 'https://rickandmortyapi.com/api/character',
            
            params: {
                language: 'pt-BR',
            }
        }).then(response => {
           setCharacter(response.data.results);
           
        })
    }

    

    return (
        <ul className="flex flex-wrap justify-center items-center p-10 gap-10">
            {character.map((character) => 
                <Rmcard
                    key={character.id}
                    character={character}
                />     
            )} 
            
        </ul>
    );
}