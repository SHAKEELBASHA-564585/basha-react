import { useRouteError } from "react-router-dom"; //Catching error ex:(404 error to showcase in UI)
const NotFound = () => {
  const err = useRouteError();
  console.log(err); //we get to know status and statusText when we do a console of useRouter()
  const { status, statusText } = err;
  return (
    <div>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>{status + " :  " + statusText}</h2>
    </div>
  );
};
export default NotFound;
