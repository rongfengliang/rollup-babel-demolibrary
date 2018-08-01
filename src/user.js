import shortid from "shortid"
import jq from "jquery"
const user ={
    name:"dalong",
    age:343
}
export default {
    id:shortid.generate(),
    version:"appv1",
    ...user,
    $:jq
}