
import { ActionFunctionArgs, Form, redirect } from "react-router-dom";
import { getBearerToken, logUserIn } from "../helpers/session";

// HMR invalidate : actions && loader sont source d'effets de bord, à voir s'il convient de les charger depuis un autre module.

export const loginLoader = () => {
    const bearerToken =  getBearerToken();
    if (bearerToken)
    {
        console.log('User logged in with bearer token: ', bearerToken);
        return redirect('/liked-titles');
    }
    return null;
}

export const loginAction = async ({ request }: ActionFunctionArgs) => {
    const data = Object.fromEntries(await request.formData());
    const user = {
        username: data.login as string,
        password: data.password as string
    };
    logUserIn(user);
    return redirect('/liked-titles');
}

export default function Login() {
    return (
        <section>
            <Form method="POST">
                <fieldset>
                    <legend>Please login to spotify</legend>
                    <input type="text" id="login" name="login" />
                    <label htmlFor="login">Login</label><br />
                    <input type="password" id="password" name="password" />
                    <label htmlFor="password">Password</label><br />
                    <button type="submit">OK</button>
                </fieldset>
            </Form>
        </section>
    )
}
