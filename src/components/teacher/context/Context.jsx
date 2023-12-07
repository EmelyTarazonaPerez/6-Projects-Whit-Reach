import { Children, React, createContext, useContext, useState } from "react";
import  marta  from '../assets/marta.png'
import  grace  from '../assets/grace.png'
import  teacher1  from '../assets/teacher1.jpg'

export const Context = createContext()

export function Datos ({children}) {

    const valores = [{
        titulo: "Aprenda React intensivamente con una profesora nativa",
        texto: "Una profesora sólo para ti (12h/día). 2 semanas.",
        boton1: "Profesora",
        foto: marta,
        nombre: "Marta Ríos",
        boton2: "Lugar",
        direccion: "48 St Laurent Boulevard, Montreal, Canadá"
    }, {
        titulo: "Learn React intensively with a native teacher",
        texto: "2 weeks. A teacher just for you (12h/day)",
        boton1: "Professor",
        nombre: "Grace Trembley",
        foto: grace,
        boton2: "Lotacion",
        direccion: "65 Stonehaven, Ottawa, Canadá"
    }, {
        titulo: "Apprenez React intensément avec un professeur natif",
        texto: "2 semaines. Un professeur rien que pour vous (12h/jour)",
        boton1: "Professeur",
        nombre: "Aimée Mathieu",
        foto: teacher1,
        boton2: "Emplacement",
        direccion: "2700 Rue Jean-Perrin #190, Québec, Canadá"
    }, {
        idioma: 0
    }]

    const [info, setInfo] = useState(valores)

    return (
        <Context.Provider value={{info, setInfo}}>
            { children }
        </Context.Provider>
    )
}