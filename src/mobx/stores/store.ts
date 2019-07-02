import { MOVIES_STORE, moviesStore } from "./movies";

// TODO: Папку stores можешь выдернуть на уровень папки mobx. Потому что папка mobx в данный момент не несет в данный момент никакой смысловой нагрузки

const store = {
  [MOVIES_STORE]: moviesStore,
};

export default store;
