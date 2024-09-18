import axios from "axios"



{/*export const commonApi = async(httpRequest, url, reqBody, reqHeader)=>{
    const reqConfig ={
        method:httpRequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{"Content-Type":"application/json"}
    }


    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((error)=>{
        return error
    })
}*/}



export const commonApi = async (httpRequest, url, reqBody, reqHeader) => {
    try {
        const reqConfig = {
            method: httpRequest,
            url,
            data: reqBody,
            headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
        };
        const result = await axios(reqConfig);
        return result;
    } catch (error) {
        console.error("API request failed:", error.response ? error.response.data : error.message);
        return error.response ? error.response : error;
    }
};
