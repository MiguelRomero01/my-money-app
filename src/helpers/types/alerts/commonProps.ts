export type AlertType = 'success' | 'error' | 'warning' | 'info' | 'question';

export interface AlertOptions {
  title: string;
  text: string | undefined;
  type: AlertType;
  confirmButtonText: string;
}
