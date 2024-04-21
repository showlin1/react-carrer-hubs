const getStoredJobApplication =() =>{
    const getStoredJobApplication=localStorage.getItem('job-application');
    if(getStoredJobApplication){
        return JSON.parse(getStoredJobApplication);
    }
    return [];
}
const saveJobApplication = id =>{
    const storedJobApplication=getStoredJobApplication();
    const exists = storedJobApplication.find(jobId =>jobId === id);
    if(!exists){
        storedJobApplication.push(id);
        localStorage.setItem('job-application',JSON.stringify(storedJobApplication))
    }
}
export {getStoredJobApplication, saveJobApplication}