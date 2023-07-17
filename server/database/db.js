import maongoose from 'mongoose';

const Connection= ()=>{
    const DB_URI=`mongodb+srv://user:Mithilesh123@user.4dp4srr.mongodb.net/?retryWrites=true&w=majority`;
    try{ 

         maongoose.Connection(DB_URI,{useNewUrlParser:true});
         console.log('Database connected successfully');
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}

export default Connection;