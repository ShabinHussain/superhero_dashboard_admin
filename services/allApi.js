import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

//adminregister
export const adminRegisterApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/adminregister`,reqbody,"")
}

//adminlogin
export const adminLoginApi = async(reqbody)=>{
    return await commonApi('POST',`${serverUrl}/adminlogin`,reqbody,"")
}

//all project
//query parameter = baseUrl?key=value
export const allComplaintsApi = async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/allcomplaints?search=${searchKey}`,"",reqHeader)  // search ennu parayana key il value
}


//delete complaint
export const deleteComplaintApi =async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete/${id}`,{},"")
}