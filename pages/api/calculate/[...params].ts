import { add, subtract, multiply, divide, Operation } from "../../../utils/calculate";
import { NextApiRequest, NextApiResponse } from "next";

interface Params {
  operation: Operation;
  first: number;
  second: number;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== "GET") {
      throw new Error(
        `Unsupported method ${req.method}. Only GET method is supported`
      );
    }

    const params: Params = extractParams(req.query.params);
    const result = calculate(params.operation, params.first, params.second);
    res.status(200).json({ result });
  } catch (e: any) {
    res.status(500).json({ message: e.message });
  }
}

function calculate(operation: Operation, first: number, second: number): number {
  let result: number;

  switch (operation) {
    case Operation.Add:
      result = add(first, second);
      break;
    case Operation.Subtract:
      result = subtract(first, second);
      break;
    case Operation.Multiply:
      result = multiply(first, second);
      break;
    case Operation.Divide:
      result = divide(first, second);
      break;
    default:
      throw new Error(`Unsupported operation ${operation}`);
  }

  return result;
}

function extractParams(queryParams: string[] | string | undefined): Params{
  if (queryParams?.length !== 3) {
    throw new Error(
      `Query params should have 3 items. Received ${queryParams?.length}: ${queryParams}`
    );
  }

  try {
    const params: Params = {
      operation: queryParams[0] as Operation,
      first: parseInt(queryParams[1]),
      second: parseInt(queryParams[2]),
    };
    return params;
  } catch (e) {
    throw new Error(`Failed to process query params. Received: ${queryParams}`);
  }
}

