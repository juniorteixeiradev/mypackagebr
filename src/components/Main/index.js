import { useState } from "react";
import styles from "./Main.module.css";
import { LuPackageSearch } from 'react-icons/lu';
import Container from "../Container";
function Main ({children}){
    
    const [input, setInput] = useState('');
    const [containerVisible, setContainerVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    function clicou(){
        if(input === ''){
            alert('Campo vazio');
        }
        else {
            setInput(input);
            setLoading(true);
            
            setTimeout(()=> {
                setContainerVisible(true);
                setLoading(false);
            },3000);
        }
    }
    return (
        <>
        {<span className={styles.logo}>MypackageBR</span>}
            <div className={styles.main}>
                
                <div className={styles.form}>
                    <label>Digite ou cole o código do pacote:</label>
                    <div className={styles.inputcontainer}>
                    <input maxLength="13" type="text" placeholder="LN567808BR" value={input} onChange={(e) => setInput(e.target.value)}>
                    </input>
                    <LuPackageSearch className={styles.searchicon} onClick={clicou} />
                    </div>


                
                </div>

            </div>
            
            { //Usei o operador ternario aqui porque tem duas opções que podem ser seguidas, 
            // ou renderiza o loading ou o container 
            loading ? (
                <span className={styles.loader}></span>
             ) : (containerVisible && <Container codigoPkt={input} containerVisible={containerVisible} />) 
            }
       {children}
        </>
        
    );
}

export default Main;