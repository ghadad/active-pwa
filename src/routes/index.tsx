import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  useRouteError,
} from "react-router-dom";

import File from "../pages/File";
import QRCode from "../pages/QRCode";
import RootLayout from "../pages/RootLayout";
import Camera from "../pages/Camera";
import NotFound from "../pages/NotFound";

const ErrorElement = () => {
  let err = useRouteError() as Error;
  return (
    <div>
      <div>message:{err.message}</div>Something went wrong!
      <div>message:{err.stack}</div>Something went wrong!
    </div>
  );
};

// define here all the routes of the app
const Routeselements = [
  <Route path="/" element={<RootLayout />}>
    <Route errorElement={<ErrorElement />}>
      <Route path="file" element={<File />} />
      <Route path="qrcode" element={<QRCode />} />
      <Route path="camera" element={<Camera />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Route>,
];

const router = createBrowserRouter(createRoutesFromElements([Routeselements]));

export default router;
