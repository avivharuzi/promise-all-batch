import { chunkArray, sleep } from './utils/index.js';

export interface PromiseAllBatchOptions {
  afterEachComplete?: () => void;
  sleepBetween?: number;
}

const promiseAllBatch = async <TData, TValue>(
  arr: TData[],
  promiseCallback: (item: TData) => Promise<TValue>,
  size: number,
  { afterEachComplete, sleepBetween }: PromiseAllBatchOptions = {},
): Promise<TValue[]> => {
  const outputs: TValue[] = [];

  const chunks = chunkArray(arr, size);

  for await (const chunk of chunks) {
    const multiOutputs = await Promise.all(
      chunk.map((item) => promiseCallback(item)),
    );

    outputs.push(...multiOutputs);

    if (afterEachComplete) {
      afterEachComplete();
    }

    if (sleepBetween) {
      await sleep(sleepBetween);
    }
  }

  return outputs;
};

export { promiseAllBatch };

export default promiseAllBatch;
