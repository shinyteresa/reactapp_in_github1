import React from "react";
import './App.css';
import Header from "./Header";
import AddContact  from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Teresa",
      email: "shiny.teresa@gmail.com",
    },
    {
      id: "2",
      name: "Daisy",
      email: "daisy.teresa5@gmail.com",
    },
  ];
  return (
   <div className="ui container">
    <Header />
    <AddContact />
    <ContactList contacts= {contacts} />
   </div>
  );
}

export default App;
