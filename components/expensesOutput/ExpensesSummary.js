import React from 'react';
import { Text, View } from 'react-native';

function ExpensesSummary({ expenses, periodName }) {
  return (
    <View>
      <Text>{periodName}</Text>
      <Text>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

export default ExpensesSummary;
