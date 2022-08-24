import { AuthProvider } from "./auth"
import { AppRouter } from "./router/AppRouter"
// npm add query-string

export const HoroesApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

