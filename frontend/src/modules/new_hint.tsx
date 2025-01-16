import Button from "../common/components/button";
import Form from "../common/components/form";

export default function NewHint() {
  return (
    <form>
      <h1>Adding new hint</h1>
      <label>
        <strong>Name</strong>
        <input type="text" />
      </label>
      <label>
        <strong>Activated?</strong>
        <input type="checkbox" checked />
      </label>
      <section>
        <h3>Do you want to start it with some word?</h3>
        <ul>
          <li><Form.RadioInput inputName="word" strongText text="Bolacha" value="id_123" /></li>
          <li><Form.RadioInput inputName="word" strongText text="Biscoito" value="id_456" /></li>
          <li><Form.RadioInput inputName="word" strongText text="Futebol" value="id_789" /></li>
        </ul>
      </section>

      <Form.Submit>Save</Form.Submit>
    </form>
  )
}