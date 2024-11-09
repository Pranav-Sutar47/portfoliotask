import { Bounce, toast } from 'react-toastify';

export const showToast = (message,type='default') =>{
    switch(type){
        case 'success':
            toast.success(message, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition : Bounce
                });
            break;
        case 'error':
            toast.error(message);
            break;
        default:
            toast(message);
    }
}
