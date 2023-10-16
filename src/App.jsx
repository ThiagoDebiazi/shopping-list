import { useState } from 'react'
import './App.css'
import { Check, Plus } from 'lucide-react'
import * as Checkbox from '@radix-ui/react-checkbox';




export default function App() {
  const [items, setItems] = useState('')
  const [quantidade, setQuantidade] = useState('')
  const [categoria, setCategoria] = useState('frutas')
  const [unidade, setUnidade] = useState('UN')

  const [arrayItems, setArrayItems] = useState([])
  const [arrayMarkItem, setArrayMarkItem] = useState([])

  const handleMarkItem = (index) => {
    const markedItem = arrayItems[index];
    if (arrayMarkItem.includes(markedItem)) {
      setArrayMarkItem(arrayMarkItem.filter(item => item !== markedItem));
    } else {
      setArrayMarkItem([...arrayMarkItem, markedItem]);
      setArrayItems(arrayItems.filter(item => item !== markedItem));
    }
  }

  const handleAddItems = (event) => {
    event.preventDefault();
    const newItem = { Itens: items, Quantidade: quantidade, Unidade: unidade, Categoria: categoria };
    setArrayItems([...arrayItems, newItem])
    setItems('')
    setQuantidade('')
    setCategoria('frutas')
    setUnidade('UN')

  }

  const handleDeleteItem = (index) => {
    const markedItem = arrayMarkItem[index];
    if (markedItem) {
      const updatedItems = arrayItems.filter(item => item !== markedItem);
      setArrayItems(updatedItems);
      const updatedMarkedItems = arrayMarkItem.filter((_, i) => i !== index);

      setArrayMarkItem(updatedMarkedItems);
    }
  }

  return (
    <div>
      <div>
        <h1>Lista de Compras</h1>
        <form className='adicionar'>
          <div className='items'>
            <h3>Itens:</h3>
            <input className="inputItens" id="itens" type="text" placeholder='Adicione um item' value={items} onChange={(event) => setItems(event.target.value)} />
          </div>
          <div className='quantidade'>
            <h3>Quantidade:</h3>
            <div className='q1'>
              <input className="inputQuantidade" id="quantidade" type="number" placeholder='Quantidade' value={quantidade} onChange={(event) => setQuantidade(event.target.value)} />
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
        <div className='itemsSubmited'>
          <ul>
            {arrayItems.map((item, index) => (
              <li className='itemsSubmited2' key={index}>
                <Checkbox.Root className="CheckboxRoot" onClick={() => handleMarkItem(index)}>
                  <Checkbox.Indicator className="CheckboxIndicator">
                    <Check className='check' width={15} height={15} />
                  </Checkbox.Indicator>
                </Checkbox.Root>
                <div className='siItems'>
                  {item.Itens}
                  <div className='siQuantidade'>
                    {item.Quantidade}
                    {item.Unidade}
                  </div>
                </div>-
                <div className='siCategoria'>
                  ({item.Categoria})
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="markedItems">
          <ul>
            {arrayMarkItem.map((item, index) => (
              <li key={index} className='line'>
                <label className='marked'>
                  <Checkbox.Root className="CheckboxRoot2" onClick={() => handleDeleteItem(index)}>
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <Check className='check' width={15} height={15} />
                    </Checkbox.Indicator>
                  </Checkbox.Root>
                  <div className='marked1'>
                    {item.Itens}
                    <div className='marked3'>{item.Quantidade} {item.Unidade}
                    </div>
                  </div>
                  <div className='marked2'>
                    {item.Categoria}
                  </div>
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}


