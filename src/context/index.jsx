import { createContext, useState, useEffect, useCallback } from "react";

export const GlobalContext = createContext({
  totalExpense: 0,
  allTransactions: [],
  setTotalExpense: () => {},
  totalIncome: 0,
  setTotalIncome: () => {},
  formData: {
    type: "income",
    amount: 0,
    description: "",
  },
  setFormData: () => {},
  value: "expense",
  setValue: () => {},
  handleFormSubmit: () => {},
});

export default function GlobalState({ children }) {  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransactions, setAllTransactions] = useState([]);

  const calculateTotals = useCallback(() => {
    const totalInc = allTransactions
      .filter((item) => item.type === "income")
      .reduce((acc, item) => acc + parseFloat(item.amount), 0);

    const totalExp = allTransactions
      .filter((item) => item.type === "expense")
      .reduce((acc, item) => acc + parseFloat(item.amount), 0);

    setTotalIncome(totalInc);
    setTotalExpense(totalExp);
  }, [allTransactions, setTotalIncome, setTotalExpense]);

  useEffect(() => {
    calculateTotals();
  }, [calculateTotals]);

  const handleFormSubmit = useCallback((currentFormData) => {
    if (!currentFormData.description || !currentFormData.amount) return;

    setAllTransactions(prev => [
      ...prev,
      { ...currentFormData, id: Date.now() },
    ]);
  }, [setAllTransactions]);

  console.log(allTransactions);

  return (
    <GlobalContext.Provider
      value={{
        formData,
        setFormData,
        totalExpense,
        setTotalExpense,
        totalIncome,
        setTotalIncome,
        value,
        setValue,
        allTransactions,
        setAllTransactions,
        handleFormSubmit,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}