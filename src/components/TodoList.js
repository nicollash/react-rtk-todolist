import { Box, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";

import { deleteTask } from "../store/tasksSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDeleteItem = (task) => {
    dispatch(deleteTask({ id: task.id }));
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h5" fontWeight={600}>
        Added Todos
      </Typography>
      {tasks.map((task) => (
        <TodoItem key={task.id} onDeleteItem={handleDeleteItem} task={task} />
      ))}
    </Box>
  );
};

export default TodoList;
