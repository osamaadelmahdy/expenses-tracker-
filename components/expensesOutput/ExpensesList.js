import React from 'react';
import { FlatList, Text } from 'react-native';
import ExpenseItem from './ExpensesItem';
const Item = ({ item }) => {
  return (
    <ExpenseItem
      id={item.id}
      description={item.description}
      amount={item.amount}
      date={item.date}
    />
  );
};
function ExpensesList({ expenses }) {
  return (
    <FlatList data={expenses} renderItem={Item} keyExtractor={(i) => i.id} />
  );
}

export default ExpensesList;
