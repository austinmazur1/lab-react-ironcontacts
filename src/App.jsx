import { useState } from "react"
import contactData from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(contactData.slice(0,5))
  
  return (
    <div className="m-6">
      <h1 className="text-center text-6xl text-bold p-6">IronContacts</h1>
      <table>
        <thead >
        <tr className="bg-blue-200">
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => (
        <tr key={contact.id}>
            <td>
              <img className="w-40 p-2" src={contact.pictureUrl} alt={contact.name} />
            </td>
              <td className="text-center">{contact.name}</td>
              <td className="text-center">{contact.popularity}</td>
            </tr>
          ))};
        </tbody>
      </table>
    </div>
  )
}

export default App
