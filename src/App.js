import logo from './logo.svg';
import './App.css';
import contactsArr from "./contacts.json"
import { useState } from "react"

function App() {
  
  const [contacts, setContacts] = useState(contactsArr.slice(0, 5))
  
  // const awards =  "🏆"
  

  const addContact = () => {
    
    const randomIndex = Math.floor(Math.random()*contactsArr.length)
    const randomContact = contactsArr[randomIndex]

    const copy=[...contacts]
    copy.push(randomContact)

    setContacts(copy)
  }

  const contactOrderByPopularity = () =>{
    const copy = contacts.map((elem)=> elem)
    
    copy.sort((elem1,elem2)=>{
     if (elem1.popularity > elem2.popularity){
      return 1
    }else{
      return -1
    }
    })
    setContacts(copy)
  }

  const contactOrderByName = () =>{
    const copy = contacts.map((elem)=> elem)
    
    copy.sort((elem1,elem2)=>{
     if (elem1.name > elem2.name){
      return 1
    }else{
      return -1
    }
    })
    setContacts(copy)
  }

  const deleteContact = (contactId) => {
   
    const filteredContacts = contacts.filter((eachContact)=> {
      if(eachContact.id === contactId){
      return false
    } else {
        return true
      }
    })

    setContacts(filteredContacts)
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>

      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={contactOrderByPopularity}>Sort by popularity</button>
      <button onClick={contactOrderByName}>Sort by name</button>


      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>

        {contacts.map((eachContact) => {
          return (
            <tbody>
              <tr>
                <td><img style={{ width: '50px' }} src={eachContact.pictureUrl} alt="" /></td>
                <td>{eachContact.name}</td>
                <td>{(eachContact.popularity).toFixed(2)}</td>
                <td>{(eachContact.wonOscar)=== true ? "🏆": ""}</td>
                <td>{(eachContact.wonEmmy)}</td>
              <button onClick={()=> deleteContact(eachContact.id)}>Delete</button>
              </tr>
            </tbody>
          )
        })}
      </table>



    </div>

  );
}


export default App;
