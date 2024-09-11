import { Account, Client, ID, Avatars, Databases} from 'react-native-appwrite';

export const appWriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.evolveInc.evolve',
    projectId: '666b73ef003a9a09840e',
    databaseId: '666b7a450002bf7e02ea',
    userCollectionId: '666b7b11000d185dcfd9',
    videoCollectionId: '666b7b57003674d3439c',
    storageId: '666b7e470031e8bb8335'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appWriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appWriteConfig.projectId) // Your project ID
    .setPlatform(appWriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client)
const avatars = new Avatars(client)
const databased = new Databases(client)

export const createUser = async (email, password,) => {
    try {
        const newAccount = await account.create(
            ID.unique(), 
            email, 
            password,
            username
        )

        if(!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username)

        await signIn(email, password)

        const newUser = await databases.createDocument(
            appWriteConfig.databaseId,
            appWriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl
            }
        )

    } catch (error){
        console.log(error)
        throw new Error(error)
    }


}
//Sign in
export const signIn = async (email, password) => {
    try{
        const session = await account.createEmailPasswordSession(email, password)
        return session
    }
    catch(error){
        throw new Error(error)
    }
}

export const getCurrentUser = async () => {
    try{
       const currentAccount = await account.get();
       
       if(!currentUser) throw Error

        const currentUser = await databases.listDocuments
        appWriteConfig.userCollectionId

        [Query.equal('accountId', currentAccount.$id)]

        if(!currentUser) throw Error

        return currentUser.documents[0]
    } catch (error) {
        console.log(error)
    }
}

