import { Request, Response } from 'express';
import { parseISO, format } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;
    const user_id = request.user.id;
    const dateFormatted = format(date, 'yyyy-MM-dd HH:mm:ss');
    const parseDate = parseISO(dateFormatted);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parseDate,
      provider_id,
      user_id,
    });

    return response.json(appointment);
  }
}
