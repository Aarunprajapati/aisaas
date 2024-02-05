
import { useEffect } from 'react';
import {Crisp} from 'crisp-sdk-web'

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("7dd84514-19fa-4177-adb6-d1637b122170")
    },[])
    return null;
}
