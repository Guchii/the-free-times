interface AppContextInterface {
  category: string;
  setCategory: (
    category: string
  ) => void | ((callback: (old: string) => string) => void);
}
