import "./BarRecherche.css";

const BarRecherche = ({onSearchChange}) => {
  

    return (
      <div className="recherche-produit">
        <div className="container-input-recherche-produit" style={{width:"100%"}}>
          <input
            type="text"
            placeholder="vous cherchez un produit ?....."
            onChange={onSearchChange}
            style={{width:"100%"}}
          />
          <ifram className="fa-solid fa-magnifying-glass"></ifram>
        </div>
      </div>
    );
  };
  
  export default BarRecherche;
  