import * as C from './App.styled';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { useState, useEffect } from 'react';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';


export const App = () => {
  const [list, setList] = useState(items);
  const [filteredList,setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(()=> {
    setFilteredList(filterListByMonth(list, currentMonth));
  },[list, currentMonth])

  return (
    <C.Container>
    <C.Header>
      <C.HeaderText>Sistemas de Finanças</C.HeaderText>
    </C.Header>
      <C.Body>

        {/** Area de Informação */}
        <InfoArea/>

        {/** Area de Inserção */}
        
        {/** Tabela de items */}
        <TableArea list={filteredList} />


      </C.Body>
    </C.Container>
  )
}