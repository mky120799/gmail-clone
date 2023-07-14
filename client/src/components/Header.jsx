
import{AppBar,Toolbar, styled, InputBase, Box} from '@mui/material';
import{ Menu as MenuIcon,Search, Tune, HelpOutlineOutlined, SettingsOutlined, AppsOutlined, AccountCircleOutlined} from '@mui/icons-material';
import { gmaillogo } from '../constants/constants';

const StyledAppBar = styled(AppBar)({
    background: '#F5F5F6',
    boxShadow:'none'
})

const SearchWrapper = styled(Box)({
    background: '#EAF1FB',
    marginLeft:80 ,
    borderRadius: 8,
    minWidth:790,
    maxWidth:820,
    height:'3.4rem',
    display: 'flex',
    alignItems:'center',
    justifyContent: 'space-between',
    padding: '0 15px',
    '& > div': {
        width: '100%',
    }

    

});

const OptionsWrapper = styled(Box)({

   width: '100%',
   display:'flex',
   justifyContent:'end',
   '& > svg':{
    marginLeft:20,
   }

});



const Header= () =>{
    return(
        <StyledAppBar position="static">
            <Toolbar>
                 <MenuIcon color="action" />
                 <img src={gmaillogo} alt="logo" style={{Height: 125 ,width:125, marginLeft: 20}} />
                 <SearchWrapper>
                   
                    <Search color="action" style={{marginRight: 10}}/>
                    <InputBase placeholder='Search in mail'/>
                    <Tune color="action"/>
                    
                    </SearchWrapper>
                    <OptionsWrapper>
                        <HelpOutlineOutlined color="action" />
                        <SettingsOutlined color="action" />
                        <AppsOutlined color="action" />
                        <AccountCircleOutlined color="action" />
                    </OptionsWrapper>
            </Toolbar>
        </StyledAppBar>
        );
}

export default Header;