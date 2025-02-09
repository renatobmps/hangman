export interface ThrowAlertError {
  err: any;
  genericMessage?: string;
}

export default function throwAlertError({
  err,
  genericMessage = "Erro inesperado",
}: ThrowAlertError) {
  const { response, message } = err || {};
  const { data, statusText } = response || {};
  const { error } = data || {};
  const messageErrorString = message || error || statusText || genericMessage;

  alert(messageErrorString);
}
