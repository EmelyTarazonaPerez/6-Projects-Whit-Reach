import React, { useEffect, useState } from 'react';
import { datos } from './data/datos';
import styled from 'styled-components'
import './index.css'

const Index = () => {

    const duplicadoImagen = [...datos, ...datos]
    console.log(duplicadoImagen.length)
    const objectImgPrevius = duplicadoImagen.map(item => ({
        img: item,
        estado: 0
    }))

    const [images, setImages] = useState([]);
    const [checkImg, setCheckImg] = useState([]);
    const [rightGuess, setRightGuess] = useState(0);


    //first render
    useEffect(() => {
        for (let i = objectImgPrevius.length - 1; i > 0; i--) {
            const azar = Math.floor(Math.random() * (i + 1));
            [objectImgPrevius[i], objectImgPrevius[azar]] = [objectImgPrevius[azar], objectImgPrevius[i]]
        }
        setImages(objectImgPrevius)
        setRightGuess(0)
    }, [])

    const mostrar = (e) => {
        setCheckImg([...checkImg, {
            img: images[e].img,
            index: e
        }])
        const prevItem = [...images]
        prevItem[e].estado = 1;
        setImages(prevItem)
    }

    useEffect(() => {
        if (checkImg.length === 2) {
            //same images
            if (checkImg[0].img === checkImg[1].img) {
                setCheckImg([])
                setRightGuess((e) => e + 1)
            }
            else {
                setTimeout(() => {
                    checkImg.map(item => {
                        const provisional = [...images]
                        provisional[item.index].estado = 0
                        setImages(provisional)
                        setCheckImg([])
                    })
                }, 2000)
            }
        }
    }, [checkImg])

    return (
        <div className='container_game'>
            <h1 className='tittle_game'>Game memory</h1>
            <div className='container_grid'>
                <ContainerGrif>
                    {images.map((imagen, index) =>
                        imagen.estado === 0
                            ? (
                                <div onClick={() => mostrar(index)} key={index}>
                                    {/*<img src={imagen.img} alt='imagen'/>*/}
                                    <ImgStyle></ImgStyle>
                                </div>
                            )
                            : (
                                <div onClick={() => mostrar(index)} key={index}>
                                    <img src={imagen.img} alt='imagen' />
                                </div>
                            )
                    )}
                </ContainerGrif>
            </div>
            <div className='container_rigth_guess'>
                <b>Right Guess</b>
                <p>{rightGuess}</p>
            </div>
        </div>

    );
}

const ImgStyle = styled.div`
    width: 135px;
    height: 154px;
    border-radius: 5px;
    background-color: #CDDC39;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`

const ContainerGrif = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:20px
`


export default Index;
