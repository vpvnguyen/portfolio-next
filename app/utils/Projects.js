import axios from 'axios';

// define actions to mongodb
export const Projects = {
    // get all projects
    getAll: () => axios.get('http://localhost:3001/api/projects'),
    // upload project
    upload: () => axios.post('http://localhost:3001/api/projects/create'),
    // update a project
    update: (id, title, desc, link) => {

        const updateObject = {
            title: 'potter',
            desc: 'new desc',
            link: 'newlinkurl.com',
        };

        const allKeys = Object.keys(updateObject);

        console.log(allKeys);

        return axios.put(`http://localhost:3001/api/projects/update/${id}`);
    },
    // delete project
    delete: id => axios.delete(`http://localhost:3001/api/projects/delete/${id}`),
};
