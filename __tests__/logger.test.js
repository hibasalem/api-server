'use strict';

const loggerMiddleware = require('../src/middleware/logger');
const server = require('../src/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server.app);

describe('Logger', () => {
  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  });
  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('logs output', () => {
    loggerMiddleware(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('go to next', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
