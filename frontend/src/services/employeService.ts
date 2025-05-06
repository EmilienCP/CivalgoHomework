class EmployeService {
    private static employeIdKey = 'employeId';
  
    static setEmployeId(id: string): void {
      localStorage.setItem(this.employeIdKey, id);
    }
  
    static getEmployeId(): string | null {
      return localStorage.getItem(this.employeIdKey);
    }
  
    static clearEmployeId(): void {
      localStorage.removeItem(this.employeIdKey);
    }
  }
  
  export default EmployeService;