import React from 'react';
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState("general")
    const [noticias, setNoticias] = useState([])
    const [pagina, setPagina] = useState(1)
    const [totalNoticias, setTotalNoticias] = useState(0)

    useEffect(() => {
        const api = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
            setPagina(1)
        }
        api()
    }, [categoria])

    useEffect(() => {
        const api = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
            setTotalNoticias(data.totalResults)
        }
        api()
    }, [pagina])

    const handleCategoria = e => {
        setCategoria(e.target.value)
    }

    const handlePagina = (e, valor) => {
        setPagina(valor)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleCategoria,
                noticias,
                totalNoticias,
                handlePagina,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
};

export {NoticiasProvider}

export default NoticiasContext;