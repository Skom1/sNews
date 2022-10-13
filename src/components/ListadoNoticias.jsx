import React from 'react';
import { Grid, Typography, Stack, Pagination } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
    const { noticias, totalNoticias, handlePagina, pagina } = useNoticias()

    const totalPaginas = Math.ceil(totalNoticias / 20)

    return (
        <>
            <Typography
                textAlign={"center"}
                marginY={5}
                variant={"h3"}
                component={"h2"}
            >
                Ultimas Noticias
            </Typography>
            <Grid
                container
                spacing={2}
            >
                {noticias.map(noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}
                    />
                ))}
            </Grid>
            <Stack
                sparcing={2}
                direction={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    marginY: 5
                }}
            >
                <Pagination
                    count={totalPaginas}
                    color={"secondary"}
                    onChange={handlePagina}
                    page={pagina}
                />
            </Stack>
        </>
    );
};

export default ListadoNoticias;