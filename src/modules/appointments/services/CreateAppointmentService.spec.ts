import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';
import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';

let fakeAppointmentsRepository: FakeAppointmentsRepository;
let createAppointmentService: CreateAppointmentService;
describe('CreateAppointment', () => {
  beforeEach(() => {
    fakeAppointmentsRepository = new FakeAppointmentsRepository();
    createAppointmentService = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
  });

  it('should be able to crete a new appointment', async () => {
    const appointment = await createAppointmentService.execute({
      date: new Date(),
      provider_id: '12345678',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('12345678');
  });

  it('should not be able to create two appointment on the same time', async () => {
    const appointmentDate = new Date(2020, 4, 10, 11);

    await createAppointmentService.execute({
      date: appointmentDate,
      provider_id: '12345678',
    });

    await expect(
      createAppointmentService.execute({
        date: appointmentDate,
        provider_id: '12345678',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
