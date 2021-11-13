import React from "react";
import FormContainer from "../FormContainer";
import TaskForm from "../TaskForm";

const AddNewTaskForm = () => {
  return (
    <FormContainer title="New Task">
      <TaskForm />
    </FormContainer>
  );
};

export default AddNewTaskForm;
