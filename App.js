// App.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text, TouchableOpacity } from 'react-native';
import Header from './Header';
import PlanForm from './PlanForm';

const App = () => {
  const [plans, setPlans] = useState([]);

  const addPlan = (text) => {
    setPlans([...plans, { id: Date.now(), text, completed: false }]);
  };

  const togglePlan = (id) => {
    setPlans(
      plans.map((plan) =>
        plan.id === id ? { ...plan, completed: !plan.completed } : plan
      )
    );
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <PlanForm onAdd={addPlan} />
        <ScrollView>
          {plans.map((plan) => (
            <TouchableOpacity
              style={[styles.planItem, plan.completed && styles.completed]}
              key={plan.id}
              onPress={() => togglePlan(plan.id)}
            >
              <Text style={styles.planText}>{plan.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8e44ad', // Purple background color
  },
  content: {
    flex: 1,
    padding: 20,
  },
  planItem: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  planText: {
    fontSize: 24,
    color: '#00FF00', // Brighter green color
  },
  completed: {
    textDecorationLine: 'line-through', // Text decoration for completed tasks
    opacity: 0.5, // Reduced opacity for completed tasks
  },
});

export default App;
