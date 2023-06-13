import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as { statusText?: string, message?: string };
    return (
        <div>
            Erreur: 
            {error.statusText || error.message}
        </div>)
}
