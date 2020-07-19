import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import ICreateNotificationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

export default interface INotificationsRepository {
  create(date: ICreateNotificationDTO): Promise<Notification>;
}
