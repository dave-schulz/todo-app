import { TaskCounterStatusType } from '../interfaces/ITaskCounter';

import { Status } from '../../createTaskForm/enums/Status';

export const emitCorrectLabel = (status: TaskCounterStatusType): string => {
  switch (status) {
    case Status.todo:
      return "Todo's";
      break;

    case Status.inProgress:
      return 'In Progress';
      break;

    case Status.completed:
      return 'Completed';
      break;
  }
};
