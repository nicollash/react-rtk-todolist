import { Box, Typography } from "@mui/material";

const TodoItem = ({ task, onDeleteItem }) => {
  return (
    <Box
      key={task.id}
      sx={{ display: "flex", justifyContent: "space-between", width: 300 }}
    >
      <Typography variant="body1">{task.name}</Typography>
      <button onClick={() => onDeleteItem(task)}>Delete</button>
    </Box>
  );
};

export default TodoItem;
