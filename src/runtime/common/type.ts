export interface IUsage {
  completion_tokens: number;
  prompt_tokens: number;
  total_tokens: number;
}
export interface IMessage {
  content: string;
  role: string;
}
export interface IChoice {
  finish_reason: string;
  index: number;
  message: IMessage[];
}
export interface IChaCompletions {
  choices: any[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: IUsage;
}
export interface IChaCompletionsResponse {
  data: IChaCompletions;
  state: boolean;
}
