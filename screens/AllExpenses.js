import React, { useContext } from 'react';
import ExpensesOutput from '../components/expensesOutput/ExpensesOutput';
import { ExpensesContext } from '../store/ExpensesContext';

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
  );
}

export default AllExpenses;
