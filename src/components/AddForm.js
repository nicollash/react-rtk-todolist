import { Field, Form, Formik } from "formik";

const AddForm = ({ onAddTask }) => {
  return (
    <Formik
      initialValues={{
        todo: "",
      }}
      onSubmit={(values, { resetForm }) => onAddTask(values, resetForm)}
    >
      <Form>
        <label htmlFor="todo" style={{ marginRight: 10 }}>
          Add ToDo{" "}
        </label>
        <Field id="todo" name="todo" placeholder="TextHere" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default AddForm;
