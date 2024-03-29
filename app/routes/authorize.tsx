
import { ActionArgs, LoaderArgs, redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { getBearerToken, requestPermission } from "~/helpers/session";

export const loader = async ({ request }: LoaderArgs) => {
    const bearerToken = await getBearerToken(request);
    if (bearerToken)
        return redirect('/LikedTitles');
    return null;
}

export const action = async ({ request }: ActionArgs) => {
    return await requestPermission(request);
}

export default function authorize() {
    return (
        <div className="h-full flex 
        flex-col items-center 
        justify-evenly bg-[#121212]"
        >
            <Form
                method="POST"
                className="p-10 border-2 
                rounded-full bg-green-500 
                border-green-200 text-white 
                flex flex-col justify-around"
            >
                <div>
                    <button
                        type="submit"
                        className="text-white
                         bg-green-500 border-2 
                         border-white hover:bg-primary-700 
                         focus:ring-4 focus:outline-none 
                         focus:ring-primary-300 font-medium 
                         rounded-lg text-sm px-5 py-2.5 
                         text-center dark:bg-primary-600 
                         dark:hover:bg-primary-700 
                         dark:focus:ring-primary-800"
                    >
                        Connecter le compte actuel
                    </button>
                </div>
            </Form>
        </div>
    )
}
