import { Request, Response } from "express";
import { CreateClientUseCase } from "./create-client.usecases";

export class CreateCustomerController {
    constructor () {}

    async handle(request: Request, response: Response) {
        const useCase = new CreateClientUseCase();
        
        try {
            const result = await useCase.execute(request.body);
            // return response.status(201).send();
            return response.json(result);
        } catch (error) {
            return response.status(400).json(error);
        }
    }
}