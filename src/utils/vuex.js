export const getRegisteredMutations = (store) => Object.keys(store._mutations);

export const getRegisteredActions = (store) => Object.keys(store._actions);

export const trimNamespace = (namespaced) => namespaced.split("/").pop();
