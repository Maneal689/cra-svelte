import type { User } from "firebase/auth";
import {writable} from "svelte/store";

export const user = writable<null | User>(null)
export const loading = writable<boolean>(true)