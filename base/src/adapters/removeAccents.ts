export default function removeAccents(word: string): string {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
