import { useState } from "react"
import contactData from "./contacts.json"

function App() {
  const [contacts, setContacts] = useState(contactData.slice(0,7))
  
  return (
    <div className=" flex flex-col items-center justify-center bg-slate-500">
      <h1 className="text-center text-6xl text-bold p-6 text-white">IronContacts</h1>
      <button className="rounded-full bg-blue-400 px-4 py-2 mb-6 shadow-md text-white text-bold hover:scale-110">Add Random Contact</button>
      <table >
        <thead className="bg-blue-300" >
        <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th className="px-6 ">Won an Oscar</th>
            <th className="px-6 ">Won an Emmy</th>
        </tr>
        </thead>
        <tbody>
        {contacts.map((contact) => (
        <tr key={contact.id}>
            <td className="text-center">
              <img className="w-40" src={contact.pictureUrl} alt={contact.name} />
            </td>
              <td className="text-center bg-blue-100 p-6">{contact.name}</td>
              <td className="text-center bg-blue-200 p-6">{contact.popularity}</td>
              <td className="text-center bg-blue-100 p-6">{contact.wonOscar && "🏆"}</td>
              <td className="text-center bg-blue-200 p-6">{contact.wonEmmy && "🏆"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
