import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div>
        <h2>
            Home
        </h2>
        <Link to='produto/notebook'>
        Notebook
        </Link>
        {'  '}
        <Link to='produto/celular'>
        Celular
        </Link>
        </div>
    )
}

export default Home