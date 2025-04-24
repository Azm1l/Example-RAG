import { v4 as uuidv4 } from "uuid";

export function buildVectorQdrant(embeddings: number[][], texts: string[], section: number, title: string) {
  return embeddings.map((vector, i) => ({
    id: uuidv4(),
    vector,
    payload: { title: title, seqn: i, text: texts[i], section: section },
  }));
}
