import axios from 'axios'

export const GetData = async(url)=>{
  try{
    const response = await axios.get(url)
    return response.data
  }catch (err) {
    throw err;
  }
}