export function handleFields(
  event: any,
  setState: (state: any) => void,
  currentState: any,
) {
  const { name, value } = event.target;
  setState({
    ...currentState,
    [name]: value,
  });
}
