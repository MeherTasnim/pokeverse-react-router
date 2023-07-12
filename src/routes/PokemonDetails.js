import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from "react-bootstrap/Card";

function PokemonDetails() {
    const [pokemon, setPokemon] = useState(null);
    const params = useParams();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon(data)
            })
            .catch((error) => {
                console.error(error);
            });
    }, [params.name]);

    if (!pokemon) {
        return <>
            loading...
        </>
    }

    return (
        <div>
            <Card style={{ width: '18rem' }} className='mx-auto'>
                <Card.Img
                    width='286'
                    height='286'
                    bg='dark'
                    variant='top'
                    src={pokemon?.sprites.front_default}
                />
                <Card.Body>
                    <Card.Title>{pokemon.name}</Card.Title>
                    <Card.Text as='div'>
                        Height: {pokemon.height}
                        <br />
                        Weight: {pokemon.weight}
                        <br />
                        Abilities:
                        <ul>
                            {pokemon.abilities.map((ability) => (
                                <li key={ability.ability.name}>
                                    <span>{ability.ability.name}</span>
                                </li>
                            ))}
                        </ul>
                        Types:
                        <ul>
                            {pokemon.types.map((type) => (
                                <li key={type.type.name}>
                                    <span>{type.type.name}</span>
                                </li>
                            ))}
                        </ul>
                        Stats:
                        <ul>
                            {pokemon.stats.map((stat) => (
                                <li key={stat.stat.name}>
                                    <span>{stat.stat.name}</span>
                                </li>
                            ))}
                        </ul>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}

export { PokemonDetails }