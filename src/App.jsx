import { useState } from 'react'
import './App.css'
import { Plus } from 'lucide-react'

function App() {
  const [items, setItems] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [categoria, setCategoria] = useState('frutas')
  const [unidade, setUnidade] = useState('UN')

  const [arrayItems, setArrayItems] = useState([])



  const handleAddItems = (event) => {
    event.preventDefault();
    const newItem = { Itens: items, Quantidade: quantidade, Unidade: unidade, Categoria: categoria };
    setArrayItems([...arrayItems, newItem])
    setItems('')
    setQuantidade('')
    setCategoria('frutas')
    setUnidade('UN')

    console.log(arrayItems)
  }

  console.log(items, categoria, quantidade, unidade)
  return (
    <><div>
      <h1>Lista de Compras</h1>
      <form className='adicionar'>
        <div className='items'>
          <h3>Itens:</h3>
          <input className="inputItens" id="itens" type="text" placeholder='Adicione um item' value={items} onChange={(event) => setItems(event.target.value)} />
        </div>
        <div className='quantidade'>
          <h3>Quantidade:</h3>
          <div className='q1'>
            <input className="inputQuantidade" id="quantidade" type="text" placeholder='Quantidade' value={quantidade} onChange={(event) => setQuantidade(event.target.value)} />
            <select className='selectUnidade' name='unidade' value={unidade} onChange={(event) => setUnidade(event.target.value)}>
              <option value="UN">UN</option>
              <option value="KG">KG</option>
              <option value="L">L</option>
            </select>
          </div>
        </div>
        <div className='categoria'>
          <h3>Categoria</h3>
          <select className="selectCategoria" name='categoria' value={categoria} onChange={(event) => setCategoria(event.target.value)}>
            <option value="frutas">frutas</option>
            <option value='legumes'>legumes</option>
            <option value='padaria'>padaria</option>
            <option value='bebida'>bebida</option>
            <option value='carne'>carne</option>
          </select>
        </div>
        <button type='submit' className='add' onClick={handleAddItems}><Plus /></button>
      </form>
    </div>
    </>
  )
}

export default App
