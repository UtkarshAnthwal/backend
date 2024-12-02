import mongoose from 'mongoose';

const url = 'mongodb://localhost:27017';
const database_name = 'amu_commerce';
// const client = mongoose.connect(`${url}/${database_name}`);

const connectDatabase = async() => {
    try {
        await mongoose.connect(`${url}/${database_name}`);
        // let result = await client;
        // console.log(result);
        console.log(`Connection........${url}/${database_name}`);
    } catch(error) {
        console.log('Error is Connection', error);
    }
};
export default connectDatabase;