
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  limit,
  orderBy,
} from "@react-native-firebase/firestore";
import { propsDateCard } from "../../components/TransactionCard";

interface TransactionData {
  name: string;
  amount: number;
}

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


export class TransactionService {
  private db = getFirestore();
  private collectionRef = collection(this.db, "transactions");

  async create(data: CategoryObeject) {
    const newTransaction = {
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
   
   const isQuery = query(
    this.collectionRef,
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


}