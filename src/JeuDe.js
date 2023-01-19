import React from "react";
export default class JeuDe extends React.Component {
 constructor(props) {
super(props);
this.state = { face: null, compteur: 0, fin: false };
 }

jouer() {
  const valeur = Math.floor(Math.random() * 6) + 1;
  if(this.props.cache === this.state.face){
    this.setState({face:valeur, compteur: this.state.compteur+=1, fin: true})
  }
  else this.setState({face:valeur, compteur: this.state.compteur+=1, fin: false})
  
}

getImage() {
  switch(this.state.face){
    case 1:
      return "images/face1.PNG"
    case 2:
      return "images/face2.PNG"
    case 3:
      return "images/face3.PNG"
    case 4:
      return "images/face4.PNG"
    case 5:
      return "images/face5.PNG"
    case 6:
      return "images/face6.PNG"
    default:
      return "images/vide.PNG"
  }
}

initialiser(){
this.setState({ face:null, compteur: 0, fin: false });
}
render() {
  const styleImage = { width: "60px", height: "60px" };
  return(
    <div>
      <img src="images/Dé.PNG" alt="erg"/>
      <h1>Jeu de Dé...</h1>
      <h2>face:{this.state.face} </h2>
      <img src={this.getImage()} style={styleImage} alt=""/>
      <h2>nombre d'essais {this.state.compteur}</h2>
      {this.props.cache === this.state.face ? (<button onClick={() => this.jouer()} disabled>jouer</button>) :(<button onClick={() => this.jouer()} >jouer</button>) }      
      {this.props.cache === this.state.face ? (<p>Bravo vous avez trouvez la face cachée {this.props.cache}</p>) : ("")}
      
<button onClick={() => this.initialiser()}>Initialiser</button>
    </div>
  )

}
}