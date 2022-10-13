import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Box, Button } from "@mui/material";
import useNoticias from "../hooks/useNoticias";

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {
    const { categoria, handleCategoria } = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categorias</InputLabel>
                <Select
                    label={"Categoria"}
                    onChange={handleCategoria}
                    value={categoria}
                >
                    {CATEGORIAS.map(categoria => (
                        <MenuItem
                            key={categoria.value}
                            value={categoria.value}
                        >{categoria.label}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </form>
    );
};

export default Formulario;