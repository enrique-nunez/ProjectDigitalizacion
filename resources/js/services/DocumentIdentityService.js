import axios from "axios";
class DocumentIdentityService {

    create(documentIdentity) {
        return axios.post("/api/documentIdentity/save", documentIdentity);
    }
}
export default new DocumentIdentityService();