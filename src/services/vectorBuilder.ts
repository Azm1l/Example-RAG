export const buildVectorObjects = (embeddings: number[][], texts: string[]) => {
    return embeddings.map((vector, i) => ({
      id: `text-${i}`,
      values: vector,
      metadata: { text: texts[i] },
    }));
  };
  