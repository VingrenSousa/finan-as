
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
  doc,
  updateDoc,
  deleteDoc,
  
}  from "@react-native-firebase/firestore";
import { propsDateCard } from "../../components/TransactionCard";
import { useAuth } from "../../hooks/UseAuthContext";
import { getAuth } from "@react-native-firebase/auth";


type CategoryObeject = {
    id: string;
    name: string;
    amount: string;
    category: string;
    date: Date;
    type: string;
}

export interface dataListProps extends propsDateCard{
    id:string,
    name?:string
    
}
type  newTransaction= {
 id_user: string | null;
 name: string;
 amount: string;
 category: string;
 date: Date;
 type: string;
}




export class TransactionService {
  private db = getFirestore();
  private collectionRef = collection(this.db, "transactions");
  private auth = getAuth();

  async create(data: CategoryObeject) {
    const user= this.auth.currentUser



  if (!user) {
    throw new Error("Usuário não autenticado");
  }
    const newTransaction:newTransaction = {
        id_user:user.uid,
        name: data.name,
        amount: data.amount,
        category: data.category,
        date:data.date,
        type: data.type
    };
    const docRef = await addDoc(this.collectionRef, newTransaction);


    return {
       id: docRef.id,
    };
  }

  async getAll():Promise<dataListProps[]>{
  const user= this.auth.currentUser

  if (!user) {
    throw new Error("Usuário não autenticado");
  }

   const isQuery = query(
    this.collectionRef,
    where("id_user","==",user?.uid),
    orderBy("date", "desc")) 
   const snapshot = await getDocs(isQuery);
    return snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        amount: doc.data().amount,
        type: doc.data().type,
        category: doc.data().category,
        date: doc.data().date.toDate()
    }));
  }
 async update(id: string, data: Partial<CategoryObeject>){
  const docRef =doc(this.db, "transactions", id);
  try {
    await updateDoc(docRef, data);
  } catch (error) {
    console.error(error)
  }
  
  }
  async delete(id:string){
    try {
      const docRef = doc(this.db, "transactions", id);
      await deleteDoc(docRef);
      return true
    } catch (error) {
      console.error("erro au deleta ")
       return false
    }
     
  }
}