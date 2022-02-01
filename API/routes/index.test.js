const request = require('supertest');
const supertest = require('supertest');
const app = require('../../index');


describe('Routes - Truck', () => {
  describe('create a truck', () => {
    // it('should create a new truck and return 200 status in response', async () => {
    //   const res = await request(app)
    //     .post('/trucks/create')
    //     .send({
    //       weight: 5.6,
    //       loaded_package_ids: null
    //     });

    //   expect(res.status).toBe(200);
    //   expect(res.body).toEqual({ message: 'Truck created' });
    // });
    it('should not create a truck when there is a missing param', async() => {
      const res = await request(app)
      .post('/trucks/create')
      .send({
        loaded_package_ids: null
      });

    expect(res.status).toBe(500);
    expect(res.body).toEqual({ error: 'notNull Violation: Truck.weight cannot be null' });
    });
  });
  describe('get truck by id', () => {
    it('should find a truck by id', async () => {
      const id = '66885a9d-74a1-4aa7-b64b-f9d85f996d49'
      const res = await request(app)
      .get(`/trucks/${id}`)

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty('truck');
    })
  })
})