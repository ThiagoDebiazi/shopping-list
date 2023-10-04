import './App.css'
import { Plus } from 'lucide-react'

function App() {



  return (
    <><div>
      <h1>Lista de Compras</h1>
      <div className='adicionar'>
        <div className='items'>
          <h3>Itens:</h3>
          <input className="inputItens" id="itens" type="text" placeholder='Adicione um item' />
        </div>
        <div className='quantidade'>
          <h3>Quantidade:</h3>
          <div className='q1'>
            <input className="inputQuantidade" id="Quantidade" type="text" placeholder='Quantidade' />
            <select className='selectQuantidade' name='quantidade'>
              <option value="UN">UN</option>
              <option value="KG">KG</option>
              <option value="L">L</option>
            </select>
          </div>
        </div>
        <div className='categoria'>
          <h3>Categoria</h3>
          <select className="selectCategoria" name='Categoria'>
            <option value="frutas">frutas</option>
            <option value='legumes'>legumes</option>
            <option value='padaria'>padaria</option>
            <option value='bebida'>bebida</option>
            <option value='carne'>carne</option>
          </select>
        </div>
        <button className='add'><Plus /></button>
      </div>
    </div>
    </>
  )
}

export default App
