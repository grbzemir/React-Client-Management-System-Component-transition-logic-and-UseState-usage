import { useState } from 'react'
import './App.css'
import CustomerForm from './Components/CustomerForm/CustomerForm'
import CustomerList from './Components/CustomerList/CustomerList'

function App() {
  const [customers, setCustomers] = useState([]);
  const addNewCustomer = (newCustomer) => {
    //setCustomers([...customers, newCustomer]);
    //console.log(customers);
    //Yukarıdaki yapının aynısı aşağıdaki gibi de yapılabilir.
    setCustomers((prevState) => [newCustomer, ...prevState]);
  };

  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && <p>There are no customers..</p>}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  )
}

export default App
