import { Header } from  '../../components/Header'
 import background from '../../assets/background.png'
import './styles.css'

 function App() {
  return (
    <div className="App">
     <Header />

     <div className='conteudo'> 
        <img src={background} className='background' alt=""/>
        <div className='info'>
          <div>
            <input  name='usuario' placeholder='@username'/>
            <button>Buscar</button>
          </div>
          <div className='perfil'>
            <img src="https://avatars.githubusercontent.com/u/98711190?v=4" className='profile' />
           <div>
            <h3>Mayara ocha</h3>
            <p>Descrição</p>
           </div>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
