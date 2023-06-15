
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { getBearerToken, requestPermission } from "~/helpers/session";
import { Form } from "@remix-run/react";

export const loader = async ({request}: LoaderArgs) => {
    const bearerToken = await getBearerToken(request);
    if (bearerToken)
        return redirect('/LikedTitles');
    return null;
}

export const action = async ({request}: ActionArgs) => {
    return await requestPermission(request);
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
