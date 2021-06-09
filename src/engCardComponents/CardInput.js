import React, { useState } from 'react'
import { TextField, Button } from '@material-ui/core'


export default function CardInput({kelimeler, setKelimeler}) {
    const [input, setInput] = useState({id:null, tr:"", eng:"", example:""})

    const changeTurkishWord = (e)=>{
        setInput({...input,tr:e.target.value.toLocaleLowerCase()})
    }
    const changeEnglishWord = (e)=>{
        setInput({...input,eng:e.target.value.toLocaleLowerCase()})
    }
    const changeEnglishExample = (e)=>{
        setInput({...input, id:kelimeler.length + 1, example:e.target.value.toLocaleLowerCase()})
        
    }
    const submitHandler = (e)=>{
        
        setKelimeler([...kelimeler, input])
        console.log(input)
        setInput({id:null, tr:"", eng:"", example:""})
        
        e.preventDefault()
    }
    return (
        <div className="textfieldGrup">
            <h1>Kelime Ekle</h1>
            <TextField value={input.eng} onChange={changeEnglishWord} style={{width:500, marginTop:15}} id="outlined-basic" label="English" variant="outlined" />
            <TextField value={input.tr} onChange={changeTurkishWord} style={{width:500, marginTop:15}} id="outlined-basic" label="Turkish" variant="outlined" />
            <TextField value={input.example} onChange={changeEnglishExample} style={{width:500, marginTop:15}} id="outlined-basic" label="English Example" variant="outlined" />
            <Button  onClick={(e)=>submitHandler(e)} variant="contained" color="primary" style={{marginTop:15}} >
                Ekle
            </Button>
         
        </div>
    )
}
