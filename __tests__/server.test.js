'use strict';

const server = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server.app);
let id;

describe('Create a record using POST /clothes ', () => {
  it('respond with correct status codes ', async () => {
    const testData = { name: 'test' };
    const response = await mockRequest.post(`/api/v1/clothes`).send(testData);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const testData = { name: 'test' };
    const testObject = { name: 'test' };
    const response = await mockRequest.post(`/api/v1/clothes`).send(testData);
    expect(response.body).toBeTruthy();
    expect(response.body).toMatchObject(testObject);
    expect(response.body.name).toBe('test');
  });
});

describe('Read a list of records using GET /clothes ', () => {
  it('respond with correct status codes ', async () => {
    const response = await mockRequest.get(`/api/v1/clothes`);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const response = await mockRequest.get(`/api/v1/clothes`);
    const testObject = { name: 'test' };
    expect(response.body.result[0].name).toBe('test');
    id = response.body.result[0]._id;
    console.log(id);
  });
});
describe('Read a record using GET /clothes ', () => {
  it('respond with correct status codes ', async () => {
    const testObject = { name: 'test' };
    const response = await mockRequest.get(`/api/v1/clothes/${id}`);
    expect(response.status).toBe(200);
    // console.log(response.body);
    expect(response.body.result[0]._id).toBe(id);
    expect(response.body.result[0].name).toBe('test');
    // console.log(id);
  });
});

describe('Update a record using PUT /clothes ', () => {
  it('respond with correct status codes  ', async () => {
    const testEditData = { name: 'testEdit' };
    const response = await mockRequest
      .get(`/api/v1/clothes/${id}`)
      .send(testEditData);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    // const testEditData = { testEdit: 'testEdit' };
    // const testObject = { testEdit: 'testEdit' };
    // const response = await mockRequest
    //   .put(`/api/v1/clothes/${id}`)
    //   .send(testEditData);
    // expect(response.body).toMatchObject(testObject);
  });
});

describe('Destroy a record using DELETE /clothes ', () => {
  it('respond with correct status codes ', async () => {
    const response = await mockRequest.delete(`/api/v1/clothes/${id}`);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const response = await mockRequest.delete(`/api/v1/clothes/${id}`);
    expect(response.body).toBe(null);
  });
});

describe('Create a record using POST /food ', () => {
  it('respond with correct status codes ', async () => {
    const testData = { name: 'test' };
    const response = await mockRequest.post(`/api/v1/food`).send(testData);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const testData = { name: 'test' };
    const testObject = { name: 'test' };
    const response = await mockRequest.post(`/api/v1/food`).send(testData);
    expect(response.body).toBeTruthy();
    expect(response.body).toMatchObject(testObject);
    expect(response.body.name).toBe('test');
  });
});

describe('Read a list of records using GET /food', () => {
  it('respond with correct status codes ', async () => {
    const response = await mockRequest.get(`/api/v1/food`);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const response = await mockRequest.get(`/api/v1/food`);
    const testObject = { name: 'test' };
    expect(response.body[0].name).toBe('test');
    id = response.body[0]._id;
    console.log(id);
  });
});
describe('Read a record using GET /food', () => {
  it('respond with correct status codes ', async () => {
    const testObject = { name: 'test' };
    const response = await mockRequest.get(`/api/v1/food/${id}`);
    expect(response.status).toBe(200);
    // console.log(response.body);
    expect(response.body[0]._id).toBe(id);
    expect(response.body[0].name).toBe('test');
    // console.log(id);
  });
});

describe('Update a record using PUT /food', () => {
  it('respond with correct status codes  ', async () => {
    const testEditData = { name: 'testEdit' };
    const response = await mockRequest
      .get(`/api/v1/food/${id}`)
      .send(testEditData);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    // const testEditData = { testEdit: 'testEdit' };
    // const testObject = { testEdit: 'testEdit' };
    // const response = await mockRequest
    //   .put(`/api/v1/clothes/${id}`)
    //   .send(testEditData);
    // expect(response.body).toMatchObject(testObject);
  });
});

describe('Destroy a record using DELETE /food', () => {
  it('respond with correct status codes ', async () => {
    const response = await mockRequest.delete(`/api/v1/food/${id}`);
    expect(response.status).toBe(200);
  });
  it('respond with correct data ', async () => {
    const response = await mockRequest.delete(`/api/v1/food/${id}`);
    expect(response.body).toBe(null);
  });
});

describe('geniral', () => {
  it('response with 404 on a bad request', async () => {
    const response = await mockRequest.get('/foo');
    expect(response.status).toEqual(404);
  });
  it('response with 200 on a correct request', async () => {
    const response = await mockRequest.get('/');
    expect(response.status).toEqual(200);
  });
  it('response with 404 on a bad method', async () => {
    const response = await mockRequest.put('/');
    expect(response.status).toEqual(404);
  });
});
