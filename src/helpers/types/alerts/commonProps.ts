export type AlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

export interface AlertOptions {
  title: string;
  text: string;
  type: AlertType;
  confirmButtonText: string;
}
