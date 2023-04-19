import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form } from "formik";
import { Box, Button, Typography } from "@mui/material";

import { addTasks } from "../store/tasksSlice";
import { AddForm, TodoList } from "../components";

const BasicForm = () => {
  const dispatch = useDispatch();
  const handleAddTask = (values, resetForm) => {
    const { todo } = values;
    if (!todo || todo.trim().length === 0) return;

    dispatch(addTasks({ name: todo }));
    resetForm();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      <Typography variant="h4" fontWeight="bold">
        TODO
      </Typography>
      <AddForm onAddTask={handleAddTask} />
      <TodoList />
    </Box>
  );
};

export default BasicForm;
