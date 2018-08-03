import shortid from "shortid"
import jq from "jquery"
import stringHash from "string-hash"
import  uuidv1 from 'uuid/v1'
const user ={
    name:"dalong",
    age:343
}
export default {
    id:shortid.generate(),
    version:"appv1",
    ...user,
    $:jq,
    uuid: uuidv1,
    s: (info)=>{
        return stringHash(info).toString(36)
    }
}