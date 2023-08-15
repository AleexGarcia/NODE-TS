import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { UserService } from "../services/UserService";
import { UserController } from "./UserController"
import { Request } from "express";

describe('UserController', () => {
    const mockUserService: Partial<UserService> = {
        createUser: jest.fn()
    }
    
    const userController = new UserController(mockUserService as UserService);

    it('Deve adicionar um novo usuário', () => {
        const mockRequest = {
            body: {
                name: 'Alex',
                email: 'alex@dio.bank'
            }
        } as Request;
        const MockResponse = makeMockResponse();
        const response = userController.createUser(mockRequest, MockResponse);

        expect(MockResponse.state.status).toBe(201);
        expect(MockResponse.state.json).toMatchObject({message: 'Usuário criado'})
    })

})