import 'reflect-metadata';
import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';

describe('CreateAppointment', () => {
  it('should be able to crete a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '12345678',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345678');
  });

  // it('should not be able to create two appointment on the same time', () => {
  //   expect('');
  // });
});
