import React, { useState } from 'react'

export default function Formul() {
    const radios = ['Salarie', 'Chomage', 'Etudiant'];
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [email,setemail] = useState('');
    const [choxe, setChoxe] = useState('Salarie');
    const [matricul, setMatricul] = useState();
    const [salaire, setsalaire] = useState();
    const [solidaryte,setsolidaryte] = useState();
    const [Massar,setMassar] = useState();
    const [Prix,setPrix] = useState();
    const [valide,setvalide] = useState('valide');
    const changeselect = (e) => {
        setChoxe(e.target.value);
    }
    const Test =()=>{
        if(matricul.length>5 && salaire.length>0){
            alert ('formulaire correct')
        }
        else(matricul.length<5)(
            alert ('formulaire incorrect')
        )
    }
    return (
        <>
            <form>
            <p>select leur option :</p>
            {radios.map((radio, index) => (
                <div key={index}>
                    <input type='radio' name='choxe' value={radio} checked={radio=== choxe} onChange={changeselect} /> {radio}
                </div>
            ))}
            {choxe==='Salarie'?((<>
                N_matricul :<input type='number' value={matricul} onChange={(e)=>setMatricul(e.target.value)} style={'border':(matricul?)}/></br></br>
                Salarie <input type='number' value={salaire} onChange={(e)=>setsalaire(e.target.value)}/><br></br>
            </>)):''}
            {choxe==='Chomage'?((<>
                code_solidaryte :<input type='number' value={solidaryte} onChange={(e)=>setsolidaryte(e.target.value)}/><br></br>
            </>)):''}
            {choxe==='Etudiant'?((<>
                Code Massar :<input type='number' value={Massar} onChange={(e)=>setMassar(e.target.value)}/><br></br>
                Prix <input type='number' value={Prix} onChange={(e)=>setPrix(e.target.value)}/><br></br>
            </>)):''}
            <br></br>
              Nom :<input type='text' value={nom} name='nom' onChange={(e)=>setNom(e.target.value)} />  <br></br>
              Prenom :<input type='text' value={prenom} name='prenom' onChange={(e)=>setPrenom(e.target.value)} />  <br></br>
              Elmail :<input type='text' value={email} name='email' onChange={(e)=>setemail(e.target.value)} />  <br></br>
              <br></br>
              <br></br>
              <br></br>

              <input type='button' value={valide} onChange={(e)=>setvalide(e.target.value)}  onClick={Test}/>
        </form>
        </>
    )
}

