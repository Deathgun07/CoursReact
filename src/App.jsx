import { Checkbox } from "./component/forms/checkbox";

const PRODUCTs = [
  {category:"Fruits", price:"1$", stocked: true, name:"Apple"},
  {category:"Fruits", price:"1$", stocked: true, name:"Dragenfruit"},
  {category:"Fruits", price:"2$", stocked: false, name:"Passionfruit"},
  {category:"Vegetables", price:"2$", stocked: true, name:"Spinach"},
  {category:"Vegetables", price:"4$", stocked: false, name:"Pumpkin"},
  {category:"Vegetables", price:"1$", stocked: true, name:"peas"},
]

function App() {
  return <div className="container my-5">
    <Searchbar />
  </div>
}

function Searchbar(){
  return <div>
    <div className="mb-3">
      <input type="search" onChange={()=>null} placeholder="Rechercher..." />
      <Checkbox id="stocked" checked={false} onchange={()=>null} label="N'afficher que les produits en stock"/>
    </div>
  </div>
}

export default App;
