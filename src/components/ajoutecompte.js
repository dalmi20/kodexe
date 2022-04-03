import React, { useState } from 'react';
import './ajoutecompte.css'
export default function Form() {
   const [name,setName] =  useState('');
   const [prenom,setPrenom] =  useState('');
   const [email,setEmail] =  useState('');
   const [phone,setPhone] =  useState('');
   const [gender,setGender] =  useState('');
   const [degree,setDegree] =  useState('');
   const [code,setCode] =  useState('');
   const [pw,setPw] =  useState('');
   const [bac,setBac] =  useState('');
   const [birth,setBirth] =  useState('');
   const [inscrip,setInscrip] =  useState(''); 
   const [emploi,setEmploi] =  useState('');
   const [etudient,setEtudient] =  useState('');
   const [enseignant,setEnseignant] =  useState('');
   function check(x){
      if (x != ""){
         return "true"
      }
   }
 
  return (
            <div className="col-1">
                <form id='form'>
                <div className='checkbox'>
                <input type="checkbox" name="type" id='etu' value="etudient" required onChange={(e) =>setEtudient(e.target.value)} disabled={check(enseignant)}/>
                <label id='lab1'>Etudient</label>
                <input type="checkbox" name="type" id='ensi' value="enseignant" required onChange={(e) =>setEnseignant(e.target.value)} disabled={check(etudient)}/>
                <label id='lab2'>Enseignant</label>
               </div>
                    <input type="text"  placeholder='Nom' id='nom' required onChange={(e) =>setName(e.target.value)}/>
                    <input type="text"  placeholder='Prenom' id='prenom' required onChange={(e) =>setPrenom(e.target.value)}/>
                    <input type="email"  placeholder='Email' id='email' required onChange={(e) =>setEmail(e.target.value)}/>
                    <input type="date"  placeholder='DateNaissance' id='dateN' required onChange={(e) =>setBirth(e.target.value)}/>
                    <input type="text"  placeholder='AnnéeBac'  id='bac' required onChange={(e) =>setBac(e.target.value)} disabled={!check(etudient)}/>
                    <input type="text"  placeholder='CodePostal' id='codeP' required onChange={(e) =>setCode(e.target.value)}/>
                    <input type="text"  placeholder='AnnéeInscription' id='inscrp' required onChange={(e) =>setInscrip(e.target.value)} disabled={!check(etudient)}/>  
                    <input type="text"  placeholder='AnnéeEmploi' id='emploi' required onChange={(e) =>setEmploi(e.target.value)} disabled={!check(enseignant)}/>  
                    <div className='custom-select' >
                     <select required onChange={(e) =>setDegree(e.target.value)} disabled={!check(enseignant)}>
                        <option >Maitre Assistant B</option>
                        <option>Maitre Assistant A</option>
                        <option>Profrsseur</option>
                     </select>
                    </div>
                    <div className='custom-select2' >
                     <select required onChange={(e) =>setGender(e.target.value)}>
                        <option >Male</option>
                        <option >Female</option>
                     </select>
                    </div>
                    <input type="tel" placeholder='mobile number' id='phone' required onChange={(e) =>setPhone(e.target.value)}/>
                    <input type="password" placeholder='password' id='pw' required onChange={(e) =>setPw(e.target.value)}/>
                    <button className='btn'>Ajouter</button>
                </form>
                
            </div>
  )
}

    