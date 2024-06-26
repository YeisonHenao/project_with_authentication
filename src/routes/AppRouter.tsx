import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

type Status = "checking" | "authenticated" | "no-authenticated";

const status: Status = "authenticated";

export const AppRouter = () => {
  if (status === "checking")
    return <div className="loading">Checking credentials...</div>;

  return (
    <BrowserRouter>
      <Routes>
        {status === "authenticated" ? (
          <Route path="/*" element={<PrivateRoutes />} />
        ) : (
          <Route path="/*" element={<PublicRoutes />} />
        )}

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
