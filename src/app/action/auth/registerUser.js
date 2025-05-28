"use server";
import dbConnect, { collectionNameObj } from '@/lib/dbConnect';
import bcrypt from 'bcrypt';

const registerUser = async(payload) => {
    console.log(payload);
    const {password, email, name} = payload
    const userCollections = dbConnect(collectionNameObj.userCollections);

     const user = await userCollections.findOne({email: payload.email});

     if(!name || !email || !password){
        return null;
     }
     if(!user){
        const hashPassword = await bcrypt.hash(password,10);
        payload.password = hashPassword
        const result = await userCollections.insertOne(payload);
       result.insertedId = result.insertedId.toString();
        return result
    }
    

    return null
};

export default registerUser;