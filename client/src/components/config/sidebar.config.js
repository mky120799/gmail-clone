
import { Photo, SendOutlined, StarOutlined, InsertDriveFileOutlined, MailOutlined, DeleteOutlined } from "@mui/icons-material"



export const SIDEBAR_DATA =[
    {
        name:'inbox',
        title:'Inbox',
        icon: Photo

    },
    {
        name: 'starred',
        title: 'Starred',
        icon: StarOutlined
    }
    ,
     {
        name: 'sent',
        title: 'Sent',
        icon: SendOutlined,
    },
    {
        name: 'draft',
        title: 'Draft',
        icon: InsertDriveFileOutlined,
    },
    {
        name: 'bin',
        title: 'Bin',
        icon: DeleteOutlined,
    },
    {
        name: 'allmail',
        title: 'ALL Mail',
        icon: MailOutlined,
    }

];

