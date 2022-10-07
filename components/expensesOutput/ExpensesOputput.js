import React from 'react';
import { Text, View } from 'react-native';
import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

function ExpensesOputput() {
  return (
    <View>
      <ExpensesSummary />
      <ExpensesList />
    </View>
  );
}

export default ExpensesOputput;
