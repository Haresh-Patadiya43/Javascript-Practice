let setdata = document.getElementById('set')
let getdata = document.getElementById('get')
let removedata = document.getElementById('remove')

// data
const studentbioData = {
    name : "Patadiya haresh",
    age : 20,
    Course : "BCA",
    Gender : "Male"
};

// set data
const addData = () => {
    localStorage.setItem("objectData",JSON.stringify(studentbioData))
}
setdata.addEventListener('click', () => {
    addData();
});


//get data
const retrivedata = () =>{
    const retrive = JSON.parse(
        localStorage.getItem("objectData")
        );
    console.log(retrive);
}
getdata.addEventListener('click',() =>{
    retrivedata();
});


//remove data
const deletedata = () =>{
    const Delete = localStorage.removeItem("objectData");
    console.log("data removed",Delete);
}
removedata.addEventListener('click', () =>{
    deletedata();
});