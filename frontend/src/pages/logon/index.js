import React,{useState} from 'react';
import './styles.css';
import {FiLogIn} from 'react-icons/fi';
import {Link,useHistory} from 'react-router-dom';
import api from '../../services/api';
import logoImage from '../../assets/logo.svg';
import herosImage from '../../assets/heroes.png';

export default function Logon(){
    const [id, setId]= useState('');
    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();
        try {
            const response = await api.post('sessions',{id});  
            localStorage.setItem('ongId',id);
            localStorage.setItem('ongName',response.data.name); 
            history.push('profiles');
        } catch (error) {
            alert('erro de login,tente novamente.');
        }
    }
    return (
        <div className="logon-conteiner">
            <section className="form">
                <img src={logoImage} alt="logo"/>
                <form onSubmit={handleLogon}>
                    <h1>faça seu logon</h1>
                    <input placeholder="Insira Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className='button' type="submit">Entrar</button>
                    <Link className='back-link' to="/register">
                        <FiLogIn size={16} color="#E02041"/>
                        não tenho conta
                    </Link>
                </form>
            </section>
            <img src={herosImage} alt="Heros"/>
        </div>
    );
}