import { v4 as uuidv4 } from "uuid";

function generateCustomId(section: number) {
  return `${section}_${uuidv4()}`;
}

export const buildVectorObjects = (embeddings: number[][], texts: string[]) => {
  return embeddings.map((vector, i) => ({
    id: `text-${i}`,
    values: vector,
    metadata: { text: texts[i] },
  }));
};

export function buildVectorQdrant(embeddings: number[][], texts: string[], section: number, title: string) {
  return embeddings.map((vector, i) => ({
    id: uuidv4(),
    vector,
    payload: { title: title, seqn: i, text: texts[i], section: section },
  }));
}
