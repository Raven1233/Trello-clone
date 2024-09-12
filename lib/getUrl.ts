import { storage } from "@/appwrite";

const getUrl = async (image: Image) => {
    const url = storage.getFileView(image.bucketId, image.fileID);

    return url;
}

export default getUrl;