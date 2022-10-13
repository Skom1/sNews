import React from 'react';
import { useEffect, useState, createContext } from "react";
import axios from "axios";

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    const [categoria, setCategoria] = useState("general")
    const [noticias, setNoticias] = useState([])

    useEffect(() => {
        const api = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&pageSize=100&apiKey=${import.meta.env.VITE_API_KEY}`
            const { data } = await axios(url)
            setNoticias(data.articles)
        }
        api()
    }, [categoria])

    const handleCategoria = e => {
        setCategoria(e.target.value)
    }

    return (
        <NoticiasContext.Provider
            value={{
                categoria,
                handleCategoria,
                noticias,
                setNoticias
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
};

export {NoticiasProvider}

export default NoticiasContext;