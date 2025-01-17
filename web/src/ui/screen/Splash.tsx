import { useLocation } from "@solidjs/router";
import { createSignal, JSXElement, Show } from "solid-js";

import { SERVICE_NAME } from "../../service/constant/domain";
import { useAsync } from "../../service/hook/useAsync";
import { useAuth } from "../../service/hook/useAuth";
import { client } from "../../service/util/api";

export const Splash = (props: { children: JSXElement }) => {
  const { loadUser } = useAuth();

  const { pathname } = useLocation();
  const showLoading = pathname.startsWith("/app");

  const { loading: authLoading, wrap } = useAsync();

  const [loading, setLoading] = createSignal(showLoading);
  if (showLoading) {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }

  wrap(() =>
    client
      .get("api/auth")
      .json<{ isLogin: boolean }>()
      .then((data) => {
        if (data.isLogin) {
          return loadUser();
        }
      }),
  );

  return (
    <Show fallback={props.children} when={loading() || authLoading()}>
      <div class="fixed inset-0 flex items-center justify-center bg-white">
        <div class="grid grid-cols-2 items-center justify-items-end gap-10">
          <img alt="" class="size-32" src="/asset/logo.jpg" />
          <h1 class="text-6xl font-semibold">{SERVICE_NAME}</h1>
        </div>
      </div>
    </Show>
  );
};
