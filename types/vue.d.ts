import VueEcho from "../src/VueEcho";

declare module "vue/types/vue" {
  interface Vue {
    $socket: {
      $subscribe: (event: string, fn: Function) => void;
      $unsubscribe: (event: string) => void;
      connected: boolean;
      disconnected: boolean;
    };
  }
}

declare module "vue" {
  interface ComponentCustomOptions {
    sockets?: Object;
  }
}

declare module "vue" {
  interface ComponentCustomProperties {
    $vueEcho: typeof VueEcho;
  }
}
