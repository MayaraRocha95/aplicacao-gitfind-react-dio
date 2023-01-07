import { Header } from  '../../components/Header'
import background from '../../assets/background.png'
import ItemList from '../../components/ItemList'
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
            <img 
            src="https://avatars.githubusercontent.com/u/98711190?v=4"
             className='profile' />
           <div>
            <h3>Mayara Rocha</h3>
            <span>@MayaraRocha95 </span>
            <p>Descrição</p>
           </div>
          </div>
          <hr />
          <div>
            <h4 className='repositorio'>Repositórios</h4>
            <ItemList title="teste1" description="teste de descrição"/>
            <ItemList title="teste1" description="teste de descrição"/>
            <ItemList title="teste1" description="teste de descrição"/>
            <ItemList title="teste1" description="teste de descrição"/>
          </div>
        </div>
     </div>
    </div>
  );
}

export default App;
