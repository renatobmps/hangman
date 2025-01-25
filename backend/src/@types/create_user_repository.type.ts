export default interface ICreateUserRepository {
  hasDuplicate(username: string, email?: string): Promise<boolean>,
  createUser(username: string, password: string, email?: string): Promise<{ id: string }>
}
