import { Priority } from '../../createTaskForm/enums/Priority';

export const renderPriorityBorderColor = (priority: string): string => {
  switch (priority) {
    case Priority.normal:
      return 'grey.900';
      break;
    case Priority.low:
      return 'info.light';
      break;
    case Priority.high:
      return 'error.light';
      break;
    default:
      return 'grey.900';
  }
};
