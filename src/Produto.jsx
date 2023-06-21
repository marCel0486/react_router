import React from "react";
import { useParams, Routes, Route, NavLink} from "react-router-dom";
import ProdutoDescricao from './ProdutoDescricao'
import ProdutoAvaliacao from "./ProdutoAvaliacao";
import ProdutoCustomizacao from "./ProdutoCustomizacao";


const Produto = () => {
const Params = useParams()

    return(
        <div>
        <h2>
            Produto: {Params.id}
        </h2>
        <nav>
            <NavLink to=''>
            Descrição
            </NavLink>
            <NavLink to='avaliacao'>
            Avaliação
            </NavLink>
            <NavLink to='customizacao'>
            Customizaçao
            </NavLink>
        </nav>
        <Routes>
            <Route path='/' element={<ProdutoDescricao/>}/> 

            <Route path='avaliacao' element={<ProdutoAvaliacao/>}/> 

            <Route path='customizacao' element={<ProdutoCustomizacao/>}/>
        </Routes>
        </div>
    )
}

export default Produto