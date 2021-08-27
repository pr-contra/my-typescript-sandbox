abstract class Department {
  // private id: string;
  // private name: string;
  protected employees: string[] = [];
  static fiscalYear: number = 2021;

  constructor(protected id: string, private name: string) {
    // this.id = id;
    // this.name = name;
  }

  abstract describe(this: Department): void;
  // console.log(`Department (${this.id}): ${this.name}`);

  static createEmployee(name: string) {
    return { name: name };
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
  }

  describe() {
    console.log(`IT Department (${this.id})`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new AccountingDepartment('d2', []);
    }
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department (${this.id})`);
  }

  addEmployee(name: string) {
    if (name === 'Jonas') {
      return;
    }

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const accounting = new ITDepartment('d1', ['Pedro', 'Lucía']);

// accounting.describe();

// const accountingCopy = { name: 'cenas', describe: accounting.describe };

// accountingCopy.describe();

// accounting.addEmployee('Pedro');
// accounting.addEmployee('Lucía');
// accounting.printEmployeeInformation();

const it = new ITDepartment('d1', ['Pedro']);
// it.addEmployee('Pedro');
// it.addEmployee('Lucía');
it.describe();
// console.log(it);

// const accounting = new AccountingDepartment('d2', []);
const accounting = AccountingDepartment.getInstance();
accounting.mostRecentReport = 'Something went wrong...';
// accounting.addReport('Something went wrong...');
// console.log(accounting.mostRecentReport);
accounting.addEmployee('Pedro');
accounting.addEmployee('Lucía');
accounting.addEmployee('Jonas');
// accounting.printReports();
// accounting.printEmployeeInformation();

accounting.describe();

const fluffyEmployee = Department.createEmployee('Tori');
// console.log(fluffyEmployee);
// console.log(Department.fiscalYear);
