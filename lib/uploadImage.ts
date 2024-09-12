import {ID, storage} from "@/appwrite";

const uploadImage = async (file: File) => {

   if(!file) return;
   const fileUploaded = await storage.createFile(
        "64f0c9ff3794348bae25",
        ID.unique(),
        file
   );

   return fileUploaded;
};

export default uploadImage;

