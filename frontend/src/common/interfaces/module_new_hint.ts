export default interface INewHint {
  wordList?: Array<{
    "id"?: string,
    "text"?: string;
    "hints"?: Array<{ "text": string }>;
  }>;
}