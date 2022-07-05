<script lang="ts">
  import { auth } from "$lib/services/firebase";
  import { onAuthStateChanged } from "firebase/auth";
  import type { User } from "firebase/auth";
  import { loading, user } from "$lib/stores/user";
  import Cookies from "js-cookie";
  import "$lib/assets/global.scss";

  onAuthStateChanged(auth, async (newUser: User | null) => {
    $loading = false;
    $user = newUser;

    if (newUser) {
      const token = await newUser.getIdToken();
      Cookies.set("firebase-token", token);
    } else {
      Cookies.set("firebase-token", "");
    }
  });
</script>

<slot />

<style lang="scss" global>
  @import "src/lib/assets/global";
</style>
