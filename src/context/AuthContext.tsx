"use client"
import React, { createContext, useReducer, useEffect, ReactNode, useState } from "react";

interface AuthState {
  user: any | null;
  loading: boolean;
  error: any | null;
}

interface AuthContextProps {
  user: any | null;
  loading: boolean;
  error: any | null;
  dispatch: React.Dispatch<AuthAction>;
}

type AuthAction =
  | { type: "LOGIN_START" }
  | { type: "LOGIN_SUCCESS"; payload: any }
  | { type: "LOGIN_FAILURE"; payload: any }
  | { type: "LOGOUT" }
  | { type: "INITIALL"; payload: any}

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const AuthContext = createContext<AuthContextProps>({
  user: null,
  loading: false,
  error: null,
  dispatch: () => {},
});

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        loading: true,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        loading: false,
        error: null,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        loading: false,
        error: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        loading: false,
        error: null,
      };
      case "INITIALL":
        return action.payload;
    default:
      return state;
  }
};

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}: AuthContextProviderProps) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const [initialRender, setInitialRender] = useState(true);
  useEffect(() => {
    console.log("first render")
    dispatch({type: "INITIALL", payload: {
      user: JSON.parse(localStorage.getItem("user") || "null") || null,
      loading: false,
      error: null,
    }});
    setInitialRender(false);
  }, [])
  useEffect(() => {
    if(!initialRender){
    console.log("second render");
    localStorage.setItem("user", JSON.stringify(state.user));
    }
  }, [state.user]);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
