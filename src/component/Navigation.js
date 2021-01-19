import './Navigation.css';

function Navigation() {
    const accueil = ()=>{

      console.log('Accueil');

    }

    const Galerie =()=>{
      console.log(`Galerie`);
    }

    const Contact =()=>{
      console.log(`Contact`);
    } 

    return (
      <div className="Navigation">

          <ul>
              <li onClick={accueil}> Link 1 </li>
              <li onMouseOver={Galerie}> Link 3</li>
              <li onDoubleClick={Contact}> Link 2</li>
          </ul>
       
      </div>
    );
  }
  
  export default Navigation;