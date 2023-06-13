
import { ActionFunctionArgs, Form, LoaderFunctionArgs, redirect } from "react-router-dom";

// HMR invalidate : actions && loader sont source d'effets de bord, à voir s'il convient de les charger depuis un autre module.

export const loginLoader = ({ request }: LoaderFunctionArgs) => {
    //Gestion de session, redirection
    console.log(request.headers.get('Cookie'));
    return request.body;
}

export const loginAction = ({ request }: ActionFunctionArgs) => {
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
