import React, { useState } from 'react'

export default function Formul() {
    // const [affiche,setAffiche]=useState('');
    const radios = ['Salarie', 'Chomage', 'Etudiant'];
    const [choxe, setChoxe] = useState('Salarie');
    const [nom,setNom] = useState('');
    const [prenom,setPrenom] = useState('');
    const [email,setemail] = useState('');  
    const [matricul, setMatricul] = useState(0);
    const [salaire, setsalaire] = useState(0);
    const [solidaryte,setsolidaryte] = useState(0);
    const [Massar,setMassar] = useState(0);
    const [Prix,setPrix] = useState(0);
    const [valide,setvalide] = useState('valide');

    const changeselect = (e) => {
        setChoxe(e.target.value);
    }
    // const [text_martricul,settext_martricul]=useState({'border':'1px solid black'});
    // const [text_sailaire,settext_sailaire]=useState({'border':'1px solid black'});
    // const [text_solidaryte,settext_solidaryte]=useState({'border':'1px solid black'});
    // const [text_massar,settext_massar]=useState({'border':'1px solid black'});
    // const [text_prix,settext_prix]=useState({'border':'1px solid black'});
    // const [text_nom,settext_nom]=useState({'border':'1px solid black'});
    // const [text_prenom,settext_prenom]=useState({'border':'1px solid black'});
    // const [text_email,settext_email]=useState({'border':'1px solid black'});

    // const Test =()=>{
    //     if(choxe==='Salarie'){
    //     matricul.length >4?settext_martricul({'border': "1px solid green"}):settext_martricul({'border': "1px solid red"});
    //     salaire.length >0?settext_sailaire({'border': "1px solid green"}):settext_sailaire({'border': "1px solid red"});}
    //     if(choxe==='Chomage'){
    //     solidaryte.length >5?settext_solidaryte({'border': "1px solid green"}):settext_solidaryte({'border': "1px solid red"});}
    //     if(choxe==='Etudiant'){
    //     Massar.length >5?settext_massar({'border': "1px solid green"}):settext_massar({'border': "1px solid red"});
    //     Prix.length >0?settext_prix({'border': "1px solid green"}):settext_prix({'border': "1px solid red"});}
    //     nom===''?settext_nom({'border': "1px solid red"}):settext_nom({'border': "1px solid green"});
    //     prenom===''?settext_prenom({'border': "1px solid red"}):settext_prenom({'border': "1px solid green"});
    //     email===''?settext_email({'border': "1px solid red"}):settext_email({'border': "1px solid green"});
    // }
    return (
        <form>
            <p>select leur option :</p>
            {radios.map((radio, index) => (
                <div key={index}>
                    <input type='radio' name='choxe' value={radio} checked={radio=== choxe} onChange={changeselect} /> {radio}
                </div>
            ))}
            {choxe==='Salarie'?(<>
                N_matricul :<input type='number' value={matricul} onChange={(e)=>setMatricul(e.target.value)} style={text_martricul}/><br></br>
                Salarie <input type='number' value={salaire} onChange={(e)=>setsalaire(e.target.value)} style={text_sailaire}/><br></br>
            </>):''}

            {choxe==='Chomage'?((<>
                code_solidaryte :<input type='number' value={solidaryte} onChange={(e)=>setsolidaryte(e.target.value)} style={text_solidaryte}/><br></br>
            </>)):''}

            {choxe==='Etudiant'?((<>
                Code Massar :<input type='number' value={Massar} onChange={(e)=>setMassar(e.target.value)} style={text_massar}/><br></br>
                Prix <input type='number' value={Prix} onChange={(e)=>setPrix(e.target.value)}  style={text_prix}/><br></br>
            </>)):''}
            <br></br>
              Nom :<input type='text' value={nom} name='nom' onChange={(e)=>setNom(e.target.value)} style={text_nom}/>  <br></br>
              Prenom :<input type='text' value={prenom} name='prenom' onChange={(e)=>setPrenom(e.target.value)} style={text_prenom}/>  <br></br>
              Elmail :<input type='text' value={email} name='email' onChange={(e)=>setemail(e.target.value)} style={text_email}/>  <br></br>
              <br></br>
              <br></br>
              <br></br>

              <input type='button' value={valide} onChange={(e)=>setvalide(e.target.value)}  onClick={Test}/>
        </form>
    )
}
