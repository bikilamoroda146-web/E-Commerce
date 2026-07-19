import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {

    const [user, setUser] = useState(()=>{
        try {
            const savedUser = localStorage.getItem("user");
            return savedUser ? JSON.parse(savedUser) : null;

        } catch (error){
            console.error("Error loading user", error);
            return null;
        }
    })
    const [loading, setLoading] = useState(false);
    const [error , setError] = useState(null);

    function signup(email, password, name){
        try {
            setLoading(true);
            setError(null);

            //validation 
            if(!email || !password || !name){
                setError("All fields are required");
                setLoading(false);
                return {success: false, error: "All fields are required"};
            }
            // check if user already registered
            const existingUser = localStorage.getItem("User");
            if(existingUser){
                const parsed = JSON.parse(existingUser);
                if(parsed.email === email){
                    setError("User already exists");
                    setLoading(false);
               }
                return {success: false, error: "User already exists"};
            }
            // create ne useer
            const newUser = {
                id: Date.now().toString(),
                name: name.trim(),
                email: email.trim().toLowerCase(),
                phone: "",
                address: "",
                bio: "",
                profileImage: "",
                createdAt: new Date().toISOString
            }

            localStorage.setItem("user", JSON.stringify(newUser));
            localStorage.setItem("registeredUser", JSON.stringify(newUser))

            setUser(newUser);
            setLoading(false);
            
            return {success: true,user: newUser}

        } catch (err) {
            const errorMsg = err instanceof Error ? err.message : "sign up failed"
            setError(errorMsg);
            setLoading(false);
            return {success: false,error: errorMsg}
        }
    }


    return(
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth(){
    const context = useContext(AuthContext);

    if(!context){
        throw new Error("useAuth must be used within an AuthProvider")
    }
    return context;
}