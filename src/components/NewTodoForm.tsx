
interface NewTodoFormProps {
  value: string,
  updateText: (str: string) => void,
  handleAction: () => void,
}

const NewTodoForm: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {
  return (
    <header className="header">
      <h1>todos</h1>
      <label>
        <input
          className="new-todo"
          placeholder='What needs to be done?'
          autoFocus
          value={value}
          onChange={(e) => updateText(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") { handleAction() }
          }
          }
        />
      </label>
    </header>
  );
};

export default NewTodoForm;