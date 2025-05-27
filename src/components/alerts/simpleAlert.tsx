// alerts.ts
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
// props
import { AlertOptions } from '@helpers/types/alerts/commonProps';

const MySwal = withReactContent(Swal);

export function simpleAlert(options: AlertOptions) {
  return MySwal.fire({
    title: options.title,
    text: options.text,
    icon: options.type,
    confirmButtonColor: '#3085d6',
    confirmButtonText: options.confirmButtonText,
  });
}
