import axios from "axios";
class DocumentIdentityService {

    create(documentIdentity) {
        return axios.post("/api/documentIdentity/save", documentIdentity);
    }
    all() {
        return axios.get("/api/documentIdentity/all");
    }
    update(document, id) {
        return axios.post(`/api/documentIdentity/update`, document);
    }
}
export default new DocumentIdentityService();