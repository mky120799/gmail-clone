import { useState } from "react";
import { Dialog,Box ,Typography, styled, InputBase, TextField, Button} from "@mui/material";
import { Close, DeleteOutline } from "@mui/icons-material";
import SideBarContent from "./SideBarContent";
import useApi from "../hooks/useApi";

const dialogStyle = {
    height:'90%',
    width:'80%',
    maxHeight: '100%',
    maxWidth: '100%',
    boxShadow:'none',
    borderRadius: '10px 10px 0 0'
}

const Header = styled(Box)({
    display:'flex',
    justifyContent:'space-between',
    padding:'10px 15px',
    background:'#f2f6fc',
    '& > p' :{
        fontSize:15,
        fontWeight: 500,
    }

})

const RecipientsWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  padding:'0 15px',
  '& > div':{
     fontSize:15,
     borderBottom:'1px solid #F5F5F5',
     marginTop: 5,
  }

})

const Footer = styled(Box)({
     display:'flex',
     justifyContent:"space-between",
     padding:'10px 15px'
})

const SendButton = styled(Button)({
    background:'#0B57d0',
    color:'#fff',
    fontWeight:500,
    textTransform:'none',
    borderRadius: 18,
    width:100,

      
})



const ComposeMail= ({openDialog,setOpenDialog}) => {
    const [data,setData] = useState({});
    const sentEmailService=useApi();
     const config={
        
            Host : "smtp.elasticemail.com",
            Username : process.env.REACT_APP_USERNAME,
            Password : process.env.REACT_APP_PASSWORD,
            port:2525,
       
     }



    const closeComposeMail =(e)=>{
        e.preventDefault();
        setOpenDialog(false);

    }
     
    const sendMail =(e)=> {
             e.preventDefault();
            if(window.Email){
            window.Email.send({
                ...config,
                To : data.to,
                From : "oky120799@gmail.com",
                Subject : data.subject,
                Body : data.body
            }).then(
            message => alert(message)
            );
        }

        
        setOpenDialog(false);
    }
    const onValueChange= (e)=>{
        setData({...data, [e.target.name]: e.target.value})
            console.log(data);
    }
    return (
      <Dialog
       open={openDialog}
       PaperProps={{sx: dialogStyle}}
      >
      <Header>
         <Typography> New Message </Typography>
         <Close fontSize="small" onClick={(e)=>closeComposeMail(e)}/>

      </Header>
      <RecipientsWrapper>
          <InputBase placeholder="Receipients" name="to" onChange={(e)=> onValueChange(e)} />
          <InputBase placeholder="Subject" name="subject" onChange={(e)=> onValueChange(e)} />
      </RecipientsWrapper>
      <TextField
         multiline
         rows={20}
         sx={{'& .MuiOutlinedInput-notchedOutline':{border:'none' }}}
         onChange={(e)=> onValueChange(e)}
         name="body"
      />
      
          <Footer>
              <SendButton onClick={(e)=> sendMail(e)}>Send</SendButton>
              <DeleteOutline onClick={()=> setOpenDialog(false)}/>
          </Footer>
      </Dialog>
    )
}
export default ComposeMail;