//alerts
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
//props
import { AlertOptions } from '@helpers/types/alerts/commonProps';

interface AlertProps extends AlertOptions {
  cancelButtonColor?: string;
  confirmButtonColor?: string;
  confirmButtonText: string;
  cancelButtonText: string;
  onConfirm: () => void;
}

const MySwal = withReactContent(Swal);

export function ConfirmAlert(options: AlertProps) {
  return MySwal.fire({
    title: options.title,
    text: options.text,
    icon: options.type,
    showCancelButton: true,
    confirmButtonColor: options.confirmButtonColor,
    cancelButtonColor: options.cancelButtonColor,
    confirmButtonText: options.confirmButtonText,
    cancelButtonText: options.cancelButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      options.onConfirm();
    }
  });
}
