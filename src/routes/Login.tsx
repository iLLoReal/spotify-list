
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import { getBearerToken, requestPermission } from "../helpers/session";

// HMR invalidate : actions && loader sont source d'effets de bord, à voir s'il convient de les charger depuis un autre module.

export const loginLoader = () => {
    const bearerToken = getBearerToken();
    if (bearerToken)
        return redirect('/liked-titles');
    return null;
}

export const loginAction = async () => {
    return await requestPermission();
}

export default function Login() {
    return (
        <section>
            <Form method="POST">
                <fieldset>
                    <legend>Spotify autorization</legend>
                    <button type="submit">OK</button>
                </fieldset>
            </Form>
        </section>
    )
}
