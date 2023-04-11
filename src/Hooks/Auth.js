import {
    useState,
    useEffect,
    createContext,
    useContext,
    useMemo,
} from 'react';
const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const registerUser = async (email, password) => {
    const url = `${urlEndpoint}/users/register`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return data;
};

const loginUser = async (email, password) => {
    const url = `${urlEndpoint}/users/login`;
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password,
        }),
    });
    const data = await response.json();
    return data;
};

const setLSUserData = (token, email) => {
    localStorage.setItem(
        process.env.REACT_APP_TOKEN_HEADER_KEY, JSON.stringify({
            token,
            email,
            })
    )
}

const getLSUserData = () => {
    return JSON.parse(localStorage.getItem(process.env.REACT_APP_TOKEN_HEADER_KEY));
}

const removeLSUserData = () => {
    localStorage.removeItem(process.env.REACT_APP_TOKEN_HEADER_KEY);
    return true;
}

export const AuthProvider = ({ children }) => {
    const [userToken, setUserToken] = useState(null);
    const [userEmail, setUserEmail] = useState("");
    const [isAuthLoading, setIsAuthLoading] = useState(false);
    const [user, setUser] = useState("");

    useEffect(() => {
        // get session data if is still active from the browser
        const userData = getLSUserData();
        if (userData && userData.token) {
            setUserToken(userData.token);
        }
        if (userData && userData.email) {
            setUserEmail(userData.email);
        }
    }, [isAuthLoading]);

    const register = async (email, password) => {
        setIsAuthLoading(true);
        const registerResult = await registerUser(email, password);
        setIsAuthLoading (false);
        return registerResult;
}

const login = async (email, password) => {
    setIsAuthLoading(true);
    const loginResult = await loginUser(email, password);

    
    if (loginResult.success) {
        setLSUserData(loginResult.token, email);
        setUser (loginResult.userID)

    }
    setIsAuthLoading(false);
    return loginResult;
}

const logout = async () => {
    setIsAuthLoading(true);
    await removeLSUserData();
    setUserToken(null);
    setUserEmail("");
    setIsAuthLoading(false);
}

const value = useMemo(() => ({
    userToken,
    userEmail,
    isAuthLoading,
    register,
    login,
    logout,
    user,
}), [userToken]);
return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
