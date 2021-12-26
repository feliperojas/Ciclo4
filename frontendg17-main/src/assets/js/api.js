import axios from "axios"


export const consumirApiUser = async(data)=>{

    const endpoint="http://localhost:8081/api/user/new"

    try{
        const resp = await axios.post(endpoint,data)
        return resp
    }
    catch(e){
        console.log(e)
    }


}

export const consumirApiUserGet = async()=>{

    const endpoint="http://localhost:8081/api/user/all"

    try{
        const resp = await axios.get(endpoint)
        return resp
    }
    catch(e){
        console.log(e)
    }


}

