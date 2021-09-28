// const db = {};

const addToDb = item =>{
    const db = getDb();
    if(item in db){

     db[item] =db[item]+1;

    }
    else{
        db[item] = 1;
    }
    console.log(db);
    saveToDb(db);
  }
  const removeFromDb = item =>{
    const db = getDb();
    delete db[item];
    saveToDb(db);
}
const saveToDb =  db =>{
    const dbJSON = JSON.stringify(db)
    localStorage.setItem('meals',dbJSON);
}
const getDb = () =>{
    let savedDb = localStorage.getItem('meals');
    // if(savedDb){
    //     savedDb = JSON.parse(savedDb);
    // }
    // else{
    //     savedDb = {};
    // }
    // return savedDb;
    // ternary operator
    return savedDb ? JSON.parse(savedDb) : {};
}
export {addToDb , removeFromDb,getDb};