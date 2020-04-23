import React,{useState} from 'react';
import './styles.css';
import logoImage from '../../assets/logo.svg';
import {Link,useHistory} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from './../../services/api';

export default function Register(){
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [whatsapp,setWhatsapp]= useState('');
    const [city, setCity]= useState('');
    const [uf, setUf]= useState('');
    const history= useHistory();
    async function handleRegister(e){
        e.preventDefault();
        const data={
            name,
            email,
            whatsapp,
            city,
            uf,
        };
       try {
            const response= await api.post('ong',data);
            alert(`seu ID: ${response.data.id}`);
            history.push('/');
       } catch (error) {
           alert('Erro no cadastro tente novamente.');
       }
    }
    return(
        <div className="register-container">
            <div className="container">
                <section>
                    <img src={logoImage} alt="logo"/>
                    <h1>cadastro</h1>
                    <p> faça seu cadastro, entre na plataforma e ajude as pessoas a acharem os casos de usa ONG</p>
                    <Link className='back-link' to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                         tenho conta
                    </Link>
                </section>
                <form onSubmit={handleRegister}>
                    <input placeholder='Nome da Ong'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input type="email" placeholder='Email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="text" placeholder='Whatsapp'
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input placeholder='Cidade'
                            value={city}
                            onChange= {e => setCity(e.target.value)}
                        />
                        <input placeholder='UF' style={{width:80}}
                            value={uf}
                            onChange={ e => setUf(e.target.value)}
                        />
                    </div>
                    
                    <button type="submit" className='button'>Cadastrar</button>

                </form>
            </div>
        </div>
    );
}