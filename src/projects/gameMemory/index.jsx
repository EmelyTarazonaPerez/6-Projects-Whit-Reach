import React, { useEffect, useState } from 'react';
import { datos } from './data/datos';
import styled from 'styled-components'
import ima from './data/imagen1.png'
import './index.css'

const Index = () => {

    const duplicadoImagen = [...datos, ...datos]
    console.log(duplicadoImagen.length)
    const objectImgPrevius = duplicadoImagen.map(item => ({
        img: item,
        estado: 0
    }))

    const [images, setImages] = useState([]);

    useEffect(() => {
        for (let i = objectImgPrevius.length - 1; i > 0; i--) {
            const azar = Math.floor(Math.random() * (i + 1));
            [objectImgPrevius[i], objectImgPrevius[azar]] = [objectImgPrevius[azar], objectImgPrevius[i]]
        }
        setImages(objectImgPrevius)
        console.log(images)
    }, [])

    return (
        <div>
            <h1>Game memory</h1>
            <div className='container_grid'>
                <ContainerGrif>
                    {images.map((imagen, index) => (
                        <div key={index}>
                            {/*<img src={imagen.img} alt='imagen'/>*/}
                            <ImgStyle></ImgStyle>
                        </div>
                    ))}
                </ContainerGrif>
            </div>
        </div>

    );
}

const ImgStyle = styled.div`
    width: 135px;
    height: 154px;
    border-radius: 5px;
    background-color: rgb(163, 92, 0);
`

const ContainerGrif = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px
`


export default Index;
