import axios from "axios";


const userdata = {

   superadmin: () => axios.get('http://localhost:8000/super-admin')



}


export default userdata;
