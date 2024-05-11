interface IStorage {
  get(key: string): Promise<string | null> 
  set(key: string, value: string): Promise<void>;
  isDarkPreffered(): Promise<boolean>;
}

export default IStorage;