import { IDisabled } from './IDisabled';

export interface IDateField extends IDisabled {
  value?: Date | null;
  onChange?: (e: Date | null) => void;
}
