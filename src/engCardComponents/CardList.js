import React, { useState } from "react";
import CardFlip from "./CardFlip";
import CardInput from "./CardInput";
import { Button } from '@material-ui/core'
import '../App.css'

export default function CardList() {
  const [kelimeler, setKelimeler] = useState([
    
    {id:1, eng:"bring", tr:"getirmek", example:"do not forget to bring my books"},
    {id:2, eng:"council", tr:"kurul,meclis", example:"the council meets twice a week"},
    {id:3, eng:"income", tr:"gelir", example:"my income is enough"},
  ]);
  
  const [islem, setIslem] = useState(false);

  const kelimeKarti = ()=>{
    setIslem(true)
  }
  const kelimeEkle = ()=>{
    setIslem(false)
  }
  const [sira, setSira] = useState(1);
  const artir = () => {
    setSira((prevState) => prevState + 1);
    
  };
  const azalt = () => {
    setSira((prevState) => prevState - 1);
    
  };
  return (
    <div>     
      <div className="btnKelimeGrup"  >
      <Button className="btn" onClick={kelimeKarti} variant="contained" color="secondary"  >
                Kelime Kartları
            </Button>
            <Button className="btn" onClick={kelimeEkle} variant="contained" color="secondary"  >
                Kelime Ekle
            </Button>
      </div>
      {islem ? kelimeler.map((kelime) => {
        if (kelime.id === sira) {
          return <CardFlip key={kelime.id} kelime={kelime} kelimeler={kelimeler} artir={artir} azalt={azalt} sira={sira} />
           
        }
      }) : <CardInput kelimeler={kelimeler} setKelimeler={setKelimeler} /> }


      
    </div>
  );
}
