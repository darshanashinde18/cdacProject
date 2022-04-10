import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/employees');
}

const create = data => {
    return httpClient.post("/employees", data);
}

const get = id => {
    return httpClient.get(`/employees/${id}`);
}

const update = data => {
    return httpClient.put('/employees', data);
}

const remove = id => {
    return httpClient.delete(`/employees/${id}`);
}

const getAllPerformance = () => {
    return httpClient.get('/performances');
}

const createPerformance = data => {
    return httpClient.post("/performances", data);
}

const getPerformance = id => {
    return httpClient.get(`/performances/${id}`);
}

const updatePerformance = data => {
    return httpClient.put('/performances', data);
}

const removePerformance = id => {
    return httpClient.delete(`/performances/${id}`);
}

const getAllLeave = () => {
    return httpClient.get('/leaves');
}

const createLeave = data => {
    return httpClient.post("/leaves", data);
}

const getLeave = id => {
    return httpClient.get(`/leaves/${id}`);
}

const updateLeave = data => {
    return httpClient.put('/leaves', data);
}

const removeLeave = id => {
    return httpClient.delete(`/leaves/${id}`);
}

export default { getAll, create, get, update, remove, getAllPerformance, createPerformance, getPerformance, updatePerformance, removePerformance, getAllLeave, createLeave, getLeave, updateLeave,removeLeave };