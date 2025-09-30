export interface TransactionType {
  date: string;
  description: string;
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  method: string;
}
