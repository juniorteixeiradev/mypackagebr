import { useState, useEffect } from "react";
import api from "../../services/apiCorreios";
import styles from "./Container.module.css";
import { useSpring, animated } from 'react-spring';

function Container({children, codigoPkt, containerVisible}) {
  const [res, setRes] = useState({});
  const [codigoPktState, setCodigoPkt] = useState(codigoPkt);
  async function findPackage() {
    if(codigoPktState !== '' && codigoPktState.length <= 13){
      try {
        const response = await api.get(`/json?user=juniorteixeira.dev@gmail.com&token=c3d9be2addf040b8442593c2cb69f04812097e69012b1bb4aa04dfbda4c4cacb&codigo=${codigoPkt}`); // Insira a URL da sua API aqui
        setRes(response.data);

      } catch (error) {
        console.log('Erro na requisição', error);
      }
    }
    else{
      alert('Campo vazio!' || 'Código maior que 13 char')
    }
  }
   // Animação 
  const cAnimation = useSpring({
    opacity: 1, // Comece com opacidade 1 (totalmente visível)
    from: { opacity: 0 }, // Animação inicia com opacidade 0 (invisível)
    config: { duration: 1000 }, // Duração da animação em milissegundos
  });

  // Use o useEffect para chamar findPackage uma vez quando o componente for montado
  useEffect(() => {
    findPackage();
  }, [codigoPkt]); // O segundo argumento vazio [] garante que a função seja chamada apenas uma vez

  return (
    <div className={styles.container}>
      {children} 
    
      {<div className={styles.bold}>PACOTE: {res.codigo}</div> }

      {console.log(res.eventos)}

      { // essa condição é necessaria para verificar se o objeto nao esta vazio
        (res.eventos) && res.eventos.map((vetor, indice) =>(
          <>
          <animated.section style={cAnimation}>
            <div className={styles.caricon}>
              <img src="./images/delivery-truck.png" />
            </div>
            {<div className={styles.separador}></div>}
            <div key={indice} className={styles.result}>
              <p>Data: {vetor.data}</p>
              <p>Local: {vetor.local}</p>
              <p>Status: {vetor.status}</p>
            </div>
          </animated.section>
          </>
        ))

      }
    </div>
  );
}

export default Container;