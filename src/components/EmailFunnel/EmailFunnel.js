import { Button, Card, Checkbox, Container, TextField } from '@mui/material';
import React, { useState } from 'react'
import * as Yup from 'yup';

import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';
import DoneAnimation from '../DoneAnimation/DoneAnimation';
import { Link } from 'react-router-dom';
import InstagramLink from '../InstagramLink/InstagramLink';
import EmailLink from '../EmailLink/EmailLink';


const formSchema = Yup.object({
  Name: Yup.string().required("Please enter your name."),
  Email: Yup.string().email("Please enter a valid email.").required("Please enter your email."),
  Memos: Yup.string()
});

export default function EmailFunnel({title, subtitle}) {

  const [sumbitStatus, setSumbitStatus] = useState(null);
  const [memoEmailConsent, setMemoEmailConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
  });

  const retry = () => {
    setSumbitStatus(null)
  }

  const handleToggle = () => {
    if (!isLoading) setMemoEmailConsent(!memoEmailConsent);
  }

  const handleSubmit = async (e) => {
    setIsLoading(true);
    setErrorMessage(null);
    e.preventDefault();
    const rawData = {
      "Memos": memoEmailConsent ? "Yes" : "No",
      "Name": formData.Name,
      "Email": formData.Email,
    }



    try {
      await formSchema.validate(rawData);

    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.toString().replace("ValidationError: ",""));
      return
    }

    
    try {
      const data = new FormData();
      data.append("Memos", rawData.Memos);
      data.append("Name", rawData.Name);
      data.append("Email", rawData.Email);

      const response = await fetch("https://script.google.com/macros/s/AKfycbwtc_Xsa1BpAcjMa-RCuOsBXj2AOzlBPNNK3j3LvN4sGXI3ot-69JBx-QPpH6p55jwwPA/exec", {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setSumbitStatus(true);
      } else {
        setSumbitStatus(false);
      }
    } catch (error) {
      setSumbitStatus(false);
    }
    setIsLoading(false);

  };

  const handleFormChange = (event) => {
    const { name, value} = event.target;
    setFormData( (prevData) => ({
      ...prevData,
      [name] : value,
    }));
  };

  return (
    <Container disableGutters style={{flex:1,display:'flex',justifyContent:'center'}}>
      <Card style={{fontSize: 16,height:400,width:800, borderRadius:20,flexDirection:'column',display:'flex',padding:50,margin:50, alignItems:'center'}}>
        { sumbitStatus===null ? (
          <>
            <span style={{fontSize: 48,fontWeight: 500, marginTop:10, fontStyle:'italic'}}>{title}</span>
            <span style={{textAlign:'center', marginTop:30,marginBottom:15}}>{subtitle}</span>
            <form
              style={{width: '100%'}}
              onSubmit={handleSubmit}
            >
              <Container disableGutters style={{justifyContent:'space-between',display:'flex',flexDirection:'column',paddingLeft:25,paddingRight:25,marginTop:10}}>
                  {errorMessage && <span style={{marginBottom:10,fontSize:12, color:'red',textAlign:'end'}}>{errorMessage}</span>}
                  <TextField disabled={isLoading} size='small' name="Name" value={formData.name} onChange={handleFormChange} style={{flex:1, display:'flex', margin:0}} label="Full Name" variant="outlined"/>
                  <TextField disabled={isLoading} size='small' name="Email" value={formData.email} onChange={handleFormChange} style={{flex:1, display:'flex',margin:0,marginTop:15}} label="Email" variant="outlined"/>
                  <Container onClick={handleToggle} disableGutters style={{display:'flex', alignItems:'center',justifyContent:'center',marginBottom:20,marginTop:20}}>
                    <Checkbox disabled={isLoading} style={{display:'flex'}} size='medium' checked={memoEmailConsent}/>
                    <p style={{fontSize:14, fontStyle:'italic'}}>I would like email updates when new memos are posted.</p>
                  </Container>
                  <Button disabled={isLoading} type="submit" variant='contained' size='large' style={{backgroundColor:'black',borderRadius:15, marginLeft:25,marginRight:25,height:75}}>
                    { isLoading ? <LoadingAnimation/> : <p style={{fontWeight:'bold',color:'white'}}>Submit</p>}
                  </Button>
              </Container>
            </form>
          </>
         ) : (
          sumbitStatus ? (
            <Container disableGutters style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <DoneAnimation/>
              <span style={{fontSize: 48, fontWeight: 500,marginTop:15,marginBottom:25}}>Success!</span>
              <span style={{textAlign:'center', margin:25}}>Thank you for joining the waitlist.</span>
              <div style={{display:'flex',flexDirection:'row'}}>
                <InstagramLink/>
                <div style={{margin:10}}/>
                <EmailLink/>
              </div>
            </Container>
          ) : (
            <Container disableGutters style={{display:'flex',flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
              <p style={{fontSize: 48, fontWeight: 500,marginBottom:25}}>Oh No!</p>
              <p style={{textAlign:'center', margin:15}}>An unexpected error occurred and we were unable to record your entry.</p>
              <p style={{textAlign:'center', marginTop:15}}>Please try again or reachout via email or instagram.</p>
              <Button style={{margin:40}} variant='contained' onClick={retry} size='large'>
                <span style={{fontWeight: 700, fontSize:16}}>Try Again</span>
              </Button>
              <div style={{display:'flex',flexDirection:'row'}}>
                <InstagramLink/>
                <div style={{margin:10}}/>
                <EmailLink/>
              </div>
            </Container>
          )
        )}
      </Card>
    </Container>
  )
}
