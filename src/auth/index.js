import { useUser } from './useUser';

export default function isLoggedIn() {
    const user = useUser()
    console.log('user', user)
    if (!user) return false;
    return user;
}