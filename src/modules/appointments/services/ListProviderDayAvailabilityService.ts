import { injectable, inject } from 'tsyringe';
import { getHours } from 'date-fns';

import IAppointmentRepository from '@modules/appointments/repositories/IAppointmentRepository';

interface IRequest {
  provider_id: string;
  month: number;
  year: number;
  day: number;
}

type IResponse = Array<{
  hour: number;
  available: boolean;
}>;

@injectable()
class ListProviderDayAvailabilityService {
  constructor(
    @inject('AppointmentRepository')
    private appointmentRepository: IAppointmentRepository,
  ) {}

  public async execute({
    provider_id,
    month,
    year,
    day,
  }: IRequest): Promise<IResponse> {
    const appointments = await this.appointmentRepository.findAllInDayFromProvider(
      {
        provider_id,
        year,
        month,
        day,
      },
    );

    const horStart = 8;
    const eachHourArray = Array.from(
      { length: 10 },
      (_, index) => index + horStart,
    );
    const availability = eachHourArray.map(hour => {
      const hasAppointmentInHour = appointments.find(
        appointment => getHours(appointment.date) == hour,
      );

      return {
        hour,
        available: !hasAppointmentInHour,
      };
    });
    return availability;
  }
}

export default ListProviderDayAvailabilityService;
